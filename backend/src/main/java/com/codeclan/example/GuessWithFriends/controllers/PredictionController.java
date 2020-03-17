package com.codeclan.example.GuessWithFriends.controllers;

import com.codeclan.example.GuessWithFriends.repositories.PredictionRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/predictions")
public class PredictionController {
    @Autowired
    PredictionRepo predictionRepo;

}
