import React from "react";
import Hero from "./sections/Hero.jsx";
import NavigationBar from "./components/NavigationBar.jsx";
import About from "./sections/About.jsx";

const Page = () => {
  return (
    <div className="overflow-hidden font-['Inter']">
      <NavigationBar />

      <main className="relative h-1000 text-slate-900">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default Page;
