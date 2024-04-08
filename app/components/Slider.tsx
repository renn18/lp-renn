"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../components/ui/images-slider";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import { useTypewriter, Cursor } from "react-simple-typewriter";

export function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const [text] = useTypewriter({
    words: ['Designer', 'Developer', 'Writer', 'Gamer'],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  const words = [
    {
      text: "Hello there, ",
    },
    {
      text: "welcome",
    },
    {
      text: "to",
    },
    {
      text: "my",
    },
    {
      text: "World.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        <p className="text-neutral-600 dark:text-neutral-200 text-base sm:text-md md:text-md ">
        Creativity starts from here
      </p>
          {/* <TypewriterEffectSmooth words={words}/> */}
          <h1 className="text-6xl text-white my-5 mr-3">
            I'm a 
            <span className="text-6xl text-cyan-500">
              {"  "+text}
            </span>
            <Cursor cursorStyle='|' />
          </h1>
        </motion.p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Get Started
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Contact Me
        </button>
      </div>
      </motion.div>
    </ImagesSlider>
  );
}
