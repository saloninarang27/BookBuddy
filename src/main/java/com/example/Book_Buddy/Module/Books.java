package com.example.Book_Buddy.Module;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@ToString
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String bookno;
    private String bookname;
    private String author;
    private String category;

    public Books(String bookno, String bookname, String author, String category) {
        this.bookno = bookno;
        this.bookname = bookname;
        this.author = author;
        this.category = category;
    }
}
