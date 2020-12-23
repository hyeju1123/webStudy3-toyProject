package toyproject.toyproject.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import toyproject.toyproject.domain.PostingDTO;

import java.util.List;

@Mapper
@Repository
public interface PostingRepository {
    //List<Map<String, Object>> getPosting();
    List<PostingDTO> getPosting();

    void insertPosting(PostingDTO params);

    void deletePosting(Long board_id);
}
