package toyproject.toyproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import toyproject.toyproject.domain.PostingDTO;
import toyproject.toyproject.service.PostingService;

import java.util.List;
import java.util.Map;

@RestController
public class PostingController {

    @Autowired
    private PostingService postingService;

//    @GetMapping("/api/posting")
//    public List<Map<String, Object>> getPosting() {
//        return postingService.getPosting();
//    }

    @GetMapping("/api/list")
    public List<PostingDTO> getPosting(Model model) {
        List<PostingDTO> boardList = postingService.getPosting();
        return boardList;
    }

    @PostMapping("/api/write")
    public String insertPosting(PostForm postForm) {

        PostingDTO postingDTO = new PostingDTO();
        postingDTO.setTitle(postForm.getTitle());
        postingDTO.setUrl(postForm.getUrl());
        postingDTO.setContent(postForm.getContent());
        postingDTO.setStart_date(postForm.getStart_date());
        postingDTO.setEnd_date(postForm.getEnd_date());

        postingService.insertPosting(postingDTO);

        return "redirect:/";
    }

}
