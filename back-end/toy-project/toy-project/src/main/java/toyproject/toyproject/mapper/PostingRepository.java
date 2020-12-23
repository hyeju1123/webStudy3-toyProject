package toyproject.toyproject.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import toyproject.toyproject.domain.PostingDTO;

import java.util.List;

@Mapper
@Repository
public interface PostingRepository {
    void insertPosting(PostingDTO params);

    List<PostingDTO> getPosting();

    PostingDTO selectPostingDetail(Long board_id);

    void updatePosting(PostingDTO params);

    void deletePosting(Long board_id);
}
