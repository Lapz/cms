package application.routes;

public class PostNotFoundException extends RuntimeException {
    PostNotFoundException(Integer id) {
        super("Couldn't find the post "+ id);
    }
}
