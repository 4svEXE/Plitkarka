import React from "react";
import arrow from "/img/arrow.svg";
import Button from "shared/components/button";

function TarifsItem({ title, gets, access, prices, onBuy, onReserve }) {
  return (
    <div className="flex flex-col  mt-4">
      <div className="flex flex-col border-custom p-6 ">
        <h3 className="mb-6">{title}</h3>

        <div className="flex flex-col min-h-auto lg:min-h-[290px]">
          {gets.map((item, index) => (
            <div className="flex" key={item + index}>
              <img src={arrow} alt="arrow svg" />
              <p className="ml-3">{item}</p>
            </div>
          ))}
        </div>

        <h5 className="mt-4">Доступ</h5>
        <div className="flex flex-col min-h-auto lg:min-h-[270px]">
          {access.map((item, index) => (
            <div className="flex" key={item + index}>
              <img src={arrow} alt="arrow svg" />
              <p className="ml-3">{item}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full border-custom p-6 border-t-0">
        <div className="grid grid-cols-3 mb-10">
          {prices.map((item, i) => (
            <div
              className={`flex flex-col opacity-${i == 0 ? "100" : "40"}`}
              key={item + i}
            >
              <h5>{item[2]}</h5>
              <strong className="text-xl lg:text-4xl ">${item[0]}</strong>
              <span>{item[1]} грн</span>
            </div>
          ))}
        </div>
        <Button title="Придбати" className="mb-4" onClick={onBuy} />
        <Button
          title="Забронювати $50 | 1875 грн"
          className="empty"
          onClick={onReserve}
        />
      </div>
    </div>
  );
}

export default TarifsItem;
