package toyproject.toyproject.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import toyproject.toyproject.domain.MemberDTO;

import java.util.List;
import java.util.Optional;

@Mapper
@Repository
public interface MemberRepository {
    MemberDTO save(MemberDTO member);
    Optional<MemberDTO> findByuserID(String userID);
    Optional<MemberDTO> findByuserName(String userName);
    List<MemberDTO> getMember();

    void insertMember(MemberDTO params);

}
