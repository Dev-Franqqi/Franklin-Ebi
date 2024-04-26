'use client'
import useDark from "./components/hooks/useDark"
import Navbar from "./components/Navbar"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import Html from '../public/html5-plain-wordmark.svg'
import Css from '../public/css3-plain.svg'
import Javascript from "../public/javascript-original.svg"
import Typescript from "../public/typescript-original.svg"
import Tailwind from "../public/tailwindcss-plain.svg"
import React from '../public/react-original.svg'
import Next from '../public/nextjs-original.svg'
import Nest from '../public/nestjs-plain.svg'
import Node from '../public/nodejs-plain-wordmark.svg'
import Express from '../public/express-original-wordmark.svg'
import Postgres from '../public/postgresql-original.svg'
import Google from '../public/google-original.svg'
import Mongodb from '../public/mongodb-original.svg'
import Vscode from '../public/vscode-original.svg'
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TbBrandNextjs } from "react-icons/tb";


export default function Home(){
  const {darkMode} = useDark()
  const images = [
    Html,Css,Javascript,Typescript,React,Next,Tailwind,Nest,Node,Express,Postgres,Google,Mongodb,Vscode
  ]
  return(
    <div className={darkMode?'dark bg-dark px-4 py-2 h-screen text-white':'px-4 py-2'}>
    <Navbar />


    <main className="text-center py-10">
      <h1 className="mt-10 font-semibold text-3xl ">Franklin Ebi</h1>
      <p className="text-[#2E8CD0] font-medium text-xl mb-2">Full Stack Developer</p>
      <p className="text-xs w-[320px] mx-auto">
      I specialize in building robust solutions that deliver exceptional user experiences. My commitment to continuous learning ensures that I stay updated with the latest trends and technologies, allowing me to provide cutting-edge solutions for any project. Let&apos;s collaborate to bring your ideas to life!
      </p>
      <p className="flex gap-x-2 text-center justify-center mt-2 text-[#2E8CD0]">View Projects <IoIosArrowForward className=" self-center  text-sm" /></p>

      <div className="bg-[#FAFAFA] dark:bg-gray-900 text-2xl mt-4 px-6 py-4 w-[80%] mx-auto flex justify-between ">
        <FaXTwitter />
        <FaInstagram />
        <FaGithub />

      </div>

      <section className="mt-10 py-10">
        <h2 className="font-semibold text-lg mb-6">Tools</h2>
          <div className="flex gap-4 flex-wrap">

        {images.map((image,index)=><Image key={index} src={image} alt='' />)}
          </div>


      </section>

      <section className="flex flex-col gap-5 px-4 py-10">
        <h3 className="font-semibold">Contact Me</h3>
      <Input className="dark:bg-gray-700" type='text' placeholder='Name'/>
      <Input className="dark:bg-gray-700" type='email' placeholder='Email'/>
        <Textarea className="dark:bg-gray-700" placeholder='Message' />
      </section>
    </main>
    
    <footer className="text-center text-gray-300 leading-6 text-sm">
      <p>
      Made with Nextjs and Tailwind
      </p>
      <p>© 2024</p>
    </footer>
    </div>
  )
}