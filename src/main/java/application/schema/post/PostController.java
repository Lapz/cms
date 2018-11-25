package application.schema.post;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;


public class PostController {
    @Autowired
    private PostRepository postRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Post> getAllPosts() {
        return  postRepository.findAll();
    }

    @GetMapping(path="/{id}")
    public Post findPost(@PathVariable Integer id) {
        return postRepository.findById(id).orElseThrow(() -> new PostNotFoundException(id));
    }

    @PostMapping(path="/add")
    public @ResponseBody String addPost(@RequestBody Post post) {
        postRepository.save(post);

        return  "Saved the post";
    }


}
