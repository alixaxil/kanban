package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Task;
import hu.elte.alkfejl.entity.Team;
import hu.elte.alkfejl.entity.User;
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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
@RequestMapping("/api/task")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TeamRepository teamRepository;
    @Autowired
    private SessionService sessionService;
    
    
    private Team team;
    
    public List<User> getUsers(){
            List<User> users = new ArrayList<>();
            return users;
    }

     /*
    @GetMapping("")
    public ResponseEntity<Iterable<Team>> getAll() {
        Iterable<Team> items = teamRepository.findAll();
        return ResponseEntity.ok(items);
    }
    
      @GetMapping("/{id}")
    public ResponseEntity<Team> getOne(@PathVariable Long id) {
        Team item = teamRepository.findOne(id);
        return ResponseEntity.ok(item);
    }
    */
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/list/{id}")
    public ResponseEntity<Iterable<Task>> list(@PathVariable Long id) {
 
            Team requestedTeam = teamRepository.findOne(id);
        
            System.out.println("Team found: ");
            System.out.println(requestedTeam.getName());
            for (Task task : requestedTeam.getTasks()){
                System.out.println(task.getText());
            }
            return ResponseEntity.ok(requestedTeam.getTasks());
 
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
    @GetMapping("/assign")
    public String assignTask(@RequestParam(value = "taskId", 
                                      required = true) Long taskId){
        User user = sessionService.getCurrentUser();
        Task task = taskRepository.findOne(taskId);
        Team team = task.getTeam();
        task.setAssignee(user);
        taskRepository.save(task);
        System.out.println("Assigned");
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
