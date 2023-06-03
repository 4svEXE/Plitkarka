import React from "react";
import "./TrainingProgram.scss";

import img from "/img/training.png";
import Logo from "/Logo.png";
import TrainingProgramItems from "./components/TrainingProgramItems";

function TrainingProgram() {
  return (
    <div
      className="container flex lg:flex-row flex-col mt-20"
      id="TrainingProgram"
    >
      <div className="flex  p-6 border-custom lg:border-r border-r-0 border-y-0 border-l-0">
        <div
          className="flex w-full lg:w-[500px] lg:h-[600px] h-[300px] custom-image"
          style={{
            backgroundImage: `url(${img})`,
          }}
        >
          <img
            src={Logo}
            alt="plitkarka logo"
            className="custom-style lg:block hidden"
          />
        </div>
      </div>

      <TrainingProgramItems />
    </div>
  );
}

export default TrainingProgram;
