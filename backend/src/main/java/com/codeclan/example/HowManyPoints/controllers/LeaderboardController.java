package com.codeclan.example.HowManyPoints.controllers;

import com.codeclan.example.HowManyPoints.repositories.LeaderboardRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value= "/leagues")
public class LeaderboardController {

    @Autowired
    LeaderboardRepo leaderboardRepo;

}
