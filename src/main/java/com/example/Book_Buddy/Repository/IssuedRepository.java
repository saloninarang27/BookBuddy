package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Issued;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssuedRepository extends CrudRepository<Issued,Integer> {
}
