import React from "react";
import TrainingProgramItem from "./TrainingProgramItem";
import arrow from "/img/arrow.svg";

function TrainingProgramItems() {
  const ditails1 = (
    <div className="flex flex-col py-6">
      <h5 className="mt-1 mb-4">Уроки</h5>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>Що таке самопродюсування та запуски?</span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>Сповідь. "Викриваємо" (разоблачаем) себе</span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>
          4 колеса, на яких потрібно навчитися "їздити", щоб перетворитися з
          маленького блогера  в системний проєкт
        </span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>
          ДНК блогу. Як зрозуміти в чому моя особливість і чим я відрізняюся від
          інших?
        </span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>Резюме модуля</span>
      </div>

      <h5 className="mt-10 mb-4">Додаткові матеріали</h5>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>Зошит з питаннями для “викриття” (разоблачения) себе</span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>
          Майндкарта: Покрокова стратегія розвитку експерта та всіх чотирьох
          колес
        </span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>
          Таблиця з питаннями, які допоможуть розкрити унікальність та визначити
          свій ДНК
        </span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>
          Майндкарта:
          <br></br>- Розбір, як через звичайні рутинні справи можна розкрити
          себе
          <br></br>- Розбір, як через спогади з минулого можна розкрити себе
          <br></br>- Розбір, як розкрити себе через свою роботу або навчання
        </span>
      </div>
      <div className="flex">
        <img src={arrow} className="mr-4" alt="arrow" />
        <span>Покроковий план, що робити після модулю 0</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col transition duration-300">
      <h2 className="p-6">Програма навчання</h2>

      <TrainingProgramItem
        num="Модуль 0."
        title="Основи, без яких не можна розпочинати"
        description="Результат: Подолав внутрішні бар'єри та чітко зрозумів, хто ти і що
        тобі треба робити"
        ditails={ditails1}
      />

      <TrainingProgramItem
        num="Модуль 1."
        title="Дослідження та вибір продукту"
        description="Результат:  Почав працювати: протестував гіпотезу і створив тестову версію того, що продаватимеш"
        ditails={ditails1}
      />

      <TrainingProgramItem
        num="Модуль 2."
        title="Реклама та аналітика"
        description="Результат:  Отримав усі інструменти залучення до свого онлайн-активу"
        ditails={ditails1}
      />

      <TrainingProgramItem
        num="Модуль 3."
        title="Контент-маркетинг: прогріви, сторітелінг, воронки продажів"
        description="Результат: Знаєш, як працювати з авдиторією, щоб вона чекала на твої пости як на епізоди серіалу"
        ditails={ditails1}
      />

      <TrainingProgramItem
        num="Модуль 4."
        title="Методологія"
        description="Результат:  Зрозумів, як створювати ефективний продукт, який реально приносить результати"
        ditails={ditails1}
      />

      <TrainingProgramItem
        num="Бонус."
        title="Додаткові етери щосуботи"
        description=""
        ditails={ditails1}
      />
    </div>
  );
}

export default TrainingProgramItems;
