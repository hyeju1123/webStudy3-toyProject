package toyproject.toyproject;

import org.springframework.web.bind.annotation.*;

@RestController
public class WriteController {

    @PostMapping("/api/write")
    public void addSurvey(@RequestBody WriteForm writeForm) {
        System.out.println("addSurvey");
        System.out.println(writeForm.getTitle());
        System.out.println(writeForm.getLink());
    }
}
