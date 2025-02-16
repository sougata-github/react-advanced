interface Props<T> {
  [key: string]: T;
}

const MoviesInfo = ({
  movies,
}: Props<{
  movieTitle: string;
  moviePrice: string;
  movieDescription: string;
  movieRating: number;
}>) => {
  const { movieTitle, moviePrice, movieDescription, movieRating } = movies;

  return (
    <div className="mt-10 first:mt-5">
      <h1>Movie Name: {movieTitle}</h1>
      <p>Price: {moviePrice}</p>
      <p>Description: {movieDescription}</p>
      <p>Ratings: {movieRating}</p>
    </div>
  );
};

export default MoviesInfo;
