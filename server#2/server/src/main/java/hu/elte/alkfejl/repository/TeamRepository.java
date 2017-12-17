package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Team;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TeamRepository extends
        CrudRepository<Team, Long> {
    
    Optional<Team> findByName(String name);
    
}
