import React from "react";
import Button from "../Shared/Button/Button";

const About = () => {
  return (
    <div className="flex  justify-center items-center">
      <div className="md:w-1/2 w-full my-16 border-2 border-gray-400 p-8 rounded-lg shadow-xl ">
        <div className="p-5 space-y-5">
          <div>
            <h3 className="text-3xl">Sajibur Rahman</h3>
            <h4 className="text-sm">Email : sajiburr21@gmail.com</h4>
            <h4 className="text-sm">Phone : +880 1830394432</h4>
            <h4 className="text-sm">Github : </h4>
          </div>
          <div>
            <p>
              I am a self tought programmer.My goal is work as full stack web
              applicaion developer ( MERN )... I beleave in consistency. I work
              one thing at time. Currently, I am a statistics student.{" "}
            </p>
          </div>
        </div>
        <Button uppercase="uppercase" bgColor="bg-gray-600" textColor="text-white">Download Resume</Button>
      </div>
    </div>
  );
};

export default About;
