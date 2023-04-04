import React from 'react';

import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import { useStoreContext } from '../context/useStoreContext';

const Game = ({ name, released, id, image }) => {
  const { loadDetail } = useStoreContext();

  const loadDetailHandler = () => {
    loadDetail(id);
  };

  return (
    <motion.div
      onClick={loadDetailHandler}
      className="min-h-[30vh] shadow-md shadow-black/20 text-center rounded-md overflow-hidden cursor-pointer"
    >
      <Link to={`/game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <div className="w-full h-[40vh]">
          <img className="object-cover h-full" src={image} alt={name} />
        </div>
      </Link>
    </motion.div>
  );
};

export default Game;
