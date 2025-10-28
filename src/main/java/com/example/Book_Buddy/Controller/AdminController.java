package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Admin;
import com.example.Book_Buddy.Module.Student;
import com.example.Book_Buddy.Repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/Admin")
public class AdminController {
    @Autowired
    private AdminRepository adminRepository;
    @GetMapping("GetProfile/{username}/{password}")
    public int GetProfile(@PathVariable("username")int username, @PathVariable("password")String password){
        return adminRepository.getId(username,password);
    }
    @GetMapping("/getAdmin/{Id}")
    public Optional<Admin> getprofiles(@PathVariable("Id") Integer Id)
    {
        return adminRepository.findById(Id);
    }
}
