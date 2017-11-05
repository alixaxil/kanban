package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Membership;
import hu.elte.alkfejl.entity.Task;
import hu.elte.alkfejl.entity.Team;
import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.MembershipRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import hu.elte.alkfejl.repository.TaskRepository;
import hu.elte.alkfejl.repository.TeamRepository;
import hu.elte.alkfejl.service.SessionService;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/task")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private MembershipRepository membershipRepository;
    @Autowired
    private SessionService sessionService;
    
    
    private Team team;
    
    public List<User> getUsers(List<Membership> list){
            List<User> users = new ArrayList<>();
            for(Membership item: list){
                User user = item.getUser();
                users.add(user);
            }
            return users;
    }

    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/list")
    public String list(@RequestParam(value = "teamName", 
                                      required = true) String teamName,
            Model model) {
 
        Optional<Team> requestedTeam = teamRepository.findByName(teamName);
        if(requestedTeam.isPresent()) {
            System.out.println("Team found: ");
            System.out.println(requestedTeam.get().getName());
            team = requestedTeam.get();
            Task newTask = new Task();
            for (Task task : team.getTasks()){
                System.out.println(task.getText());
            }
            model.addAttribute("tasks", team.getTasks());
            model.addAttribute("newTask", newTask);
            model.addAttribute("teamName", teamName);
            model.addAttribute("members", getUsers(team.getMemberships()));
        } else {
            System.out.println("Team not found");
        }
        
        return "tasklist";
    }
   
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @PostMapping("/list")
    public String addTask(@ModelAttribute Task newTask) {
      
        //newTask.setAssignee("semmi");
        newTask.setTeam(team);
        newTask.setProgress(Task.Progress.BACKLOG);
        team.getTasks().add(newTask);
        taskRepository.save(newTask);
        return "redirect:/task/list?teamName="+team.getName();
    }
    
    
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/subscribe")
    public String subscribeToTeam(@RequestParam(value = "teamName", 
                                      required = true) String teamName,
            Model model) {
 
        Optional<Team> requestedTeam = teamRepository.findByName(teamName);
        if(requestedTeam.isPresent()) {
            Membership membership = new Membership();
            membership.setTeam(team);
            membership.setUser(sessionService.getCurrentUser());
            membershipRepository.save(membership);
            System.out.println("Member added");
            
        } else {
            System.out.println("Team not found");
        }
        
        model.addAttribute("userName", sessionService.getCurrentUser().getUsername());
        model.addAttribute("teamName", teamName);
        return "hello";
    }
    
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/assign")
    public String assignTask(@RequestParam(value = "taskId", 
                                      required = true) Long taskId){
        User user = sessionService.getCurrentUser();
        Task task = taskRepository.findOne(taskId);
        Team team = task.getTeam();
        if(getUsers(team.getMemberships()).contains(user)){
            task.setAssignee(user);
            taskRepository.save(task);
            System.out.println("Assigned");
        } else {
            System.out.println("You are not a member of this team!");
        }
        return "redirect:/task/list?teamName="+team.getName();
    }
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/progress")
    public String modifyProgress(@RequestParam(value = "taskId", 
                                      required = true) Long taskId, 
                                @RequestParam(value = "progress", 
                                      required = true) Task.Progress progress){
        System.out.println(progress);
        User user = sessionService.getCurrentUser();
        Task task = taskRepository.findOne(taskId);
        Team team = task.getTeam();
        
        //if(getUsers(team.getMemberships()).contains(user)){
            task.setProgress(progress);
            taskRepository.save(task);
        //} else {
            //System.out.println("You are not a member of this team!");
        //}
        
        return "redirect:/task/list?teamName="+team.getName();
  
    }
   
}
