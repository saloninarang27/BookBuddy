package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Books;
import com.example.Book_Buddy.Module.Student;
import com.example.Book_Buddy.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/Student")
public class StudentController {
    @Autowired
    private StudentRepository studentRepository;

    @GetMapping("GetProfile/{username}/{password}")
    public int GetProfile(@PathVariable("username")int username,@PathVariable("password")String password){
        return studentRepository.getId(username,password);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addst(
            @RequestParam("username") Integer Username,
            @RequestParam("password") String Password,
            @RequestParam("name") String Name,
            @RequestParam("email") String Email
    ){
        Student student = new Student(Username,Password,Name,Email);
        studentRepository.save(student);
        return ResponseEntity.ok("Added successful");
    }

    @GetMapping("/all")
    public List<Student> allstudents(){
        return (List<Student>) studentRepository.findAll();
    }

    @GetMapping("/getStudent/{Id}")
    public Optional<Student> getprofiles(@PathVariable("Id") Integer Id)
    {
        return studentRepository.findById(Id);
    }

}
