package toyproject.toyproject.repository;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import toyproject.toyproject.domain.Posting;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

@Repository
@Transactional
public class PostingRepository {

    private final EntityManager em;

    public PostingRepository(EntityManager em) {
        this.em = em;
    }

    public void save(Posting posting) {
        em.persist(posting);
    }
}
