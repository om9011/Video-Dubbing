import React from "react";
import OptionCard from "../Components/FeatureCard";
import audio from "../Assets/audio.png";
import dub from "../Assets/dub.png";
import sub from "../Assets/sub.png";
import trans from "../Assets/trans-sub.png";

const Features = () => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md m-4 border w-full max-w-4xl mx-auto">
      <h1 className="text-2xl md:text-4xl font-semibold mb-4 text-center">Features</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <OptionCard title="Video to Audio" src={audio} />
        <OptionCard title="Video Subtitles" src={sub} />
        <OptionCard title="Translated Subtitles" src={trans} />
        <OptionCard title="Dub a Video" src={dub} />
      </div>
    </div>
  );
};

export default Features;
