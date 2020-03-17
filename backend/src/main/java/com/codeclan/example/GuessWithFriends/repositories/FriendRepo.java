package com.codeclan.example.GuessWithFriends.repositories;

import com.codeclan.example.GuessWithFriends.models.Friend;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FriendRepo extends JpaRepository<Friend, Long> {
}
