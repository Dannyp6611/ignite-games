import React from 'react';

import { motion } from 'framer-motion';

import { useStoreContext } from '../context/useStoreContext';

const GameDetail = () => {
  // Data
  const { singleGame, screenshots, isLoading } = useStoreContext();

  return (
    <>
      {!isLoading && (
        <motion.div className="w-full min-h-screen overflow-y-scroll bg-black/50 fixed top-0 left-0 scrollbar-thin scrollbar-thumb-[#ff7676] scrollbar-track-white">
          {/* Detail */}
          <motion.div className="w-[80%] rounded-2xl py-8 px-20 bg-white absolute left-[10%] text-black">
            {/* Stats */}
            <motion.div className="flex items-center justify-between">
              <div className="rating">
                <h3>{singleGame?.name}</h3>
                <p>Rating: {singleGame?.rating}</p>
              </div>
              <motion.div className="text-center">
                <h3>Platforms</h3>
                <motion.div className="flex justify-evenly">
                  {singleGame?.platforms.map((game) => (
                    <h3 className="ml-12" key={game.platform.id}>
                      {game.platform.name}
                    </h3>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Media */}
            <motion.div className="mt-20">
              <img
                className="w-full"
                src={singleGame?.background_image}
                alt={singleGame?.background_image}
              />
            </motion.div>

            {/* Description  */}
            <motion.div className="my-20">
              <p>{singleGame?.description_raw}</p>
            </motion.div>
            <div className="gallery">
              {screenshots?.results.map((screen) => (
                <img src={screen.image} key={screen.id} alt={screen.image} />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
