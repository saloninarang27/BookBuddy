package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Seat;
import com.example.Book_Buddy.Repository.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;
@RequestMapping("/seat")
@RestController
@CrossOrigin
public class SeatController {
    @Autowired
    private SeatRepository seatRepository;

    @GetMapping("/get")
    public List<Seat> find()
    {
        return (List<Seat>) seatRepository.findAll();
    }

    @PostMapping("/added")
    public ResponseEntity<String> addedApplied(
            @RequestParam("seatNo") Integer seatNo,
            @RequestParam("rollNumber") Integer roll,
            @RequestParam("entryDate") String entryDate,
            @RequestParam("entryTime") String entryTime) throws IOException {
        Seat applied = new Seat(seatNo,roll,entryDate,entryTime) ;
        seatRepository.save(applied);
        return ResponseEntity.ok("Added successful");

    }

    @GetMapping("/delete/{seatno}")
    public  String delete(@PathVariable("seatno") Integer seatno)
    {
        int Id=seatRepository.findId(seatno);
        seatRepository.deleteById(Id);
        return "deleted";
    }
}
