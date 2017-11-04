package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.annotation.Role;
import hu.elte.alkfejl.entity.Task;
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

@Controller
@RequestMapping("/todo")
public class TaskController {
    
    @Autowired
    private TaskRepository taskRepository;
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/list")
    public String list(Model model) {
        Task newTask = new Task();
        Iterable<Task> list = taskRepository.findAll(); //TODO: Find all by the team
        model.addAttribute("tasks", list);
        model.addAttribute("newTask", newTask);
        return "todolist";
    }
    
    @Role({User.Role.ADMIN})
    @PostMapping("/add")
    public String addTodo(@ModelAttribute Task newTask) {
        newTask.setAssignee("semmi");
        taskRepository.save(newTask);
        return "redirect:/todo/list";
    }
}
