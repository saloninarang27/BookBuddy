package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Records;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecordRepository extends CrudRepository<Records,Integer> {
    @Query("SELECT m FROM Records m WHERE m.username=:username")
    public List<Records> findd(@Param("username")Integer Username);
}
