const data = [
  {
    title: "Inception",
    year: 2010,
    rating: 8.8,
    genre: ["Action", "Sci-Fi"],
    director: "Christopher Nolan",
  },
  {
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: ["Action", "Crime", "Drama"],
    director: "Christopher Nolan",
  },
  {
    title: "Pulp Fiction",
    year: 1994,
    rating: 8.9,
    genre: ["Crime", "Drama"],
    director: "Quentin Tarantino",
  },
  {
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: ["Action", "Sci-Fi"],
    director: "Lana Wachowski, Lilly Wachowski",
  },
  {
    title: "Fight Club",
    year: 1999,
    rating: 8.8,
    genre: ["Drama"],
    director: "David Fincher",
  },
];

//1 - Create an array of movie titles.
const movieTitles = data.map((movie) => movie.title);
console.log(movieTitles);

//2 - create an array of movies with a rating higher than 8.5
const moviesHigherThan8_5 = data.filter((movie) => movie.rating > 8.5);
console.log(moviesHigherThan8_5);

//3 - Sort the movies by rating in decending order.
const sortedMovies = data.sort((a, b) => b.rating - a.rating);
console.log(sortedMovies);

//4 - Create an array of movies released after the year 2000.
const moviesAfter2000 = data.filter((movie) => movie.year > 2000);
console.log(moviesAfter2000);

//5 - Sort the movies by year of release in ascending order.
const sortedMoviesByYear = data.sort((a, b) => a.year - b.year);
console.log(sortedMoviesByYear);

//6 - Create an object that counts the number of movies of each genre.
const genreCount = data.reduce((acc, movie) => {
  movie.genre.forEach((genre) => {
    acc[genre] = (acc[genre] || 0) + 1;
  });
  return acc;
}, {});
console.log(genreCount);

//7 - Check if all movies have a rating higher than 7.
const areAllMoviesHigherThan7 = data.every((movie) => movie.rating > 7);
console.log("Are all movies rated higher than 7?", areAllMoviesHigherThan7);

//8 - Calculate the average rating of all movies.
const averageRating =
  data.reduce((acc, movie) => acc + movie.rating, 0) / (data.length || 1); // || 1 just in case the array is empty
console.log("average of all movies is:", averageRating);

//9 - Create an array of objects with only the title and rating of each movie.
const titleAndRating = data.map((movie) => {
  return { title: movie.title, rating: movie.rating };
});
console.log(titleAndRating);

//10 - Check if there is at least one movie in the "Sci-Fi" genre.
const hasSciFi = data.some((movie) => {
  return movie.genre.includes("Sci-Fi");
});
console.log("Is there at least one movie in the Sci-Fi genre?", hasSciFi);

//11 - Check if there is at least one movie directed by "Quentin Tarantino".
const tarantino = data.some((movie) => {
  return movie.director === "Quentin Tarantino";
});
console.log("tarantino?", tarantino);

//12 - Check if all movies were released after 1990.
const allMoviesNew = data.every((movie) => {
  movie.year > 1990;
});
console.log("are all movies released after 1990?", allMoviesNew);

//13 - Find the titles of all movies directed by "Christopher Nolan" that have a rating higher than 8.5, sorted by rating in descending order.
const nolanMovies = data
  .filter((movie) => movie.director === "Christopher Nolan")
  .filter((movie) => movie.rating > 8.5)
  .sort((a, b) => b.rating - a.rating)
  .map((movie) => movie.title);

console.log("Nolan special movies:", nolanMovies);

//14 - Calculate the average rating of movies released before the year 2000 that belong to the "Drama" genre.
const avgDramaBefore2000 =
  data
    .filter((movie) => movie.year < 2000)
    .filter((movie) => movie.genre.includes("Drama"))
    .reduce((acc, movie) => acc + movie.rating, 0) / data.length || 1; // || 1 just in case the array is empty
console.log("average rating of drama movies before 2000:", avgDramaBefore2000);

//15 - Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year.
const hotTitles_sortedByYear = data
  .filter((movie) => movie.rating > 8.5)
  .sort((a, b) => a.year - b.year)
  .map((movie) => movie.title);

//16 - Find the number of genres covered by movies with a rating higher than 8.8
const genresWithHotMovies = data
  .filter((movie) => movie.rating > 8.8)
  .map((movie) => movie.genre)
  .reduce((acc, genres) => acc.concat(genres), [])
  .reduce((uniqueGenres, genre) => {
    return uniqueGenres.includes(genre)
      ? uniqueGenres
      : uniqueGenres.concat(genre);
  }, []).length;
console.log("number of genres with hot movies", genresWithHotMovies);

//17 - check if at least one movie is rated higher than 9.
const goatedMovie = data.some((movie) => movie.rating > 9);
console.log("is there a goated movie?", goatedMovie);

//18 - check if all movies directed by "Christopher nolan" have a rating higher than 8.5

const areAllNolanMoviesGoated = data
  .filter((movie) => movie.director === "Christopher Nolan")
  .every((movie) => movie.rating > 8.5);
console.log("are all Nolan movies goated?", areAllNolanMoviesGoated);
