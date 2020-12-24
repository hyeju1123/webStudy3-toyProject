package toyproject.toyproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;
import toyproject.toyproject.domain.MemberDTO;
import toyproject.toyproject.domain.PostingDTO;
import toyproject.toyproject.service.MemberService;


import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RestController
public class MemberController {

    @Autowired
    private MemberService memberService;

    @GetMapping("/user/list")
    public List<MemberDTO> getMember(Model model){
        List<MemberDTO> memberList = memberService.getMember();
        return memberList;
    }
    /*@PostMapping("/user/signup")
    public String insertMember(MemberForm memberForm) {

        MemberDTO memberDTO = new MemberDTO();
        memberDTO.setUserName(memberForm.getUserName());
        memberDTO.setUserID(memberForm.getUserID());
        memberDTO.setUserPW(memberForm.getUserPW());
        //System.out.println(memberForm.getUserName());
        memberService.insertMember(memberDTO);
        return "/signup_result";
    }*/

    @PostMapping("/user/signup")
    public void insertMember(MemberDTO params, HttpServletResponse response) throws IOException {
        memberService.insertMember(params);
        //return "redirect:/";
        response.sendRedirect("/signup_result");
    }

    



}