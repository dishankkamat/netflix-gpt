import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const Moviecard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className=" w-36 md:w-48 pr-4">
      <img alt="Movie Card" src={IMG_CDN_URL + posterPath}></img>
    </div>
  );
};

export default Moviecard;
