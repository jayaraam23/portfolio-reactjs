import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "UI & UX DESIGNING", image: "/src/assets/icons/ruler-pen.png" },
    { name: "WEB DEVELOPMENT", image: "/src/assets/icons/code.png" },
    { name: "MOBILE DEVELOPMENT", image: "/src/assets/icons/android.png" },
    {
      name: "WEB SCRAPING WITH PYTHON",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
        Hi, my name is Jayaraam SP, i am a Full Stack Developer who likes to learn and Adopt to the new emerging 
        technologies and skills to improve my frontend and backend skills and to succeed as a Full Stack Developer. Having knowledge on 
        cloud technologies like AWS to host my application overs cloud providers .
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-5xl font-bold">Im Fresher</div>
        <p className="text-white text-1xl md:ml-5">
        Results-driven Mid-level developer and engineer armed 
        with a Bachelor degree (2020-2024). I am constantly looking out for opportunities to grow and learn in the field of software
        </p>
      </div>
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
      <Services/>
    </div>
  );
};

export default About;