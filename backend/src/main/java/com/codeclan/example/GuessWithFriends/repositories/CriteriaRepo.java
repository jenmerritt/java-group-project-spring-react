package com.codeclan.example.GuessWithFriends.repositories;

import com.codeclan.example.GuessWithFriends.models.Criteria;
import com.codeclan.example.GuessWithFriends.projections.EmbedPrediction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedPrediction.class)
public interface CriteriaRepo extends JpaRepository<Criteria, Long> {
}
