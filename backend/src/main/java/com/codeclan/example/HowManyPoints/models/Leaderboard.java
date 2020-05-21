package com.codeclan.example.HowManyPoints.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "leaderboards")
public class Leaderboard {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    private String adminUrl;

    @Column(name="title")
    private String title;

    @JsonIgnore
    @OneToMany(mappedBy = "leaderboard", cascade = CascadeType.REMOVE)
    private List<Player> players;

    public Leaderboard(String title) {
        this.id = id;
        this.adminUrl = Long.toString(new Date().getTime()) + "a";
        this.title = title;
        this.players = new ArrayList<Player>();
    }

    public Leaderboard() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getAdminUrl() {
        return adminUrl;
    }

    public void setAdminUrl(String adminUrl) {
        this.adminUrl = adminUrl;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public List<Player> getPlayers() {
        return players;
    }

    public void setPlayers(List<Player> players) {
        this.players = players;
    }
}
