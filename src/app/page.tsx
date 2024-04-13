"use client";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    console.log(window.innerWidth, window.innerHeight)
  }, []);

  return (
    <div>
      <div className="home-hero-container" style={{ width: window.innerWidth, height: window.innerHeight }}>
        <div className="home-hero" />
        <div className="center">
          <h1>Cyber Orioles</h1>
          <h2>Team 7202</h2>
        </div>
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
