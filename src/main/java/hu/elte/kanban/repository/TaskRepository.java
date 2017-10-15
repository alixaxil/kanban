package hu.elte.kanban.repository;

import hu.elte.kanban.entity.Task;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository 
       extends CrudRepository<Task, Long> {
    List<Task> findAllByText(String text);
    List<Task> findAllByVersion(int version);
    
    //@Query("")
    //List<Todo> doMyQuery();
            
}
