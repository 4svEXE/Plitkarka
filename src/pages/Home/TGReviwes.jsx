import React from "react";
import Button from "shared/components/button";

function TGReviwes() {
  const buttonInside = (
    <div className="w-full flex justify-between items-center">
      <div className="">TELEGRAM</div>
      <div className="">➜</div>
    </div>
  );
  return (
    <div className="container flex flex-col lg:flex-row justify-between items-center bg-darker p-6 my-6">
      <h2>Телеграм канал з відгуками про моє начання</h2>
      <div className="flex w-full lg:w-[30%] py-4">
        <Button
          title={buttonInside}
          className="empty"
          href="https://web.telegram.org/a/"
        />
      </div>
    </div>
  );
}

export default TGReviwes;
