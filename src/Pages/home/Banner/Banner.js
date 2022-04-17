import React from "react";
import bannerImg from "../../../assets/images/banner.jpg";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  return (
    <div className="flex justify-around items-center mt-12">
      <div className="space-y-6 px-7">
        <div>
          <h3 className="text-3xl">Learn with me</h3>
          <h3 className="text-3xl">anytime anywhere</h3>
        </div>
        <div>
          <p>
            My misson to help people to find the best courses online and learn
            with{" "}
          </p>
          <p>me anytime anywhere </p>
        </div>
        <Button>Create account</Button>
      </div>
      <div>
        <img className="w-80" src={bannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
