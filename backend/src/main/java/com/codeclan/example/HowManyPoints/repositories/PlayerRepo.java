package com.codeclan.example.HowManyPoints.repositories;

import com.codeclan.example.HowManyPoints.models.Player;
import com.codeclan.example.HowManyPoints.projections.EmbedLeaderboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedLeaderboard.class)
public interface PlayerRepo extends JpaRepository<Player, Long> {
}
