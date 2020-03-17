package com.codeclan.example.GuessWithFriends.projections;

import com.codeclan.example.GuessWithFriends.models.Game;
import com.codeclan.example.GuessWithFriends.models.Criteria;
import com.codeclan.example.GuessWithFriends.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

import java.util.List;

@Projection(name = "embedPrediction", types = Criteria.class)
public interface EmbedPrediction {
    String getId();
    String getTitle();
    Game getContest();
    String getResult();
    List<Prediction> getPredictions();
}
