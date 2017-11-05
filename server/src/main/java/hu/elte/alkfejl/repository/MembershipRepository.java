package hu.elte.alkfejl.repository;

import hu.elte.alkfejl.entity.Membership;
import hu.elte.alkfejl.entity.Task;
import hu.elte.alkfejl.entity.Team;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MembershipRepository 
       extends CrudRepository<Membership, Long> {
    List<Task> findAllByUser(String text);
    List<Membership> findAllByTeam(Team team);
   
}
