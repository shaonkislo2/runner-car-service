import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20 ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="relative w-1/2">
          <img
            src={person}
            alt=""
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt=""
            className="absolute right-5 top-1/2 w-3/5 border-8  rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2">
          <p className=" text-2xl font-bold text-orange-600">About us</p>
          <h1 className=" my-5 text-5xl font-bold">
            We are qualified <br />
            & of experience <br />
            in this field
          </h1>

          <p className="py-2">
            We believe a well-maintained vehicle will run better, last longer,
            have higher resale value, and save you money in the long run. We
            believe that only through clarifying and then living up to our
            customers’ expectations, can we hope to earn their ongoing loyalty.
          </p>
          <p className="py-2">
            All parts and labor are guaranteed for at least 12 months or 12,000
            miles from the initial service date unless otherwise stated on your
            invoice and not to exceed manufactures warranty. We use only
            high-quality parts backed by a national warranty. If requested, we
            will make available your replaced parts.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
