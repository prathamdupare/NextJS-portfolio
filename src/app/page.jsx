"use client";
import Image from "next/image";

import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        <div className="h-1/2 flex flex-col lg:h-full lg:w-1/2  gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold ">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
          <div className="flex gap-4 w-full">
            <button className="p-4 rounded-lg ring-1  ring-black bg-black text-white">
              View my Work
            </button>
            <button className="p-4 rounded-lg ring-1  ring-black ">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
