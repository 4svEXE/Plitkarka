import React from "react";
import Button from "shared/components/button";

export default function P404() {
  return (
    <div className="h-[50vh] w-full flex flex-col items-center justify-center bg-white">
      <h1 className="text-black dark:text-white text-8xl">404</h1>
      <span className="p-4">Йой! Такої сторінки не існує.</span>
      <Button title="Назад на домашню сторінку" href="/" className="w-max" />
    </div>
  );
}
