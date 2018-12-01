package application.schema.post;


import javax.persistence.*;

import lombok.Data;

import java.util.Calendar;
import java.util.Date;

@Data
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    public String title;
    public String author;
    public String body;
    @Column(name="created_at")
    public Date createdAt;


    private Post() {}

    public Post(String title,String author,String body) {
        this.createdAt = new Date();
        this.title = title;
        this.author = author;
        this.body = body;
        this.createdAt = new Date();

    }


}
