package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Books;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BooksRepository extends CrudRepository<Books,Integer> {
    @Query("SELECT m.id FROM Books m WHERE m.bookno = :bookno")
    public Integer find(@Param("bookno")String bookno);
}
