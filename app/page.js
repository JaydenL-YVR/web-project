"use client";

import React, { useState, useEffect } from 'react';
import fetchDataFromSpotify from './genre';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDataFromSpotify();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Spotify Genre Data App!</h1>
      <p>OverseerBeats - Find millions of songs, artist and genre from Spotify!</p>
      {data ? (
        <pre>{data}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
