import React, { useState } from "react";
import Navigation from "../components/Navigation";

const About = () => {
  const [description, setDescription] = useState("self");

  return (
    <div className="bg-slate-900 p-32 text-white flex gap-12 text-lg">
      <img
        src="src/assets/my_photo.jpg"
        className="w-96 aspect-[3/4] object-cover"
        alt=""
      />
      <div className="flex flex-col gap-10">
        <h1 className="text-5xl font-semibold">About My...</h1>
        <nav className="flex gap-8 ">
          <button
            className="py-2 hover:text-amber-200"
            onClick={() => setDescription("self")}
          >
            Self
          </button>
          <button
            className="py-2 hover:text-amber-200"
            onClick={() => setDescription("education")}
          >
            Education
          </button>
          <button
            className="py-2 hover:text-amber-200"
            onClick={() => setDescription("skills")}
          >
            Skills
          </button>
        </nav>
        <Description description={description} />
      </div>
    </div>
  );
};

const Description = ({ description }) => {
  switch (description) {
    case "self":
      return (
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem vel
          voluptatem fugiat ullam facilis, dolorem harum corrupti odit
          blanditiis minima doloremque recusandae saepe, labore culpa dolore
          consectetur inventore, dolor vitae aliquid. Perspiciatis, quod
          possimus eaque nulla est asperiores eos repellat ab blanditiis tempora
          nam! Quae provident sit fugiat porro itaque!
        </p>
      );
    case "education":
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
          tenetur, illo expedita iusto numquam aliquid itaque vel illum facere,
          cumque debitis a beatae, assumenda voluptas.
        </p>
      );
    case "skills":
      return (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          explicabo quas dignissimos repudiandae necessitatibus sapiente ipsum
          recusandae maxime nemo, ducimus qui ipsam? Aperiam, repudiandae modi
          consectetur voluptatum animi dignissimos sint? Ipsam, excepturi? Eum,
          enim nam!
        </p>
      );

    default:
      return "";
  }
};
export default About;
