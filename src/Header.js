import React from "react";

export default function Header() {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handleOpen() {
    setOpenMenu((prevOpen) => !prevOpen);
    return openMenu;
  }

  const navigation = [
    {
      name: "Bookmark",
      imgage: "https://www.svgrepo.com/show/507538/bookmark.svg",
      alt: "bookmark",
      id: "bookmark",
    },
    {
      name: "Collection",
      imgage: "https://www.svgrepo.com/show/507613/collection.svg",
      alt: "collection",
      id: "collection",
    },
  ];
  const navMenu = navigation.map((item) => (
    <div
      key={item.id}
      className="flex-row items-center hidden mx-3 cursor-pointer md:flex"
    >
      <img src={item.imgage} alt={item.alt} className="w-10 mx-[6px]" />
      <h2 className="relative mx-[2px] text-xl text-content font-bold after:bg-accent-2 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300 hidden lg:block">
        {item.name}
      </h2>
    </div>
  ));
  return (
    <div>
      <div className="flex flex-row items-center justify-between px-10 h-[100px] gap-1">
        <img
          src="https://www.svgrepo.com/show/507670/emoji-happy-square.svg"
          alt="logo"
          className="w-20 accent-content"
        ></img>
        <h1 className="hidden mx-3 text-3xl font-bold uppercase text-content md:block">
          Movie
        </h1>
        {navMenu}
        <div className="hidden md:flex bg-supporter w-[100px] md:w-[200px] lg:w-[400px] h-11 px-3 rounded-full">
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
            className="p-1 bg-transparent ms-2 text-bkg w-[100px] md:w-[200px] lg:w-[400px] active:border-none"
          ></input>
        </div>
        <div className="items-center hidden p-3 rounded-full cursor-pointer md:flex bg-accent-1">
          <svg
            className="w-10"
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
                d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z"
                stroke="#323232"
                stroke-width="2"
              ></path>{" "}
              <path
                d="M3 21C3.95728 17.9237 6.41998 17 12 17C17.58 17 20.0427 17.9237 21 21"
                stroke="#323232"
                stroke-width="2"
                stroke-linecap="round"
              ></path>{" "}
            </g>
          </svg>
          <h2 className="hidden mx-2 text-lg font-bold lg:flex">User</h2>
        </div>
        <div className="z-10 flex cursor-pointer sm:hidden">
          <div className="">
            {openMenu === false ? (
              <svg
                onClick={handleOpen}
                className="w-12"
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
                    d="M3 6H21"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3 14H21"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 10L21 10"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M7 18L21 18"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            ) : (
              <svg
                onClick={handleOpen}
                className="w-12"
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
                    d="M3 6H21"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3 14H21"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3 10L21 10"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <path
                    d="M3 18L21 18"
                    stroke="#323232"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            )}
            {openMenu && (
              <div className="right-0 top-0 w-[300px] h-[600px] absolute bg-accent-1 -z-10 rounded-bl-lg">
                <div className="pt-[100px]">
                  {navigation.map((item) => (
                    <div className="mx-4">
                      <img
                        src={item.imgage}
                        alt={item.alt}
                        className="w-10 mx-[6px] z-10"
                      />
                      <h2 className="relative mx-[2px] text-xl text-content font-bold after:bg-accent-2 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-300">
                        {item.name}
                      </h2>
                    </div>
                  ))}
                </div>
                <div className="flex bg-supporter w-[200px] h-11 px-3 rounded-full m-4">
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
                        stroke="#f4b860"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>{" "}
                      <path
                        d="M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="#f4b860"
                        stroke-width="2"
                      ></path>{" "}
                    </g>
                  </svg>
                  <input
                    type="search"
                    className="p-1 bg-transparent ms-2 text-accent-1 w-[100px] md:w-[200px] lg:w-[400px] active:border-none"
                  ></input>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
