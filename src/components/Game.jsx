import React from 'react';

import { motion } from 'framer-motion';

const Game = ({ name, released, id, image }) => {
  return (
    <motion.div className="min-h-[30vh] shadow-md shadow-black/20 text-center rounded-md overflow-hidden">
      <h3>{name}</h3>
      <p>{released}</p>
      <div className="w-full h-[40vh]">
        <img className="object-cover h-full" src={image} alt={name} />
      </div>
    </motion.div>
  );
};

export default Game;
