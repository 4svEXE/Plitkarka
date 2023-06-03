import React from "react";
import "./button.scss";

export default function Button({
  title,
  onClick,
  href,
  className,
  target,
}) {
  const styles =
    "flex items-center justify-center w-full px-6 py-3 tracking-wide hover:bg-red-500 sm:shrink-0";
  return (
    <a
      className={styles + " custom-button " + className}
      onClick={onClick}
      href={href}
      target={target? target: "_blank"}
    >
      {title}
    </a>
  );
}
