package application.routes;

import application.schema.post.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;



@Controller
public class AboutController {
    @RequestMapping(value="/about")
    public String index() {
        return "about";
    }
}
