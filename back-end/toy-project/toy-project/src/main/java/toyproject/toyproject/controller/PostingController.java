package toyproject.toyproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import toyproject.toyproject.domain.PostingDTO;
import toyproject.toyproject.service.PostingService;

import java.nio.file.Path;
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

    @DeleteMapping("/api/list/{board_id}")
    public String deletePosting(@PathVariable Long board_id){
        postingService.deletePosting(board_id);
        System.out.println("post 삭제 성공적");
        return "redirect:/";
    }

}
