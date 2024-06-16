package com.example.Book_Buddy.Controller;

import com.example.Book_Buddy.Module.Books;
import com.example.Book_Buddy.Module.Issued;
import com.example.Book_Buddy.Module.Student;
import com.example.Book_Buddy.Repository.BooksRepository;
import com.example.Book_Buddy.Repository.IssuedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/Issuee")
public class IssuedController {
    @Autowired
    private IssuedRepository issuedRepository;

    @Autowired
    private BooksRepository booksRepository;

    @PostMapping("/add")
    public ResponseEntity<String> issueb(
            @RequestParam("bookno") String BookNo,
            @RequestParam("bookname") String BookName,
            @RequestParam("author") String Author,
            @RequestParam("category") String Category,
            @RequestParam("username") Integer Username,
            @RequestParam("issueon") String IssuedOn,
            @RequestParam("returnon") String ReturnOn
    ){
        Issued issued = new Issued(BookNo,BookName,Author,Category,Username,IssuedOn,ReturnOn);
        issuedRepository.save(issued);
        return ResponseEntity.ok("Added successful");
    }
    @GetMapping("/total")
    public List<Issued> allissue(){

        return (List<Issued>) issuedRepository.findAll();
    }

    @GetMapping("/getbook/{Id}")
    public Optional<Issued> getprofiles(@PathVariable("Id") Integer Id)
    {

        return issuedRepository.findById(Id);
    }



    @GetMapping("/get/{username}")
    public List<Issued> pending(@PathVariable("username") Integer username){
        List<Issued> issues= (List<Issued>) issuedRepository.findAll();
        List<Issued> ss=new ArrayList<>();
        for(int i=0;i<issues.size();i++)
        {
            if(issues.get(i).getUsername().equals(username)){
                String date2=(issues.get(i)).getReturnon();
                LocalDate date=LocalDate.parse(date2);
                LocalDate now = LocalDate.now();
                if(( date.isBefore(now) || date.isEqual(now))){
                    Issued issued = new Issued(issues.get(i).getBookno(),issues.get(i).getBookname(),issues.get(i).getAuthor(),issues.get(i).getCategory(),issues.get(i).getUsername(),issues.get(i).getIssueon(),issues.get(i).getReturnon());
                    ss.add(issued);
                }
            }

        }
        return ss;
    }

    @GetMapping("/left")
    public List<Issued> remain(){
        List<Issued> issues= (List<Issued>) issuedRepository.findAll();
        List<Issued> ss=new ArrayList<>();
        for(int i=0;i<issues.size();i++)
        {
                String date2=(issues.get(i)).getReturnon();
                LocalDate date=LocalDate.parse(date2);
                LocalDate now = LocalDate.now();
                if(( date.isBefore(now) || date.isEqual(now))) {
                    Issued issued = new Issued(issues.get(i).getBookno(), issues.get(i).getBookname(), issues.get(i).getAuthor(), issues.get(i).getCategory(), issues.get(i).getUsername(), issues.get(i).getIssueon(), issues.get(i).getReturnon());
                    ss.add(issued);
                }

        }
        return ss;
    }


    @GetMapping("/find/{username}")
    public List<Issued> issueee(@PathVariable("username") Integer username){
        List<Issued> issues= (List<Issued>) issuedRepository.findAll();
        List<Issued> ss=new ArrayList<>();
        for(int i=0;i<issues.size();i++)
        {
            if(issues.get(i).getUsername().equals(username)){
                String date2=(issues.get(i)).getReturnon();
                LocalDate date=LocalDate.parse(date2);
                LocalDate now = LocalDate.now();
                if(( date.isAfter(now) || date.isEqual(now))){
                    Issued issued = new Issued(issues.get(i).getBookno(),issues.get(i).getBookname(),issues.get(i).getAuthor(),issues.get(i).getCategory(),issues.get(i).getUsername(),issues.get(i).getIssueon(),issues.get(i).getReturnon());
                    ss.add(issued);
                }
            }

        }
        return ss;
    }

    @GetMapping("/delete/{id}")
    public  String deletu(@PathVariable("id") Integer id)
    {
        issuedRepository.deleteById(id);
        return "Deleted";
    }
}
