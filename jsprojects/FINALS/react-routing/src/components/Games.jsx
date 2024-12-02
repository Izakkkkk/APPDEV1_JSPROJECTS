import { Link } from "react-router-dom";

const games = [
    { id: 1, name: 'TFT', description: 'This is an auto-battler game.' },
    { id: 2, name: 'GOT', description: 'Ghost of Tsushima, a popular action game.' },
    { id: 3, name: 'ER', description: 'Elden Ring, an open-world RPG.' },
    { id: 4, name: 'RDR2', description: 'Red Dead Redemption 2, a western-action adventure game' }
  ];
  
  export default function Games() {
    return (
      <>
        <h1>Games List:</h1>
        <ul>
          {games.map((game) => (
            <li key={game.id}>
                <Link to = {'/games/$(game.id)'} state = {{game}}>
                <strong>{game.name}</strong> </Link>
                - {game.description}
            </li>
          ))}
        </ul>
      </>
    );
  }