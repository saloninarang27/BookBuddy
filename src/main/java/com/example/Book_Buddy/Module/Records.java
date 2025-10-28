package com.example.Book_Buddy.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Records {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String bookno;
    private String bookname;
    private Integer username;
    private String issuedon;
    private String returndate;
    private String returnedon;

    public Records(String bookno, String bookname, Integer username, String issuedon, String returndate, String returnedon) {
        this.bookno = bookno;
        this.bookname = bookname;
        this.username = username;
        this.issuedon = issuedon;
        this.returndate = returndate;
        this.returnedon = returnedon;
    }

    public Records(String bookno, String bookname, Integer username) {
        this.bookno = bookno;
        this.bookname = bookname;
        this.username = username;
    }
}
