import React from "react";
import Button from "shared/components/button";

function WantToSee() {
  return (
    <div className="container flex flex-col lg:flex-row p-6 bg-darker my-10">
      <h2 className="w-full lg:w-[70%]">
        Я хочу бачити тих, хто буде новим лідером думки в тому, чим він горить —
        і героєм Пліткарки :)
      </h2>

      <div className="flex my-4 w-full lg:w-[30%]">
        <Button title="Зареєструватися" href="#" className="" />
      </div>
    </div>
  );
}

export default WantToSee;
