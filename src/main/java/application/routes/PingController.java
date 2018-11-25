package application.routes;

import java.util.concurrent.atomic.AtomicLong;

import application.routes.Ping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@RestController
public class PingController {

    private static final String template = "Ping, %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/ping")
    public Ping ping() {
        return  new Ping(counter.incrementAndGet());
    }


}
