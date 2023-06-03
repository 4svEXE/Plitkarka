import React from "react";

function TrainingFormatItem({ title, text, image, styles = " ", isLast }) {
  const isImageStyle = image && !isLast ? "hidden" : "";
  const s =
    "min-h-max lg:min-h-[432px] flex flex-col bg-darker p-6 bg-cover lg:block ";

  return (
    <div
      className={s + isImageStyle + styles}
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <h3 className="hyphens-manual lg:pb-[100px] pb-4">{title}</h3>
      <div>{text}</div>
    </div>
  );
}

export default TrainingFormatItem;
