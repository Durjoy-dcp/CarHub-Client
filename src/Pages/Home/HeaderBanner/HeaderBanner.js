import React from "react";
import headerpic from "../../../assets/header.png";
import bigCar from "../../../assets/bigCar.gif";
import smokeWheel from "../../../assets/smoke.gif";
const HeaderBanner = () => {
  return (
    <div className=" md:flex items-center my-2   ">
      <div className=" md:order-last  md:w-1/2 p-3 container mx-auto">
        <h1 className="lg:text-9xl text-center md:text-left  text-5xl my-3 bebus text-red-500  ">
          {" "}
          <span className="text-amber-500 "> Buy</span> & Sell{" "}
          <img src={smokeWheel} className="inline" alt="" /> <br /> Your Car
          Here!
        </h1>
        <p className="text-xl md:inline hidden  gray-text  ">
          Along with 1000s of cars to choose from, you can apply for finance
          online and value <br /> your existing car all from the comfort of your
          favourite armchair.
        </p>
      </div>
      <div>
        {/* <img src={headerpic} alt="" /> */}
        <img src={bigCar} alt="" />
      </div>
      <div className="container md:hidden text-center p-6">
        <p className="text-xl inline   gray-text ">
          Along with 1000s of cars to choose from, you can apply for finance
          online and value <br /> your existing car all from the comfort of your
          favourite armchair
        </p>
      </div>
    </div>
  );
};

export default HeaderBanner;
