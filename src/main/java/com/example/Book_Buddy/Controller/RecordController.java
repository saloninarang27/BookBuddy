package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Records;
import com.example.Book_Buddy.Repository.RecordRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/us")
public class RecordController {
    @Autowired
    private RecordRepository recordRepository;

    @PostMapping("/add")
    public ResponseEntity<String> recor(
        @RequestParam("bookno") String Bookno,
        @RequestParam("bookname") String Bookname,
        @RequestParam("username") Integer Username,
        @RequestParam("issuedon") String Issuedon,
        @RequestParam("returndate") String Returndate,
        @RequestParam("returnedon") String Returnedon
    ){
        Records records = new Records(Bookno,Bookname,Username,Issuedon,Returndate,Returnedon);
        recordRepository.save(records);
        return ResponseEntity.ok("Added successful");
    }

    @GetMapping("/find")
    public List<Records> all(){
        return (List<Records>) recordRepository.findAll();
    }
    @GetMapping("/gett/{username}")
    public List<Records> alll(@PathVariable("username")Integer Username){
        return recordRepository.findd(Username);

    }
}
