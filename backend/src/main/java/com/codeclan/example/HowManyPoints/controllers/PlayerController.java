package com.codeclan.example.HowManyPoints.controllers;

import com.codeclan.example.HowManyPoints.repositories.PlayerRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/players")
public class PlayerController {
    @Autowired
    PlayerRepo playerRepo;

}
