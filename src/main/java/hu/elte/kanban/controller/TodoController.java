package hu.elte.kanban.controller;

import hu.elte.kanban.annotation.Role;
import hu.elte.kanban.entity.Task;
import hu.elte.kanban.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import hu.elte.kanban.repository.TaskRepository;
import hu.elte.kanban.repository.TeamRepository;

@Controller
@RequestMapping("/todo")
public class TodoController {
    
    @Autowired
    private TaskRepository taskRepository;
    @Autowired
    private TeamRepository teamRepository;
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/list")
    public String list(Model model) {
        Task newTask = new Task();
        Iterable<Task> list = taskRepository.findAll();
        model.addAttribute("tasks", list);
        model.addAttribute("newTask", newTask);
        return "tasklist";
    }
    
    @Role({User.Role.ADMIN})
    @PostMapping("/add")
    public String addTodo(@ModelAttribute Task newTodo) {
        taskRepository.save(newTodo);
        return "redirect:/task/list";
    }
    
}
