import React from "react";
import Button from "shared/components/button";

import img from "/img/footer.png";
import Logo from "/Logo.png";

export default function Footer() {
  const buttonInside = (
    <div className="w-full flex justify-between items-center">
      <div className="uppercase">TELEGRAm</div>
      <div className="">➜</div>
    </div>
  );
  const buttonInside2 = (
    <div className="w-full flex justify-between items-center">
      <div className="uppercase">instagram</div>
      <div className="">➜</div>
    </div>
  );
  const buttonInside3 = (
    <div className="w-full flex justify-between items-center">
      <div className="uppercase">e - Mail</div>
      <div className="">➜</div>
    </div>
  );
  const buttonInside4 = (
    <div className="w-full flex justify-between items-center">
      <div className="uppercase">ВГОРУ</div>
      <div className="rotate-[-90deg]">➜</div>
    </div>
  );

  return (
    <footer
      className="w-full mt-20 flex justify-center"
      aria-label="Site Footer"
    >
      <div className="container flex flex-col py-6 items-center justify-center">
        <div className="flex lg:flex-row w-full flex-col-reverse justify-between">
          <div className="flex flex-col border-custom border-l-0 border-r-0 lg:border-r-1 w-full lg:w-[40%] pr-6 pt-6">
            <div className="flex w-full pb-6 pl-6">
              <Button
                title={buttonInside}
                className="empty"
                href="https://web.telegram.org/a/"
              />
            </div>
            <div className="flex w-full pb-6 pl-6">
              <Button
                title={buttonInside2}
                className="empty"
                href="https://web.telegram.org/a/"
              />
            </div>
            <div className="flex w-full pb-6 pl-6">
              <Button
                title={buttonInside3}
                className="empty"
                href="https://web.telegram.org/a/"
              />
            </div>
          </div>

          <div className="flex justify-end w-full lg:w-[60%] border-custom border-x-0 p-6">
            <div className="flex w-full relative first-screen-banner ">
              <div className="banner w-full h-full flex justify-end overflow-hidden">
                <img
                  src={img}
                  alt="Plitcarka"
                  className="h-full w-auto max-w-none"
                />
              </div>

              <img
                src={Logo}
                alt="Plitcarka logo"
                className="w-[50%] lg:w-[20%] xl:w-[50%] banner-logo"
              />
            </div>
          </div>
        </div>

        <div className="container py-10 lg:grid lg:grid-cols-3  flex flex-col-reverse pl-6">
          <div className="flex flex-col w-full items-center lg:items-start">
            <a href="" className="py-6">
              Політика конфіденційності
            </a>
            <a href="" className="py-6">
              Договір оферти
            </a>
          </div>

          <div className="flex flex-col w-full items-center lg:items-start">
            <a href="" className="py-6">
              ФОП Підченко Владислав Станіславович
            </a>
            <a href="" className="py-6">
              Номер: 3608603636
            </a>
          </div>

          <div className="flex w-full pr-6 pb-6 items-center lg:items-start">
            <Button
              title={buttonInside4}
              className="empty to-top"
              href="#FirstScreen"
              target="_top"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
