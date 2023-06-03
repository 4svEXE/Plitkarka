import React from "react";
import "./WhoSuits.scss";

function WhoSuits() {
  return (
    <div id="WhoSuits" className="container flex flex-col mt-20">
      <h2>Кому підходить це навчання?</h2>
      <div className="WhoSuits-item   w-full md:flex items-start justify-between p-6">
        <div className="flex items-center md:items-start">
          <b className="">01.</b>
          <strong className="hyphens-manual text-2xl lg:text-4xl w-[330px] mx-1 lg:mx-10 my-4">
            Початківцям
          </strong>
        </div>

        <p>
          Якщо ви думаєте розвиватися у сфері онлайн, то це навчання посилить
          ваше маркетингове мислення, навчить навичкам, які дозволять вибирати в
          майбутньому: продавати свої скіли за гроші або запускати свій проєкт
          та ростити власний онлайн-актив.
        </p>
      </div>

      <div className="WhoSuits-item  w-full md:flex items-start justify-between p-6">
        <div className="flex items-center md:items-start">
          <b className="">02.</b>
          <strong className="text-2xl lg:text-4xl w-[330px] mx-1 lg:mx-10 my-4">
            Ремісникам
          </strong>
        </div>
        <p>
          Смм фахівцям, таргетологам, продюсерам, психологам, дизайнерам,
          маркетологам, вчителям та всім, хто вже має експертніть в будь-якій
          темі. На навчанні ви зрозумієте, як просувати себе та свої ідеї,
          працювати зі своїм блогом, створювати свій онлайн-актив і робити
          запуски будь-якого продукту. І нарешті вийдете із тіні! (хоча бути
          за кадром теж можна — ви самі обираєте як вам краще)
        </p>
      </div>

      <div className="WhoSuits-item  w-full md:flex items-start justify-between p-6">
        <div className="flex items-center md:items-start">
          <b className="">03.</b>
          <strong className="hyphens-manual  w-full text-2xl lg:text-4xl lg:w-[330px] mx-1 lg:mx-10 my-4">
            Підприємцям
          </strong>
        </div>
        <p>
          На навчанні ми говоримо не лише про інфобізнес! Я також запускала
          товарний бізнес (колекції одягу) та робила запуски заходів
          (харківський міжнародний марафон та ін.) за своєю системою. Весь світ
          використовує систему запусків для запуску своїх продуктів. Ви зможете
          взяти ці знання, адаптувати у своєму проєкті, виділитися серед
          колег на ринку та масштабуватися.
        </p>
      </div>
    </div>
  );
}

export default WhoSuits;
