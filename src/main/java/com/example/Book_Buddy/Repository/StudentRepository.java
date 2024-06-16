package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Student;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends CrudRepository<Student,Integer>{
    @Query("SELECT m.id FROM Student m WHERE m.username = :username AND m.password=:password")
    public Integer getId(@Param("username")int username,@Param("password")String password);
}
