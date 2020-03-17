package com.codeclan.example.GuessWithFriends.projections;

import com.codeclan.example.GuessWithFriends.models.Game;
import com.codeclan.example.GuessWithFriends.models.Criteria;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedGuessable", types = Game.class)
public interface EmbedCriteria {
    String getId();
    String getTitle();
    List<Criteria> getGuessables();
}
