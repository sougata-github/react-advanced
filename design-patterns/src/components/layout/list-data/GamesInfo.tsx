interface Props<T> {
  [key: string]: T;
}

const GamesInfo = ({
  games,
}: Props<{
  gameName: string;
  gameRating: number;
  gameGenre: string;
  gameLanguages: string[];
}>) => {
  const { gameName, gameRating, gameGenre, gameLanguages } = games;

  return (
    <div className="mt-10 first:mt-5">
      <h1>Game Name: {gameName}</h1>
      <p>Game Rating: {gameRating}</p>
      <p>Game Genre: {gameGenre}</p>
      <ul className="mt-2">
        Languages:{" "}
        {gameLanguages.map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
    </div>
  );
};

export default GamesInfo;
