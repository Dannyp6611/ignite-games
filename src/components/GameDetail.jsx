import React from 'react';

import { motion } from 'framer-motion';

import { useStoreContext } from '../context/useStoreContext';

const GameDetail = () => {
  // Data
  const { singleGame, screenshots } = useStoreContext();

  return (
    <motion.div className="w-full min-h-screen overflow-y-scroll bg-black/50 fixed top-0 left-0 scrollbar-thin scrollbar-thumb-[#ff7676] scrollbar-track-white">
      <motion.div className="w-[80%] rounded-2xl py-8 px-80 bg-white absolute left-[10%] text-black">
        <div className="stats">
          <div className="rating">
            <h3>{singleGame.name}</h3>
            <p>Rating: {singleGame.rating}</p>
          </div>
          <div className="info">
            <h3>Platforms</h3>
            <div className="platforms">
              {singleGame.platforms.map((game) => (
                <h3 key={game.platform.id}>{game.platform.name}</h3>
              ))}
            </div>
          </div>
        </div>
        <div className="media">
          <img
            src={singleGame.background_image}
            alt={singleGame.background_image}
          />
        </div>
        <div className="description">
          <p>{singleGame.description_raw}</p>
        </div>
        <div className="gallery">
          {screenshots.results.map((screen) => (
            <img src={screen.image} key={screen.id} alt={screen.image} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GameDetail;
