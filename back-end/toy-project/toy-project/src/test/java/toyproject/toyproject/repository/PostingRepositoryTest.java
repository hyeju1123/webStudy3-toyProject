package toyproject.toyproject.repository;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;
import toyproject.toyproject.domain.Posting;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PostingRepositoryTest {

    @Autowired PostingRepository postingRepository;

    @Test
    public void addPosting() throws Exception {
        Posting posting = new Posting();
        posting.setContent("아무 내용");
        posting.setTitle("첫번째 글입니다.");

        postingRepository.save(posting);
    }

}