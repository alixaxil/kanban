package hu.elte.kanban.entity;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Team extends BaseEntity{
    @Column(unique = true, nullable = false)
    private String teamname;
    
    //TODO: One-to-one join with a user (admin of the team)
    private User admin;
    //TODO: One-to-many join with users (members of the team)
    private List<User> users;
}
