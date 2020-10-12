import React from "react";
import ArtistCard from "../components/ArtistCard"

function Artists() {
  return (
    <main className="artists-page container">
      <h2 className="artists-title">Artists</h2>
      <p className="artists-txt">Choose one of our artists below to view their photos</p>
      <div className="artists-card-container">
      <ArtistCard />
      </div>
      
    </main>
  );
}

export default Artists;

/**
 * Would be fine to get more data (artists) in order to reuse my "ArtistCard" component.
 * */ 