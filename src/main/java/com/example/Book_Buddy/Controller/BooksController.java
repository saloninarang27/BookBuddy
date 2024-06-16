package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Books;
import com.example.Book_Buddy.Repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/Books")
public class BooksController {
    @Autowired
    private BooksRepository booksRepository;

    @PostMapping("/book")
    public ResponseEntity<String> bookk(
            @RequestParam("bookno") String BookNo,
            @RequestParam("bookname") String BookName,
            @RequestParam("author") String Author,
            @RequestParam("category") String Category
    ){
        Books books = new Books(BookNo,BookName,Author,Category);
        booksRepository.save(books);
        return ResponseEntity.ok("Added successful");
    }

    @GetMapping("/total")
    public List<Books> allbooks(){
        return (List<Books>) booksRepository.findAll();
    }

    @GetMapping("/delete/{id}")
    public  String deletu(@PathVariable("id") Integer id)
    {
        booksRepository.deleteById(id);
        return "Deleted";
    }

    @GetMapping("/deletee/{bookno}")
    public String del(@PathVariable("bookno") String bookno){
        int id=booksRepository.find(bookno);
        booksRepository.deleteById(id);
        return "Removed";
    }





}
