import React from "react";

interface Game {
  gameName: string;
  gameRating: number;
  gameGenre: string;
  gameLanguages: string[];
}

interface Props {
  data: Game[];
}

const GamesInfo = ({ data }: Props) => {
  return (
    <div className="mt-10 first:mt-5">
      {data.map((game, index) => (
        <React.Fragment key={index}>
          <h1>Game Name: {game.gameName}</h1>
          <p>Game Rating: {game.gameRating}</p>
          <ul>
            Langagues:
            {game.gameLanguages.map((language, index) => (
              <li key={index}>{language}</li>
            ))}
          </ul>
        </React.Fragment>
      ))}
    </div>
  );
};

export default GamesInfo;
