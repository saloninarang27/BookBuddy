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
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int username;
    private String password;
    private String name;
    private String email;

    public Student(int Username,String Password,String Name,String Email){
        username = Username;
        password = Password;
        name = Name;
        email = Email;
    }
}