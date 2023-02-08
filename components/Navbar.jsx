'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
        <img src="/search.svg" alt="search" className="w-[24px] h-[24px] object-contain" />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">Jinyong.Park</h2>
        <img src="/menu.svg" alt="menu_bar" className="relative w-[24px] h-[24px] object-contain cursor-pointer"
          onClick={() => setActive(!active)}
        />
        {active && (
          <div className="absolute top-0 right-0 w-[15%] h-[100vh] border bg-gradient-to-bl">
            <div className="flex flex-col gap-8 p-8">
              <h2 className="font-extrabold text-[24px] leading-[30px] text-black">MENU BAR</h2>
              <div className="flex flex-col gap-4">
                <h2 className="font-bold text-[18px] leading-[24px] text-black">About</h2>
                <h2 className="font-bold text-[18px] leading-[24px] text-black">Projects</h2>
                <h2 className="font-bold text-[18px] leading-[24px] text-black">Contact</h2>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
