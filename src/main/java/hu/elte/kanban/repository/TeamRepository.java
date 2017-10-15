package hu.elte.kanban.repository;


import hu.elte.kanban.entity.Team;
import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends
        CrudRepository<Team, Long> {
    List<Team> findAllByTeamName(String teamname);
    
}