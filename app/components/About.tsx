"use client"

import React from 'react'
import { HoverEffect } from './ui/card-hover-effect'
import Image from 'next/image';
import reacticon from '../../public/atom.png'
import nexticon from '../favicon.ico'
import typescripticon from '../../public/typescript.png'
import nodejsicon from "../../public/nodejs.png"
import phpicon from "../../public/php.png"
import figmaicon from "../../public/figma.png"
import pyicon from "../../public/python.png"
import javaicon from "../../public/java.png"
import postgreicon from "../../public/postgre.png"

export const projects = [
  {
    title: "NextJS",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "React",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Typescript",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Node",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "PHP",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Java",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Python",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Figma",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
  {
    title: "Postgre",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];

function About() {
  return (
    <div className='grid grid-cols-1 px-40 py-40 gap-5'>
        {/* <h1 className='font-bold text-5xl mt-40'>Hello</h1> */}
        <div className='text-center'>
        <h1 className='font-bold text-6xl py-3'>Skills</h1>
        <p className='text-lg'>includes framework, plugin, etc</p>
        <HoverEffect items={projects} />
        <div className='flex justify-center gap-4'>
          <div className='flex gap-4 m-0 py-3 px-5 rounded-full bg-black'>
        <Image src={nexticon} alt='react' width={32} height={32} className='opacity-25 border rounded-full'/>
        <Image src={reacticon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={typescripticon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={nodejsicon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={phpicon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={figmaicon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={pyicon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={javaicon} alt='react' width={32} height={32} className='opacity-25'/>
        <Image src={postgreicon} alt='react' width={32} height={32} className='opacity-25'/>
        </div>
        </div>
        </div>
    </div>
  )
}

export default About