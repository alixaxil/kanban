package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Task;
import hu.elte.alkfejl.entity.Team;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository 
       extends CrudRepository<Task, Long> {
    List<Task> findAllByText(String text);
    Optional<Iterable<Task>> findAllByTeam(Team team);
    List<Task> findAllByVersion(int version);
    
    //@Query("")
    //List<Todo> doMyQuery();
            
}
