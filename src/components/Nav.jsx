import React from 'react';

import logo from '../img/logo.svg';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav className="py-12 px-20 text-center">
      <motion.div className="flex justify-center p-4 items-center">
        <img className="w-8 h-8" src={logo} alt="ignite logo" />
        <h1 className="font-bold">Ignite</h1>
      </motion.div>
      <div className="search">
        <input
          type="text"
          className="w-[30%] text-2xl p-2 border-none mt-4 shadow-lg shadow-[rgba(0,0,0,0.2)] focus:outline-black"
        />
        <button className="text-2xl border-none py-2 px-8 cursor-pointer bg-[#ff7676] text-white">
          Search
        </button>
      </div>
    </motion.nav>
  );
};

export default Nav;
