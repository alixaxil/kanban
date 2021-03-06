package hu.elte.alkfejl.controller;

import hu.elte.alkfejl.entity.User;
import hu.elte.alkfejl.repository.UserRepository;
import hu.elte.alkfejl.service.SessionService;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Controller
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private SessionService sessionService;
    
    @GetMapping("/login")
    public String getLogin(Model model) {
        User loginUser = new User();
        model.addAttribute("loginUser", 
                           loginUser);        
        return "login";
    }
    
    @RequestMapping("/login")
    public ResponseEntity<User> postLogin(
            @RequestBody User loginUser) {
        Optional<User> login = 
            userRepository.findByUsernameAndPassword(
            loginUser.getUsername(), 
            loginUser.getPassword());
        if(login.isPresent()) {
            System.out.println("Login successful");
            System.out.println(login.get().toString());
            sessionService.setCurrentUser(login.get());
            return ResponseEntity.ok(login.get());
        } else {
            System.out.println("Login failed");
            return ResponseEntity.status(403).build();
        }
    }
    
    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("newUser", new User());
        return "register";
    }
    
    @PostMapping("/register")
    public String postRegister(@ModelAttribute User newUser) {
        newUser.setRole(User.Role.USER);
        userRepository.save(newUser);
        return "redirect:/auth/login";
    }
    
    @RequestMapping("/logout")
    public ResponseEntity logout() {
        sessionService.setCurrentUser(null);
        return ResponseEntity.ok(false);
    }
    
    @RequestMapping("/user")
    public ResponseEntity getUser() {
        if (sessionService.getCurrentUser() == null){
            return ResponseEntity.ok(false);
        } else {
            return ResponseEntity.ok(sessionService.getCurrentUser());
        }
    }
    
    @RequestMapping("/debug")
    public String debug() {
        System.out.println(sessionService.getCurrentUser());
        return "redirect:/auth/login";
    }
}