package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Request;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RequestRepository extends CrudRepository<Request,Integer> {
}
