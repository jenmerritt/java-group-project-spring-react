package com.codeclan.example.GuessWithFriends.repositories;

import com.codeclan.example.GuessWithFriends.models.Game;
import com.codeclan.example.GuessWithFriends.projections.EmbedCriteria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(excerptProjection = EmbedCriteria.class)
public interface GameRepo extends JpaRepository<Game, Long> {

}
