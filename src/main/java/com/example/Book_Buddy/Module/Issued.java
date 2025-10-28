package com.example.Book_Buddy.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@ToString
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Issued {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String bookno;
    private String bookname;
    private String author;
    private String category;
    private Integer username;
    private String issueon;
    private String returnon;

    public Issued(String bookno, String bookname, String author, String category, Integer username, String issueon, String returnon) {
        this.bookno = bookno;
        this.bookname = bookname;
        this.author = author;
        this.category = category;
        this.username = username;
        this.issueon = issueon;
        this.returnon = returnon;
    }
}
