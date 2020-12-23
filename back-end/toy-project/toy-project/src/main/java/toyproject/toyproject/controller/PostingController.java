package toyproject.toyproject.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.*;
import toyproject.toyproject.domain.PostingDTO;
import toyproject.toyproject.service.PostingService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@RestController
public class PostingController {

    @Autowired
    private PostingService postingService;

    @GetMapping("/api/list")
    public List<PostingDTO> getPosting() {
        List<PostingDTO> boardList = postingService.getPosting();
        return boardList;
    }

    @GetMapping("/api/detail")
    public PostingDTO getPostingDetail(@RequestParam(value = "board_id", required = false) Long idx) {
        System.out.println(idx);
        PostingDTO detail = postingService.getPostingDetail(idx);
        return detail;
    }

    @PostMapping("/api/write")
    public void insertPosting(PostingDTO params, HttpServletResponse response) throws IOException {
        postingService.insertPosting(params);
        //return "redirect:/";
        response.sendRedirect("/");
    }


    @DeleteMapping("/api/list/{board_id}")
    public String deletePosting(@PathVariable Long board_id){
        postingService.deletePosting(board_id);
        System.out.println("post 삭제 성공적");
        return "redirect:/";
    }


    @GetMapping(value = "/api/write")
    public PostingDTO openBoardWrite(@RequestParam(value = "board_id", required = false) Long idx) {
        if (idx == null) {
            return null;
        } else {
            return postingService.getPostingDetail(idx);
        }
    }
}
