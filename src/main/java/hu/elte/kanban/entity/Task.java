package hu.elte.kanban.entity;

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
public class Task extends BaseEntity {
    @Column(nullable = false)
    private String text;
   
    // TODO: One-to-one join with a team
    // TODO: One-to-one join with a team member
}
