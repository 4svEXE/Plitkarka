import React from "react";
import "./AnswersItem.scss";
import plus from "/img/plus.svg";

function AnswersItem({ title, ditails }) {
  return (
    <div
      id="AnswersItem"
      className="flex md:pl-0 pl-6 pb-6  md:flex-row flex-col justify-between  border-custom bx-0 bb-0 pt-6 relative"
    >
      <input type="checkbox" id={title} />

      <div className="Item-list flex flex-col w-[70%]">
        <h3>{title}</h3>

        <div className="ditails-text mt-4">{ditails}</div>
      </div>

      <label
        htmlFor={title}
        className="md:relative absolute top-[20px] right-[20px]"
      >
        <img src={plus} alt="plus" />
      </label>
    </div>
  );
}

export default AnswersItem;
