package application.routes;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
public class HomeController {
    @CrossOrigin(origins = "http://localhost:8081")
    @RequestMapping(value="/")
    public String index() {
        return "index";
    }

}
