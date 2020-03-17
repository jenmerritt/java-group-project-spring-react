package com.codeclan.example.GuessWithFriends.projections;

import com.codeclan.example.GuessWithFriends.models.Criteria;
import com.codeclan.example.GuessWithFriends.models.Friend;
import com.codeclan.example.GuessWithFriends.models.Prediction;
import org.springframework.data.rest.core.config.Projection;

@Projection(name = "embedFriend", types = Prediction.class)
public interface EmbedFriend {
    Long getId();
    String getPredictionTitle();
    Friend getFriend();
    Criteria getCriteria();
}
