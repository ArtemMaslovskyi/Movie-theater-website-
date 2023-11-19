import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex flex-row items-center px-10 h-[100px] gap-1">
        <img
          src="https://www.svgrepo.com/show/507670/emoji-happy-square.svg"
          alt="logo"
          className="w-20 accent-content"
        ></img>
        <h1 className="hidden mx-3 text-3xl font-bold uppercase text-content md:block">
          Movie
        </h1>
        <div className="flex flex-row items-center mx-3 cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/507538/bookmark.svg"
            alt="bookmark"
            className="w-10 mx-[6px]"
          ></img>
          <h2 className="relative mx-[2px] text-xl text-content font-bold after:bg-accent-2 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hidden lg:block">
            Bookmark
          </h2>
        </div>
        <div className="flex flex-row items-center mx-3 cursor-pointer">
          <img
            src="https://www.svgrepo.com/show/507613/collection.svg"
            alt="collection"
            className="w-10 mx-3"
          ></img>
          <h2 className="relative mx-[2px] text-xl text-content font-bold after:bg-accent-2 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hidden lg:block">
            Collection
          </h2>
        </div>
        <div className="flex bg-supporter w-[100px] md:w-[200px] lg:w-[400px] h-11 px-3 rounded-full">
          <svg
            className="w-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M15 15L21 21"
                stroke="#f4d6cc"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
              <path
                d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                stroke="#f4d6cc"
                stroke-width="2"
              ></path>{" "}
            </g>
          </svg>
          <input
            type="search"
            className="p-1 bg-transparent ms-2 text-bkg w-[100px] md:w-[200px] lg:w-[400px]"
          ></input>
        </div>
      </div>
    </div>
  );
}
