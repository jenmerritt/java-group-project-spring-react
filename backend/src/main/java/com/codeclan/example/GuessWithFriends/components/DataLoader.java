package com.codeclan.example.GuessWithFriends.components;

import com.codeclan.example.GuessWithFriends.models.Game;
import com.codeclan.example.GuessWithFriends.models.Criteria;
import com.codeclan.example.GuessWithFriends.models.Friend;
import com.codeclan.example.GuessWithFriends.models.Prediction;
import com.codeclan.example.GuessWithFriends.repositories.GameRepo;
import com.codeclan.example.GuessWithFriends.repositories.CriteriaRepo;
import com.codeclan.example.GuessWithFriends.repositories.FriendRepo;
import com.codeclan.example.GuessWithFriends.repositories.PredictionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    GameRepo gameRepo;

    @Autowired
    FriendRepo friendRepo;

    @Autowired
    CriteriaRepo criteriaRepo;

    @Autowired
    PredictionRepo predictionRepo;


    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) {

//        Korfball Game:

        Game game1 = new Game("Korfball League");
        gameRepo.save(game1);

        Criteria criteria1 = new Criteria("Winner", game1);
        criteriaRepo.save(criteria1);

        Criteria criteria6 = new Criteria("Goals in Final", game1);
        criteriaRepo.save(criteria6);

        Criteria criteria2 = new Criteria("Top Scorer", game1);
        criteriaRepo.save(criteria2);

        Friend friend1 = new Friend("Bob");
        friendRepo.save(friend1);

        Prediction prediction1 = new Prediction("PKC", friend1, criteria1);

        predictionRepo.save(prediction1);

        Prediction prediction2 = new Prediction("Split", friend1, criteria2);
        predictionRepo.save(prediction2);

        Prediction prediction11 = new Prediction("46", friend1, criteria6);
        predictionRepo.save(prediction11);

        Friend friend2 = new Friend("Jane");
        friendRepo.save(friend2);

        Prediction prediction3 = new Prediction("Top", friend2, criteria1);
        predictionRepo.save(prediction3);

        Prediction prediction4 = new Prediction("Snell", friend2, criteria2);
        predictionRepo.save(prediction4);

        Prediction prediction12 = new Prediction("48", friend2, criteria6);
        predictionRepo.save(prediction12);

//        Football Game

        Game game2 = new Game("Premier League");
        gameRepo.save(game2);

        Criteria criteria3 = new Criteria("League Winner", game2);
        criteriaRepo.save(criteria3);

        Criteria criteria4 = new Criteria("Bottom of Table", game2);
        criteriaRepo.save(criteria4);

        Criteria criteria5 = new Criteria("Top Scorer", game2);
        criteriaRepo.save(criteria5);

        Friend friend3 = new Friend("John");
        friendRepo.save(friend3);

        Prediction prediction5 = new Prediction("Liverpool", friend3, criteria3);
        predictionRepo.save(prediction5);

        Prediction prediction6 = new Prediction("Aston Villa", friend3, criteria4);
        predictionRepo.save(prediction6);

        Prediction prediction7 = new Prediction("Harry Kane", friend3, criteria5);
        predictionRepo.save(prediction7);

        Friend friend4 = new Friend("Emma");
        friendRepo.save(friend4);

        Prediction prediction8 = new Prediction("Liverpool", friend4, criteria3);
        predictionRepo.save(prediction8);

        Prediction prediction9 = new Prediction("Southampton", friend4, criteria4);
        predictionRepo.save(prediction9);

        Prediction prediction10 = new Prediction("Jamie Vardy", friend4, criteria5);
        predictionRepo.save(prediction10);

     }
}
