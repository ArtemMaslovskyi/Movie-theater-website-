import React from "react";

export default function FilmCard(props) {
  return (
    <div className="flex flex-col md:w-[180px] w-48 lg:w-52 bg-accent-1 rounded-b-lg cursor-pointer hover:shadow-2xl my-1">
      <p className="absolute w-8 px-2 my-4 text-white bg-accent-2 rounded-r-md">
        {props.rate}
      </p>
      <img
        src={props.image}
        alt="card"
        className="md:w-[180px] w-52 lg:w-52"
      ></img>
      <p className="mx-1 mt-2 font-bold text-center truncate">{props.name}</p>
      <div className="flex flex-row mx-2 my-2 justify-evenly">
        <p className="text-sm hover:underline decoration-2">{props.year}</p>
        <p className="text-sm">•</p>
        <p className="text-sm hover:underline decoration-2">{props.genre1}</p>
        <p className="text-sm">•</p>
        <p className="text-sm hover:underline decoration-2">{props.genre2}</p>
      </div>
    </div>
  );
}
