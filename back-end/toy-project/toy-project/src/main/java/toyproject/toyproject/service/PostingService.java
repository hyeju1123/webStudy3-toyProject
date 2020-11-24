package toyproject.toyproject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
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

    public void insertPosting(PostingDTO postingDTO) {
        postingRepository.insertPosting(postingDTO);
    }
}