import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constants";

export const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="object-cover " src={BG_URL} alt="logo"></img>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
