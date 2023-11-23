import { nanoid } from "nanoid";
const filmData = [
  {
    id: nanoid(),
    raiting: 8.7,
    name: "Interstellar",
    year: "2014",
    genre1: "Sci-Fi",
    genre2: "Space",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 7.6,
    name: "Once upon a time in Hollywood",
    year: "2019",
    genre1: "Comedy",
    genre2: "Crime",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.5,
    name: "Openheimer",
    year: "2023",
    genre1: "Drama",
    genre2: "Historical",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTg3OTRjZmUtMDUyZi00MDJkLThiZTMtMDJiZDExNDQwMmE1XkEyXkFqcGdeQXVyMTY4MjQ5ODE3._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.8,
    name: "Inception",
    year: "2010",
    genre1: "Sci-Fi",
    genre2: "Thriller",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDgzZjdkOTMtNDA2My00OWEyLWFkODAtMmY3NWU2ZThjODZmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "Joker",
    year: "2019",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "Fight Club",
    year: "1999",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDA1ZmI5M2UtZjA3Zi00MmExLWIyN2ItNmRjMjU4ODAxNDQ2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "The Shawshank Redemption",
    year: "1994",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDYwYTdkZGUtOWRiYS00OGYxLTkyZGUtZmEwMzk4MDYyMGM5XkEyXkFqcGdeQXVyMTQ2MjgxNTE4._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "Django Unchained",
    year: "2012",
    genre1: "Western",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDE2N2I0ZDYtYjE5NC00MTViLWI0NjYtZGQ5NzYzZWU3ZWJjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.7,
    name: "Interstellar",
    year: "2014",
    genre1: "Sci-Fi",
    genre2: "Space",
    image:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 7.6,
    name: "Once upon a time in Hollywood",
    year: "2019",
    genre1: "Comedy",
    genre2: "Crime",
    image:
      "https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.5,
    name: "Openheimer",
    year: "2023",
    genre1: "Drama",
    genre2: "Historical",
    image:
      "https://m.media-amazon.com/images/M/MV5BYTg3OTRjZmUtMDUyZi00MDJkLThiZTMtMDJiZDExNDQwMmE1XkEyXkFqcGdeQXVyMTY4MjQ5ODE3._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.8,
    name: "Inception",
    year: "2010",
    genre1: "Sci-Fi",
    genre2: "Thriller",
    image:
      "https://m.media-amazon.com/images/M/MV5BNDgzZjdkOTMtNDA2My00OWEyLWFkODAtMmY3NWU2ZThjODZmXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "Joker",
    year: "2019",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.4,
    name: "Fight Club",
    year: "1999",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDA1ZmI5M2UtZjA3Zi00MmExLWIyN2ItNmRjMjU4ODAxNDQ2XkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 9.3,
    name: "The Shawshank Redemption",
    year: "1994",
    genre1: "Crime",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BMDYwYTdkZGUtOWRiYS00OGYxLTkyZGUtZmEwMzk4MDYyMGM5XkEyXkFqcGdeQXVyMTQ2MjgxNTE4._V1_.jpg",
  },
  {
    id: nanoid(),
    raiting: 8.5,
    name: "Django Unchained",
    year: "2012",
    genre1: "Western",
    genre2: "Drama",
    image:
      "https://m.media-amazon.com/images/M/MV5BZDE2N2I0ZDYtYjE5NC00MTViLWI0NjYtZGQ5NzYzZWU3ZWJjXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
  },
];
export default filmData;
