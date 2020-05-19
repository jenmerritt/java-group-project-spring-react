package com.codeclan.example.HowManyPoints.projections;

import com.codeclan.example.HowManyPoints.models.Leaderboard;
import com.codeclan.example.HowManyPoints.models.Player;
import org.springframework.data.rest.core.config.Projection;

import java.util.ArrayList;

@Projection(name = "embedLeaderboard", types = Player.class)
public interface EmbedLeaderboard {

        String getId();
        String getName();
        int getPoints();

}


