import React from "react";
import img from "../../assets/images/notFound/404-error.avif";

const NotFound = () => {
  return (
    <div>
      <h1>Not FOund</h1>
      <img className="w-full" src={img} alt="" />
    </div>
  );
};

export default NotFound;
