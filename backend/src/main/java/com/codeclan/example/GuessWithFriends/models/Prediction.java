package com.codeclan.example.GuessWithFriends.models;

import javax.persistence.*;

@Entity
@Table(name="predictions")
public class Prediction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="prediction")
    private String predictionTitle;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="friend_id", nullable = false)
    private Friend friend;

    @ManyToOne(cascade = CascadeType.REMOVE)
    @JoinColumn(name="criteria_id", nullable=false)
    private Criteria criteria;


    public Prediction(String predictionTitle, Friend friend, Criteria criteria) {
        this.id = id;
        this.predictionTitle = predictionTitle;
        this.friend = friend;
        this.criteria = criteria;

    }

    public Prediction(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Friend getFriend() {
        return friend;
    }

    public void setFriend(Friend friend) {
        this.friend = friend;
    }

    public Criteria getCriteria() {
        return criteria;
    }

    public void setCriteria(Criteria criteria) {
        this.criteria = criteria;
    }

    public String getPredictionTitle() {
        return predictionTitle;
    }

    public void setPredictionTitle(String predictionTitle) {
        this.predictionTitle = predictionTitle;
    }
}

