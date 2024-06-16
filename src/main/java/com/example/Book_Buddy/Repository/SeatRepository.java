package com.example.Book_Buddy.Repository;

import com.example.Book_Buddy.Module.Seat;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatRepository extends CrudRepository<Seat,Integer> {
    @Query("SELECT m.id FROM Seat m WHERE m.SeatNo=:seatno")
    public Integer findId(@Param("seatno") Integer seatno);
}
