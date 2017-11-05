package hu.elte.alkfejl.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Team extends BaseEntity{
    @Column(nullable = false)
    private String name;
    

    @OneToMany(targetEntity = Task.class,
            cascade = CascadeType.ALL,
            mappedBy = "team")
    private List<Task> tasks;
    
    // TODO: join teams with tasks and members
    //@JoinColumn
    //@OneToMany(targetEntity = User.class)
    //@Column(nullable = true)
    //private List<User> members;
}
