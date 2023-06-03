import React from "react";
import FirstScreen from "./Home/FirstScreen";
import WhoSuits from "./Home/WhoSuits";
import TrainingProgram from "./Home/TrainingProgram";
import WantToSee from "./Home/WantToSee";
import TrainingFormat from "./Home/TrainingFormat";
import Tarifs from "./Home/Tarifs";
import VideoReviews from "./Home/VideoReviews";
import TGRevives from "./Home/TGReviwes";
import PhotoReviews from "./Home/PhotoReviews";
import Answers from "./Home/Answers ";
import TGMessage from "./Home/TGMessage";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center bg-white">
      <FirstScreen />
      <WhoSuits />
      <TrainingProgram />
      <WantToSee />
      <TrainingFormat />
      <Tarifs />
      <VideoReviews />
      <TGRevives />
      <PhotoReviews />
      <Answers />
      <TGMessage />
    </div>
  );
}
