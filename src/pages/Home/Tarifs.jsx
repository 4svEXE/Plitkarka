import React from "react";
import TarifsItem from "./components/TarifsItem";

function Tarifs() {
  const tarifs = {
    mini: {
      gets: [
        "Усі модулі, окрім “Методологія”",
        "Усі прямі етери",
        "Доступ до перевірочних тестів",
      ],
      access: ["До уроків після закінчення курсу — 3 місяці."],
      prices: [
        [149, 5590, "Зараз"],
        [199, 7459, "13.04"],
        [250, 9369, "17.04"],
      ],
    },
    pro: {
      gets: [
        "Усі модулі, окрім “Методологія”",
        "Усі прямі етери",
        "Всі додаткові матеріали: конспекти, таблиці та гайди",
        "Доступ до перевірочних тестів",
        "Перевірка практичних домашніх завдань особисто від Каті",
      ],
      access: [
        "До дослідницької онлайн-бібліотеки з розборами маркетингу західних компаній (IT компанії, стартапи, сервіси, бренди одягу, онлайн-курси, особісті бренди)  ",
        "До досліджень запусків учнів та запусків на ринку України та США по нішах",
        "До уроків після закінчення курсу — 5 місяців",
      ],
      prices: [
        [249, 9329, "Зараз"],
        [299, 11.199, "13.04"],
        [350, 13.109, "17.04"],
      ],
    },
    ultra: {
      gets: [
        "Усі модулі, окрім “Методологія”",
        "Усі прямі етери",
        "Всі додаткові матеріали: конспекти, таблиці та гайди",
        "Доступ до перевірочних тестів",
        "Перевірка практичних домашніх завдань особисто від Каті",
        "Групові майстермайнди: 5 зустрічей в Zoom по неділях, починаючи з 23.04 (4 ММ + 1 організаційна зустріч)",
      ],
      access: [
        "До дослідницької онлайн-бібліотеки з розборами маркетингу західних компаній (IT компанії, стартапи, сервіси, бренди одягу, онлайн-курси, особісті бренди)  ",
        "До досліджень запусків учнів та запусків на ринку України та США по нішах",
        "До уроків після закінчення курсу — 1 рік",
      ],
      prices: [
        [490, 20.549, "Зараз"],
        [549, 24.339, "13.04"],
        [650, 28.1, "17.04"],
      ],
    },
  };

  return (
    <div className="container flex flex-col" id="Tarifs">
      <h2 className="p-6">Тарифи</h2>

      <div className="grid drid-cols-1 lg:grid-cols-3 gap-6">
        <TarifsItem
          title="MINI"
          gets={tarifs.mini.gets}
          access={tarifs.mini.access}
          prices={tarifs.mini.prices}
          onBuy={() => alert("buy mini")}
          onReserve={() => alert("reserve mini")}
        />
        <TarifsItem
          title="PRO"
          gets={tarifs.pro.gets}
          access={tarifs.pro.access}
          prices={tarifs.pro.prices}
          onBuy={() => alert("buy PRO")}
          onReserve={() => alert("reserve PRO")}
        />
        <TarifsItem
          title="ULTRA"
          gets={tarifs.ultra.gets}
          access={tarifs.ultra.access}
          prices={tarifs.ultra.prices}
          onBuy={() => alert("buy ULTRA")}
          onReserve={() => alert("reserve ULTRA")}
        />
      </div>
    </div>
  );
}

export default Tarifs;
