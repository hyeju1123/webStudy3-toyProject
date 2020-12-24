package toyproject.toyproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import toyproject.toyproject.domain.MemberDTO;
import toyproject.toyproject.mapper.MemberRepository;

import java.util.List;

@Service
public class MemberService{

    @Autowired
    private MemberRepository memberRepository;

    public List<MemberDTO> getMember(){
        return memberRepository.getMember();

    }

    public void insertMember(MemberDTO memberDTO) {
        memberRepository.insertMember(memberDTO);
    }


}
