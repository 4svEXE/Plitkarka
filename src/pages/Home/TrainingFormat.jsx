import React from "react";

import TrainingFormatItem from "./components/TrainingFormatItem";

import img0 from "/img/trainingFormat/0.png";
import img1 from "/img/trainingFormat/1.png";
import img2 from "/img/trainingFormat/2.png";
import img3 from "/img/trainingFormat/3.png";
import arrow from "/img/arrow.svg";

function TrainingFormat() {
  const trainingFormatItemsHTML = (
    <div className="flex flex-col py-6 flex-wrap">
      <span className="lg:mb-[30px] mb-4">
        До групи майстермайндів я візьму 10 осіб, яких відберу особисто
      </span>

      <span className="lg:mb-[10px] mb-4">Критерії вибору</span>

      <div className="flex lg:flex-row flex-col flex-wrap py-6">
        <div className="flex flex-col w-full lg:w-[40%]">
          <div className="flex">
            <img src={arrow} className="mr-4" alt="arrow" />
            <span>Ви вже пробували вести особистий блог</span>
          </div>
          <div className="flex">
            <img src={arrow} className="mr-4" alt="arrow" />
            <span>
              Ви готові 4 тижні працювати на 100% та відвідувати всі зустрічі
            </span>
          </div>
          <div className="flex">
            <img src={arrow} className="mr-4" alt="arrow" />
            <span>У вас є розуміння основ маркетингу</span>
          </div>
        </div>

        <div className="flex flex-col w-full lg:w-[40%]">
          <div className="flex">
            <img src={arrow} className="mr-4" alt="arrow" />
            <span>
              Ви готові виділяти 3 години у неділю на онлайн-розбори ваших
              блогів/проєктів/запусків (зустрічі буде 4+1 організаційна)
            </span>
          </div>
          <div className="flex">
            <img src={arrow} className="mr-4" alt="arrow" />
            <span>
              Ви спокійно реагуєте на розбори та професійну критику від колег
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container flex flex-col mt-10" id="TrainingFormat">
      <div className="mb-6 flex items-end p-4 bg-img lg:bg-none bg-[url(/img/trainingFormat/0.png)] lg:h-auto h-[400px] bg-cover">
        <h2 className="text-white lg:text-black">
          Формат навчання — нічого зайвого
        </h2>
      </div>

      <div className="grid grid-cosl-1 lg:grid-cols-3 gap-6">
        <TrainingFormatItem
          title="Зручна платформа навчання"
          text="Всі відео, конспекти до уроків та домашні завдання будуть на навчальній платформі (не Telegram), доступ до якої ви отримаєте одразу після оплати."
        />
        <TrainingFormatItem
          title="Структурні короткі уроки без води"
          text="По 15-30 хвилин із конспектами, презентаціями та додатковими матеріалами: воркбуки, гайди, чек-листи, покрокові інструкції, конспекти всіх уроків."
        />
        <TrainingFormatItem image={img1} />

        <TrainingFormatItem image={img2} />
        <TrainingFormatItem
          title="Практичні завдання та прямі етери"
          text="Ми з методологом підготували практичні домашки та тести до кожного уроку, які допоможуть вам швидше розібратися в темі."
        />
        <TrainingFormatItem
          title="Детальний зворотній зв'язок"
          text="Перевіряти ваші домашні завдання буду особисто я на тарифі зі зворотним зв'язком. 
          Якщо ви оберете тариф без зворотного зв'язку, то у вас будуть тести на перевірку знань. Вони допоможуть зрозуміти, як добре ви розібралися в матеріалі."
        />
      </div>
      <div className="flex flex-col lg:grid grid-cosl-1 lg:grid-cols-3 gap-6 pt-6">
        <TrainingFormatItem
          title="Серія групових майстер майндів"
          text={trainingFormatItemsHTML}
          styles="col-span-2"
        />
        {/* <TrainingFormatItem title="" text={trainingFormatItemsHTML2} /> */}
        <TrainingFormatItem image={img3} isLast="true" styles=" h-[520px]" />
      </div>
    </div>
  );
}

export default TrainingFormat;
