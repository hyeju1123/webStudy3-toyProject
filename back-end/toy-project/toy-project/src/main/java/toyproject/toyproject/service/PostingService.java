package toyproject.toyproject.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import toyproject.toyproject.domain.Posting;
import toyproject.toyproject.repository.PostingRepository;

@Service
@Transactional
public class PostingService {

    private final PostingRepository postingRepository;

    public PostingService(PostingRepository postingRepository) {
        this.postingRepository = postingRepository;
    }

    public void addPosting(Posting posting) {
        postingRepository.save(posting);
    }
}
