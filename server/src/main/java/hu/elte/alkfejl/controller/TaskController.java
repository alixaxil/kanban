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
    private Team team;
    
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
        } else {
            System.out.println("Team not found");
        }
        
        return "tasklist";
    }
   
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @PostMapping("/list")
    public String addTodo(@ModelAttribute Task newTask) {
      
        newTask.setAssignee("semmi");
        newTask.setTeam(team);
        newTask.setProgress(Task.Progress.BACKLOG);
        team.getTasks().add(newTask);
        taskRepository.save(newTask);
        return "redirect:/task/list?teamName="+team.getName();
    }
}
