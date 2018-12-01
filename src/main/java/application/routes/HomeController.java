package application.routes;

import application.schema.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import application.schema.post.PostRepository;

@Controller
public class HomeController {
    @Autowired
    private PostRepository repository;

    @RequestMapping(value="/")
    public String index(Model model) {

        model.addAttribute("posts",repository.findAll());
        return "index";
    }

}
