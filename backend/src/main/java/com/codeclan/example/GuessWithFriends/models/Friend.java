package com.codeclan.example.GuessWithFriends.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="friends")
public class Friend {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name")
    private String name;

    @JsonIgnore
    @OneToMany(mappedBy="friend", cascade = CascadeType.REMOVE)
    private List<Prediction> predictions;

    public Friend(String name) {
        this.id = id;
        this.name = name;
        this.predictions = new ArrayList<Prediction>();
    }

    public Friend(){
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

    public List<Prediction> getPredictions() {
        return predictions;
    }

    public void setPredictions(ArrayList<Prediction> predictions) {
        this.predictions = predictions;
    }

    public void addPrediction(Prediction prediction) {
        this.predictions.add(prediction);
    }
}

