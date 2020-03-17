package com.codeclan.example.GuessWithFriends.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="criterias")
public class Criteria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="title")
    private String title;

    @Column(name="result")
    private String result;

    @OneToMany(mappedBy = "criteria",cascade = CascadeType.REMOVE)
    private List<Prediction> predictions;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="game_id", nullable = false)
    private Game game;

    public Criteria(String title, Game game) {
        this.id = id;
        this.title = title;
        this.game = game;
        this.result = "";
        this.predictions = new ArrayList<Prediction>();

    }

    public Criteria(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public Game getGame() {
        return game;
    }

    public void setGame(Game game) {
        this.game = game;
    }

    public List<Prediction> getPredictions() {
        return predictions;
    }

    public void setPredictions(List<Prediction> predictions) {
        this.predictions = predictions;
    }
}
