import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../../assets/images/banner.jpg";
import Button from "../../Shared/Button/Button";

const Banner = () => {
  const navigate =  useNavigate()
  return (
    <div className="md:flex md:justify-around items-center mt-12">

      <div className="space-y-6 px-7 mb-7">
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
        <Button onClick={() => navigate('/regester')}>Create account</Button>
      </div>

      <div className="ml-8">
        <img src={bannerImg} alt="" />
      </div>

    </div>
  );
};

export default Banner;
