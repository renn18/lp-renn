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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://stripe.com",
  },
  {
    title: "React",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://netflix.com",
  },
  {
    title: "Typescript",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://google.com",
  },
  {
    title: "Node",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://meta.com",
  },
  {
    title: "PHP",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://amazon.com",
  },
  {
    title: "Java",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://amazon.com",
  },
  {
    title: "Python",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://microsoft.com",
  },
  {
    title: "Figma",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://microsoft.com",
  },
  {
    title: "Postgre",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, a!",
    link: "https://microsoft.com",
  },
];

function About() {
  return (
    <div className='grid grid-cols-1 max-w-7xl mx-auto py-20 md:py-40 px-4'>
      {/* <h1 className='font-bold text-5xl mt-40'>Hello</h1> */}
      <div className='text-center'>
        <h1 className='text-4xl md:text-7xl font-bold text-white py-3'>Skills</h1>
        <p className='text-lg'>includes framework, plugin, etc</p>
        <HoverEffect items={projects} />
        <div className='flex justify-center gap-4 '>
          <div className='flex gap-4 m-0 py-3 px-5 rounded-full bg-black'>
            <Image src={nexticon} alt='react' width={32} height={32} className='opacity-25 border rounded-full' />
            <Image src={reacticon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={typescripticon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={nodejsicon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={phpicon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={figmaicon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={pyicon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={javaicon} alt='react' width={32} height={32} className='opacity-25' />
            <Image src={postgreicon} alt='react' width={32} height={32} className='opacity-25' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About