import React, { useState, useEffect } from "react";

function SoundPlayer({ url }) {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(url));
  }, [url]);

  useEffect(() => {
    audio && audio.play();
  }, [audio]);

  return null;



  return (
    <div url="https://mixkit.co/free-sound-effects/game/" ></div>
  );

  }

export default SoundPlayer;