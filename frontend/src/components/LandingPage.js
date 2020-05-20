import React from 'react';
import '../App.css';

function LandingPage() {
  return (
    <section id="landing-page-wrap">
      <article id="header-section">
        <h1 id="site-header">How Many Points?</h1>
      </article>
      <article className="article-wrap">
        <p>The app that keeps track of your games. Family pub quizzes? Gaming tournaments between friends? Distance run?</p>
        <p>Record points for anything, and for any number of friends. Never lose track of who is winning (and losing!) again.</p>
        <a href="/new-leaderboard"><button className="large-button">Create a Leaderboard</button></a>
        <br/>
        <a href="/leaderboards"><button className="large-button">View All Leaderboards</button></a>
      </article>
      <p id="copyright">Copyright 2020 JMM</p>
    </section>
  );
}

export default LandingPage;