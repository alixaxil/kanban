package hu.elte.kanban.repository;

import hu.elte.kanban.entity.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends
        CrudRepository<User, Long> {
    
    Optional<User> findByUsernameAndPassword(String username, 
                                             String password);
}
