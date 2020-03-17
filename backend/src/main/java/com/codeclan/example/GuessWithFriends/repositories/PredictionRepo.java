package com.codeclan.example.GuessWithFriends.repositories;

import com.codeclan.example.GuessWithFriends.models.Prediction;
import com.codeclan.example.GuessWithFriends.projections.EmbedFriend;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedFriend.class)
public interface PredictionRepo extends JpaRepository<Prediction, Long> {
}
