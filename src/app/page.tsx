"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight)
  }, []);

  return (
    <div>
      <div className="home-hero" style={{ width: window.innerWidth, height: window.innerHeight }}>
        <h1>Cyber Orioles</h1>
        <h2>Team 7202</h2>
      </div>
      <div className="home-info">
        <h3>Who We Are</h3>
        <h3>Our Mission</h3>
        <h3>Our Core Values</h3>
      </div>
      <div className="home-recent-events">
        <span className="">Recent Events</span>
        <div className="details">
          <div className="card-fallback"></div>
          <div className="card-fallback"></div>
          <div className="card-fallback"></div>
          <div className="card-fallback"></div>
        </div>
      </div>
    </div>
  );
}
