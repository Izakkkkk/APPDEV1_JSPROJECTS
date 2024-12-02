import { Link } from 'react-router-dom';

const games = [
  {
    id: 1,
    name: "Ghost of Tsushima",
    image: "https://digital.datablitz.com.ph/cdn/shop/files/GhostofTsushimaDIRECTOR_SCUT.jpg?v=1715918050",
  },
  {
    id: 2,
    name: "Red Dead Redemption 2",
    image: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
  },
  {
    id: 3,
    name: "Days Gone",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbvMIJ_4s2ANqH7iM6WCQVayEXbJcd_UPWlQiQURHa6du-ivvRyz0lH_7eRH8j8h8QFZA&usqp=CAU",
  },
  {
    id: 4,
    name: "Uncharted 4: A Thief's End",
    image: "https://upload.wikimedia.org/wikipedia/en/1/1a/Uncharted_4_box_artwork.jpg",
  },
  {
    id: 5,
    name: "Spider-Man 2",
    image: "https://upload.wikimedia.org/wikipedia/en/0/0f/SpiderMan2PS5BoxArt.jpeg",
  },
];

const Games = () => (
  <div className="games-list">
    {games.map((game) => (
      <Link key={game.id} to={`/games/${game.id}`} className="game-card">
        <img src={game.image} alt={game.name} className="game-image" />
        <h3 className="game-title">{game.name}</h3>
      </Link>
    ))}
  </div>
);

export default Games;
