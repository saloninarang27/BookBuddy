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
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int SeatNo;
    private int RollNo;
    private String Date;
    private String Time;

    public Seat(int seatNo, int rollNo, String date, String time) {
        SeatNo = seatNo;
        RollNo = rollNo;
        Date = date;
        Time = time;
    }
}
