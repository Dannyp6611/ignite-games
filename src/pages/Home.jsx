import { useEffect } from 'react';
import { useStoreContext } from '../context/useStoreContext';

import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';

// components
import Game from '../components/Game';
import GameDetail from '../components/GameDetail';

import { useLocation } from 'react-router-dom';

function Home() {
  // get the current location
  const location = useLocation();
  const pathId = location.pathname.split('/')[2];

  const { loadGames, popular, newGames, upcoming } = useStoreContext();

  useEffect(() => {
    loadGames();
  }, []);

  return (
    <motion.div className="px-20">
      <LayoutGroup type="crossfade">
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
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
      </LayoutGroup>
    </motion.div>
  );
}

export default Home;
