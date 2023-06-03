import React from "react";
import Button from "shared/components/button";

function TGMessage() {
  const buttonInside = (
    <div className="w-full flex justify-between items-center">
      <div className="uppercase">написати</div>
      <div className="">➜</div>
    </div>
  );
  return (
    <div
      id="message"
      className="container flex flex-col lg:flex-row justify-between items-center bg-darker p-6 my-6"
    >
      <h2>
        Якщо залишилися питання, напиши мені в телеграм — я з радістю допоможу!
      </h2>
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

export default TGMessage;
