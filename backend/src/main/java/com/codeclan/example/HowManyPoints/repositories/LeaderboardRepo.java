package com.codeclan.example.HowManyPoints.repositories;

import com.codeclan.example.HowManyPoints.models.Leaderboard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

public interface LeaderboardRepo extends JpaRepository<Leaderboard, Long> {

}
