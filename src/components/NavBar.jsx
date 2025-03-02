import React from "react";

const NavBar = () => {
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

const Navigation = ({ children, to = "#" }) => (
  <a className="p-2.5" href={to}>
    {children}
  </a>
);

export default NavBar;
