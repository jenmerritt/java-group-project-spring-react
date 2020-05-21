package com.codeclan.example.HowManyPoints.models;

import javax.persistence.*;

@Entity
@Table(name="players")
public class Player {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="points")
    private int points;

    @ManyToOne
    @JoinColumn(name="leaderboard_id", nullable=false)
    private Leaderboard leaderboard;

    public Player(String name, Leaderboard leaderboard) {
        this.id = id;
        this.name = name;
        this.points = 0;
        this.leaderboard = leaderboard;
    }

    public Player(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getPoints() {
        return points;
    }

    public void setPoints(int points) {
        this.points = points;
    }

    public Leaderboard getLeaderboard() {
        return leaderboard;
    }

    public void setLeaderboard(Leaderboard leaderboard) {
        this.leaderboard = leaderboard;
    }
}

