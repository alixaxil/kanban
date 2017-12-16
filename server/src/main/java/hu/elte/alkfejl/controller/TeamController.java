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
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/api/team")

public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
    
    @Role({User.Role.USER, User.Role.ADMIN})
    @GetMapping("/list")
    public String list(Model model) {
        Team newTeam = new Team();
        Iterable<Team> list = teamRepository.findAll();
        model.addAttribute("teams", list);
        model.addAttribute("newTeam", newTeam);
        return "teamlist";
    }

    @Role({User.Role.USER, User.Role.ADMIN})
    @PostMapping("/list")
    public String addTask(@ModelAttribute Team newTeam) {
        List<Task> tasks = new ArrayList<>();
        newTeam.setTasks(tasks);
        teamRepository.save(newTeam);
        return "redirect:/team/list";
    }
    
}
