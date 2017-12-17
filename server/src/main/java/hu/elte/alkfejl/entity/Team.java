package hu.elte.alkfejl.entity;

import java.util.List;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonIgnore;

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
    @JsonIgnore
    private List<Task> tasks;

    @JsonIgnore
    public List<Task> getTasks() {
        return tasks;
    }
	
	public void addTask(Task task){
		tasks.add(task);
	}
}
