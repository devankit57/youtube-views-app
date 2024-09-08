import React, { useState } from "react";
import "./App.css";

function App() {
  const [videoUrl, setVideoUrl] = useState("");
  const [numTabs, setNumTabs] = useState(1);
  const [videos, setVideos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoUrl && numTabs > 0) {
      const newVideos = Array(numTabs).fill(videoUrl);
      setVideos([...videos, ...newVideos]);
      setVideoUrl("");
      setNumTabs(1);
    }
  };

  return (
    <div className="App">
      {/* Insert full width image */}
      <img src="./yt_views.png" alt="Banner" className="banner-image" />

      {/* Title */}
      <h1>GENERATOR</h1>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter YouTube video link"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          required
          className="input-field youtube-link"
        />
        <input
          type="number"
          min="1"
          value={numTabs}
          onChange={(e) => setNumTabs(parseInt(e.target.value))}
          placeholder="Number of tabs"
          required
          className="input-field num-tabs"
        />
        <button type="submit">Add Video</button>
      </form>

      {/* Video grid */}
      <div className="video-grid">
        {videos.map((url, index) => (
          <iframe
            key={index}
            width="320"
            height="240"
            src={url.replace("watch?v=", "embed/")}
            title={`video-${index}`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default App;
