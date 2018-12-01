package application.routes;

import application.schema.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PostController {

    @Autowired
    private PostRepository repository;

    @RequestMapping(value = "posts/{id}")
    public String index(@PathVariable Integer id, Model model) {
        model.addAttribute(
                "post",
                repository.findById(id).orElseThrow(() -> new PostNotFoundException(id))
        );
        return "post";
    }
}
