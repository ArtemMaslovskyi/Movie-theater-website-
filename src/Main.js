import React from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import Dropdown from "./Dropdown";
import FilmCard from "./FilmCard";
import filmData from "./filmData";

export default function Main() {
  const slides = [
    {
      url: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      name: "Interstellar",
    },
    {
      url: "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
      name: "once upon a time in hollywood",
    },
  ];
  const backgroundSlides = [
    {
      url: "https://static1.squarespace.com/static/5a78ab8490badee028bef0e9/t/5d840e597d51593a02b10357/1568935527866/Interstellar.jpg?format=1500w",
    },
    {
      url: "https://a.ltrbxd.com/resized/sm/upload/3m/w9/ku/pt/once-upon-a-time-in-hollywood-1200-1200-675-675-crop-000000.jpg?v=4bbee2b818",
    },
  ];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  function prevSlide() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlide() {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  // eslint-disable-next-line no-unused-vars
  const [film, setFilm] = React.useState(filmData);
  const movieList = film.map((item) => (
    <FilmCard
      key={item.id}
      name={item.name}
      image={item.image}
      year={item.year}
      genre1={item.genre1}
      genre2={item.genre2}
    />
  ));
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${backgroundSlides[currentIndex].url})`,
        }}
        className="duration-500 bg-center bg-no-repeat bg-cover"
      >
        <div className="relative px-4 py-16 m-auto w-60 h-96 group">
          <div
            style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
            className="w-full h-full duration-500 bg-center bg-cover rounded-2xl"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={20} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={20} />
          </div>

          <div className="flex justify-center py-2 top-4 mix-blend-overlay">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled className="" color="white" />
              </div>
            ))}
          </div>
        </div>
        <h2 className="pb-4 text-4xl font-extrabold text-center text-gray-100 capitalize duration-500 mix-blend-difference">
          {slides[currentIndex].name}
        </h2>
      </div>
      <div>
        <div className="flex items-center">
          <Dropdown name="Sort by" />
        </div>
      </div>
      <div className="grid w-auto grid-cols-2 gap-1 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ms-4">
        {movieList}
      </div>
    </div>
  );
}
