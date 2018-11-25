package application.schema.post;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    public String title;
    private String author;
    public String body;

    private Post() {}

    public Post(String title,String author,String body) {
        this.title = title;
        this.author = author;
        this.body = body;
    }
}
