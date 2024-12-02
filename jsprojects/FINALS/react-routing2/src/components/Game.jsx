import { useParams } from 'react-router-dom';

const gameDetails = {
  1: {
    name: "Ghost of Tsushima",
    description: "An open-world samurai action-adventure game set in feudal Japan.",
    reviews: [
      { username: "Gamer123", review: "Breathtaking visuals and a compelling storyline." },
      { username: "SamuraiFan", review: "The combat mechanics feel incredibly fluid." },
      { username: "OpenWorlder", review: "A masterpiece of open-world design." },
      { username: "SideQuestLover", review: "Engaging side missions that add depth to the story." },
      { username: "ClassicFilmFan", review: "A true homage to classic samurai films." },
    ],
    image: "https://helios-i.mashable.com/imagery/articles/00iMVz5oU69RK9UEoPsZTMW/hero-image.fill.size_1248x702.v1623390188.jpg",
  },
  2: {
    name: "Red Dead Redemption 2",
    description: "A story-driven western epic with unmatched attention to detail.",
    reviews: [
      { username: "OutlawKing", review: "A cinematic experience like no other." },
      { username: "HorseWhisperer", review: "Unforgettable characters and emotional moments." },
      { username: "WestwardExplorer", review: "Incredible attention to detail in the open world." },
      { username: "StoryJunkie", review: "The storyline kept me hooked for hours." },
      { username: "EpicGamer", review: "A must-play for fans of immersive storytelling." },
    ],
    image: "https://cdn1.epicgames.com/b30b6d1b4dfd4dcc93b5490be5e094e5/offer/RDR2476298253_Epic_Games_Wishlist_RDR2_2560x1440_V01-2560x1440-2a9ebe1f7ee202102555be202d5632ec.jpg",
  },
  3: {
    name: "Days Gone",
    description: "A post-apocalyptic adventure with hordes of zombies and a gripping tale.",
    reviews: [
      { username: "ZombieHunter", review: "The horde battles are exhilarating and intense." },
      { username: "SurvivorX", review: "An underrated gem with a lot to offer." },
      { username: "PostApocFan", review: "Emotional depth in both story and character development." },
      { username: "Explorer123", review: "Exploring the open world was incredibly satisfying." },
      { username: "SurvivorJoe", review: "Unique approach to the post-apocalyptic genre." },
    ],
    image: "https://www.godisageek.com/wp-content/uploads/days-gone-review.jpg",
  },
  4: {
    name: "Uncharted 4: A Thief's End",
    description: "A treasure-hunting action game with cinematic storytelling.",
    reviews: [
      { username: "TreasureHunter", review: "A fitting conclusion to Nathan Drake's journey." },
      { username: "PuzzleMaster", review: "Visually stunning with breathtaking set pieces." },
      { username: "ActionFanatic", review: "Blends action, puzzles, and storytelling perfectly." },
      { username: "VoiceActingFan", review: "Top-notch voice acting and character development." },
      { username: "UnchartedFan", review: "An unforgettable adventure from start to finish." },
    ],
    image: "https://lh3.googleusercontent.com/proxy/28Xkipx8M2D8Ujl7IQ4m_IJs096GRL6lAVxW3M3tMqrrsfwV8osSsXi196TZDK3c-9CiktSb0Q4v-J0Q04jY2q2egmor5_1nlfYdrO0wRiQeMiSAo6Ot",
  },
  5: {
    name: "Spider-Man 2",
    description: "A superhero action game featuring dynamic web-swinging in New York City.",
    reviews: [
      { username: "WebSlinger", review: "Swinging through NYC feels so real and thrilling." },
      { username: "CombatMaster", review: "Amazing combat mechanics with diverse enemies." },
      { username: "HeartfeltStory", review: "A heartfelt story that dives into the lives of Peter and Miles." },
      { username: "SideMissionHero", review: "Side missions are engaging and meaningful." },
      { username: "SpideyFan", review: "A love letter to Spiderman fans everywhere." },
    ],
    image: "https://i.ytimg.com/vi/3MVohpYMrbQ/maxresdefault.jpg",
  },
};

const Game = () => {
  const { gameID } = useParams();
  const game = gameDetails[gameID];

  if (!game) {
    return <p>Game not found.</p>;
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "800px", margin: "auto" }}>
      <h2>{game.name}</h2>
      <img
        src={game.image}
        alt={game.name}
        style={{
          display: "block",
          maxWidth: "100%",
          height: "auto",
          margin: "1rem 0",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      />
      <p><strong>Description:</strong> {game.description}</p>

      <h3>Reviews:</h3>
      <div className="reviews-container" style={{ marginTop: "1rem" }}>
        {game.reviews.map((reviewObj, index) => (
          <div
            key={index}
            className="review-box"
            style={{
              background: "#f7f7f7",
              padding: "1rem",
              borderRadius: "8px",
              boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
              marginBottom: "1rem",
            }}
          >
            <h4 className="review-username" style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
              {reviewObj.username}
            </h4>
            <p className="review-text" style={{ fontSize: "1rem", color: "#555" }}>
              {reviewObj.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Game;
