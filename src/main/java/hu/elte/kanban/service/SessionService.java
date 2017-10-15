package hu.elte.kanban.service;

import hu.elte.kanban.entity.User;
import lombok.Data;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class SessionService {
    private User currentUser;
}
