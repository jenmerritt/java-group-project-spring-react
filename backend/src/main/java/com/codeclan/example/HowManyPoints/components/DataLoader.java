package com.codeclan.example.HowManyPoints.components;

import com.codeclan.example.HowManyPoints.models.Leaderboard;
import com.codeclan.example.HowManyPoints.models.Player;
import com.codeclan.example.HowManyPoints.repositories.LeaderboardRepo;
import com.codeclan.example.HowManyPoints.repositories.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    LeaderboardRepo leaderboardRepo;

    @Autowired
    PlayerRepo playerRepo;

    public DataLoader(){}

    @Override
    public void run(ApplicationArguments args) {

        Leaderboard leaderboard1 = new Leaderboard("Family Pub Quiz");
        leaderboardRepo.save(leaderboard1);

        Player player1 = new Player("Fred", leaderboard1);
        playerRepo.save(player1);

        Player player2 = new Player("Barney", leaderboard1);
        playerRepo.save(player2);

        Player player3 = new Player("Wilma", leaderboard1);
        playerRepo.save(player3);

        Player player4 = new Player("Betty", leaderboard1);
        playerRepo.save(player4);

        Leaderboard leaderboard2 = new Leaderboard("NBA 2k");
        leaderboardRepo.save(leaderboard2);

        Player player5 = new Player("Michael", leaderboard2);
        playerRepo.save(player5);

        Player player6 = new Player("Steph", leaderboard2);
        playerRepo.save(player6);

        Player player7 = new Player("LeBron", leaderboard2);
        playerRepo.save(player7);

        Player player8 = new Player("Elena", leaderboard2);
        playerRepo.save(player8);

    }
}
