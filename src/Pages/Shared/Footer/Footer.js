import React from "react";
import Button from "../Button/Button";

const Footer = () => {
  return (
    <footer className="bg-slate-700 p-5">
      <div className="max-w-7xl mx-auto space-y-7">
        <div className="grid grid-cols-2">
          <div className="p-12 space-y-5">
            <h1 className="text-4xl text-white">Start Learning with 61.5k students around the world</h1>
            <Button>Join the family</Button>
            <button className="px-10 py-2 rounded-md bg-slate-500 ml-5">Browse all course</button>
          </div>
          <div className="flex justify-center items-center">
            <div className="p-5">
              <h2 className="text-4xl text-white">6.3k</h2>
              <p className="text-white">Online course</p>
            </div>
            <div className="p-5">
              <h2 className="text-4xl text-white" >26k</h2>
              <p className="text-white">certificate instractor</p>
            </div>
            <div className="p-5">
              <h2 className="text-4xl text-white">99%</h2>
              <p className="text-white">success rate</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p>&copy; {new Date().getFullYear()}-all right resrved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
