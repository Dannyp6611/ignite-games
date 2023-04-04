import { useEffect } from 'react';
import { useStoreContext } from '../context/useStoreContext';

import { motion } from 'framer-motion';

// components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

function Home() {
  const { loadGames, popular, newGames, upcoming } = useStoreContext();

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <motion.div className="px-20">
      <GameDetail />
      <h2 className="py-20">Upcoming Games</h2>
      {/* Games */}
      <motion.div className="game-container min-h-[80vh]">
        {upcoming.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </motion.div>
      <h2 className="py-20">Popular Games</h2>
      {/* Games */}
      <motion.div className="game-container min-h-[80vh]">
        {popular.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </motion.div>
      <h2 className="py-20">New Games</h2>
      {/* Games */}
      <motion.div className="game-container min-h-[80vh]">
        {newGames.map((game) => (
          <Game
            key={game.id}
            name={game.name}
            released={game.released}
            id={game.id}
            image={game.background_image}
          />
        ))}
      </motion.div>
      popular
    </motion.div>
  );
}

export default Home;
