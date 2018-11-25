package application.schema.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

//@Controller
//@RequestMapping("/users")
public class UserController {
    @Autowired

    private UserRepository userRepository;

    @GetMapping(path="/add")
    public @ResponseBody String addNewUser(@RequestParam String name,@RequestParam String email) {
        User u = new User();
        u.setName(name);
        u.setEmail(email);

        userRepository.save(u);


        return "User Added";
    }


    @GetMapping(path="/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }


}
