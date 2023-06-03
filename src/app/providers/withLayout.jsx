import React from "react";
import Footer from "widgets/footer";
import Header from "widgets/header";

export default function WithLayout({ children, toggleTheme }) {
  return (
    <div className="bg-white h-full">
      <Header toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
  );
}
