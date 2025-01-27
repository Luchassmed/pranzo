"use client";

import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Hero() {
  return (
    <div>
      <div className="bg-[#832B2B] min-h-screen flex flex-col justify-center items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 1, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { delay: 1, duration: 3 },
            },
          }}
        >
          <img src="/hero.png" className=" md:h-80 h-44" />
        </motion.div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 1, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: { delay: 0.4, duration: 1 },
            },
          }}
        >
          <div className="text-white items-center flex flex-col justify-center">
            <p className="text-xl md:text-2xl">
              I ER ALLE SAMMEN INVITERET TIL
            </p>
            <p className="text-6xl font-bold py-8">Pranzo</p>
            <p className="text-xl font-thin">hosted af Gringoerne</p>
          </div>
        </motion.div>
        <div className="pt-40 md:pt-10">
          <Button />
        </div>
      </div>
    </div>
  );
}
