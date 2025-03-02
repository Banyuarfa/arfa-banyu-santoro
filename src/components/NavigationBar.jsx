import React from "react";
import Navigation from "./Navigation";

const NavigationBar = () => {
  return (
    <header className="flex justify-between w-full absolute top-0 font-semibold text-slate-900 p-5 z-50">
      <h1 className="p-2.5">&copy; Arfa Banyu Santoro</h1>

      <nav className="flex">
        <Navigation to="">About</Navigation>
        <Navigation to="">Works</Navigation>
        <Navigation to="">Contact</Navigation>
      </nav>
    </header>
  );
};

export default NavigationBar;
