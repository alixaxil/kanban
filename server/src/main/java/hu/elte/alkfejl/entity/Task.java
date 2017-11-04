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
@EqualsAndHashCode(callSuper = true)
public class Task extends BaseEntity {
    @Column(nullable = false)
    private String text;
    
    @Column(nullable = false)
    private String description;
    
    //@JoinColumn
    //@OneToOne(targetEntity = User.class)
    @Column(nullable=true)
    private String assignee;
    
    /* TODO:
    @JoinColumn
    @ManyToOne(targetEntity = Team.class)
    private Team team;
    */
   
}
