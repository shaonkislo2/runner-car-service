import React from "react";
import "./BannerItem.css";

const BannerItem = ({ slide }) => {
  const { image, id, prev, next } = slide;
  return (
    <div id={`slide${id}`} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={image} className="w-full  rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/4">
        <h1 className="text-6xl font-bold text-white">
          Affordable <br />
          Price for car <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 w-2/5 left-24  top-1/2">
        <p className="text-xl  text-white">
          We believe a well-maintained vehicle will run better, last longer and
          save you money in the long run.
        </p>
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#slide${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#slide${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default BannerItem;
