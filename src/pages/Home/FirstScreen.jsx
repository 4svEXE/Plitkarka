import React from "react";

import "./FirstScreen.scss";
import img from "/img/firstScreen.png";
import Logo from "/Logo.png";
import arrow from "/img/arrow.svg";
import Button from "shared/components/button";

export default function FirstScreen() {
  return (
    <div
      id="FirstScreen"
      className="FirstScreen overflow-hidden container flex flex-wrap lg:flex-nowrap"
    >
      <div className="flex flex-col w-full lg:w-[448px] items-center justify-center custom-border box-for-screen">
        <h1 className="py-10 text-3xl text-center md:text-left md:text-5xl custom-border border-only-bottom w-full ">
          Навчання із самопродюсування та запусків проєктів
        </h1>
        <div className="grid grid-cols-2 w-full">
          <div className="flex flex-col p-6 custom-border border-b-r ">
            <span>Дата старту</span>
            <strong>20.04.2023</strong>
          </div>

          <div className="flex flex-col p-6 custom-border border-only-bottom">
            <span>Тривалість</span>
            <strong>4 - 5 тижнів</strong>
          </div>
        </div>

        <div className="flex flex-col custom-border border-only-bottom p-6 w-full">
          <p className="flex">
            <img src={arrow} alt="svg arrow" /> Практичні завдання
          </p>
          <p className="flex">
            <img src={arrow} alt="svg arrow" /> Уроки в записі
          </p>
          <p className="flex">
            <img src={arrow} alt="svg arrow" />
            Прямі етери та онлайн-розбори як в Пліткарці
          </p>
        </div>

        <div className="flex w-full justify-center">
          <Button title="Зареєструватися" url="#" className="m-6" />
        </div>
      </div>

      <div className="flex w-full relative first-screen-banner p-6">
        <div className="banner w-full h-full flex justify-end overflow-hidden">
          <img src={img} alt="Plitcarka" className="h-full w-auto max-w-none" />
        </div>

        <img
          src={Logo}
          alt="Plitcarka logo"
          className="w-[50%] lg:w-[20%] xl:w-[50%] banner-logo"
        />
      </div>
    </div>
  );
}
