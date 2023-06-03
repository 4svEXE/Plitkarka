import React from "react";
import "./TrainingProgramItem.scss";
import plus from "/img/plus.svg";

function TrainingProgramItem({ num, title, description, ditails }) {
  return (
    <div
      id="TrainingProgramItem"
      className="flex md:pl-0 pl-6 pb-6  md:flex-row flex-col justify-between  border-custom bx-0 bb-0 pt-6 relative"
    >
      <span className="p-4 ">{num}</span>

      <input type="checkbox" id={num} />

      <div className="Item-list flex flex-col w-[70%]">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="ditails-text">{ditails}</div>
      </div>

      <label
        htmlFor={num}
        className="md:relative absolute top-[20px] right-[20px]"
      >
        <img src={plus} alt="plus" />
      </label>
    </div>
  );
}

export default TrainingProgramItem;
