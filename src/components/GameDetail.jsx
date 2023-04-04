import React from 'react';

import { motion } from 'framer-motion';

import { useStoreContext } from '../context/useStoreContext';
import { useNavigate } from 'react-router-dom';
import { getSmallerImage } from '../util';

// images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';

// star images
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = ({ pathId }) => {
  const navigate = useNavigate();
  // Data
  const { singleGame, screenshots, isLoading } = useStoreContext();

  // Exit Detail
  const exitDetailHandler = (e) => {
    const element = e.target;
    if (element.classList.contains('detail-container')) {
      document.body.style.overflow = 'auto';
      navigate('/');
    }
  };

  // get platform images
  const getPlatform = (platform) => {
    switch (platform) {
      case 'Playstation 4':
        return playstation;
      case 'Xbox One':
        return xbox;
      case 'PC':
        return steam;
      case 'Nintendo Switch':
        return nintendo;
      case 'IOS':
        return apple;
      default:
        return gamepad;
    }
  };

  // Get Stars
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(singleGame.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <img alt="star" className="inline-block" key={i} src={starFull} />
        );
      } else {
        stars.push(
          <img alt="star" className="inline-block" key={i} src={starEmpty} />
        );
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <motion.div
          onClick={exitDetailHandler}
          className="detail-container w-full min-h-screen overflow-y-scroll bg-black/50 fixed z-[5] top-0 left-0 scrollbar-thin scrollbar-thumb-[#ff7676] scrollbar-track-white cursor-pointer"
        >
          {/* Detail */}
          <motion.div
            layoutId={pathId}
            className="w-[80%] rounded-2xl py-8 px-20 bg-white absolute z-[10] left-[10%] text-black cursor-default"
          >
            {/* Stats */}
            <motion.div className="flex items-center justify-between">
              <div className="rating">
                <h3>{singleGame?.name}</h3>
                <p className="flex items-center gap-x-2">
                  Rating: {getStars()}
                </p>
              </div>
              {/* Platforms */}
              <motion.div className="text-center">
                <h3>Platforms</h3>
                <motion.div className="flex justify-evenly items-center">
                  {singleGame?.platforms.map((game) => (
                    <img
                      src={getPlatform(game.platform.name)}
                      key={game.platform.id}
                      alt={game.platform.name}
                      className="ml-12"
                    />
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Media */}
            <motion.div className="mt-20">
              <img
                className="w-full"
                src={getSmallerImage(singleGame.background_image, 1280)}
              />
            </motion.div>

            {/* Description  */}
            <motion.div className="my-20">
              <p>{singleGame?.description_raw}</p>
            </motion.div>
            <div className="gallery">
              {screenshots?.results.map((screen) => (
                <img
                  src={getSmallerImage(screen.image, 1280)}
                  key={screen.id}
                  alt={screen.image}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default GameDetail;
