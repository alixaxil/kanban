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
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
@RequestMapping("/api/team")

public class TeamController {
    
    @Autowired
    private TeamRepository teamRepository;
    
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

    @PostMapping("")
    public ResponseEntity<Team> create(@RequestBody Team item) {
        Team saved = teamRepository.save(item);
        return ResponseEntity.ok(saved);
    }
    
}
