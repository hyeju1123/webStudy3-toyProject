package toyproject.toyproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toyproject.toyproject.domain.PostingDTO;
import toyproject.toyproject.mapper.PostingRepository;

import java.util.List;
import java.util.Map;

@Service
public class PostingService {

    @Autowired
    private PostingRepository postingRepository;

//    public List<Map<String, Object>> getPosting() {
//        return postingRepository.getPosting();
//    }

    public List<PostingDTO> getPosting() {
        return postingRepository.getPosting();
    }

    public PostingDTO getPostingDetail(Long board_id) {
        return postingRepository.selectPostingDetail(board_id);
    }

    public void insertPosting(PostingDTO postingDTO) {

        if (postingDTO.getBoardId() == null) {
            postingRepository.insertPosting(postingDTO);
        } else {
            postingRepository.updatePosting(postingDTO);
        }
    }

    @Transactional
     public void deletePosting(Long board_id){
        postingRepository.deletePosting(board_id);
    }
}
