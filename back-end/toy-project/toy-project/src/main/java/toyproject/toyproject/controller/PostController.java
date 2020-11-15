package toyproject.toyproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import toyproject.toyproject.domain.Posting;
import toyproject.toyproject.service.PostingService;

@RestController
public class PostController {

    private final PostingService postingService;

    @Autowired
    public PostController(PostingService postingService) {
        this.postingService = postingService;
    }


    @GetMapping("/api/write")
    public String write() {
        return "안녕하세요";
    }

    @PostMapping("/api/write")
    public String create(PostForm postForm) {

        Posting posting = new Posting();
        posting.setTitle(postForm.getTitle());
        posting.setUrl(postForm.getLink());
        posting.setContent(postForm.getContent());

        postingService.addPosting(posting);

        return "redirect:/";
    }
}
