import React from "react";
import Hero from "./sections/Hero.jsx";
import NavBar from "./components/NavBar.jsx";


const Page = () => {
  return (
    <div className="overflow-hidden font-['Inter']">
      <NavBar />
      

      <main className="relative h-1000 text-slate-900">
        <Hero />
      </main>
    </div>
  );
};

export default Page;
