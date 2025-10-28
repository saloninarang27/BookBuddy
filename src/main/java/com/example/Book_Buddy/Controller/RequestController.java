package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Request;
import com.example.Book_Buddy.Repository.RequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/request")
@CrossOrigin
public class RequestController {
    @Autowired
    RequestRepository requestRepository;

    @ResponseStatus(value = HttpStatus.OK)
    @PostMapping(value = "/adds")
    public ResponseEntity<String> AddRequest(
            @RequestParam("feedback") String feedback,
            @RequestParam("username") int username,
            @RequestParam("name") String name

    )  throws IOException {
        Request request = new Request(feedback,username,name);
        requestRepository.save(request);
        return ResponseEntity.ok("Upload successful");
    }

    @GetMapping("/alll")
    public List<Request> requests(){
        return (List<Request>) requestRepository.findAll();
    }

    @GetMapping("/delete/{id}")
    public  String deletu(@PathVariable("id") Integer id)
    {
        requestRepository.deleteById(id);
        return "Deleted";
    }
}
