"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "DailyPulse News",
    desc: `A personalized AI powered news app using Next.js, React, and TypeScript.
Secure authentication with Clerk.
Personalized news fetching via NewsAPI.
AI-powered article summarization with Gemini AI.
Efficient data management with MongoDB and Mongoose.
Responsive UI design with Tailwind CSS.`,
    img: "/dailypulse.png",
    link: "https://dailypulse.fosspage.com/",
    code: "https://github.com/prathamdupare/dailypulse-news",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "FOSS-Prompts",
    desc: `FossPrompts is an open-source AI prompting sharing tool for modern world to discover, create and share creative AI prompts.
Developed using Next.js, Tailwind CSS, and MongoDB, featuring complete authentication functionality powered by NextAuth.js with Google authentication integration.`,
    img: "/foss-prompts.png",
    link: "https://ai-prompt.fosspage.com/",
    code: "https://github.com/prathamdupare/foss-prompt",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Socials",
    desc: `Profile creation and management with secure authentication via Clerk.
Thread creation and nested comment system for engaging discussions.
Real-time search functionality for efficient content discovery.
Stylish UI design using Tailwind CSS, Type-safe codebase with TypeScript.
Efficient database management with MongoDB and Mongoose.
Robust form handling and image uploading capability with Zod and UploadThing.`,
    img: "/socials.png",
    link: "https://social.fosspage.com/",
    code: "https://github.com/prathamdupare/x-twitter-clone",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Agency Site",
    desc: `Full-stack agency website with authentication powered by Next-Auth.js.
Pages include About, Contact, and a Blog section featuring agency-written articles.
Utilized the Shadcn UI library for an aesthetically pleasing user interface.
MongoDB used for efficient database management.
Implemented authentication via traditional login/register methods or GitHub OAuth for streamlined access.`,
    img: "/agency.png",
    link: "https://agency.fosspage.com/",
    code: "https://github.com/prathamdupare/nextjs-blog",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-8 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                    {item.title}
                  </h1>
                  <div className="w-full max-w-[500px] ">
                    <div className="relative w-full aspect-w-16 aspect-h-9">
                      <Image
                        src={item.img}
                        alt=""
                        width={200}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <div className="flex gap-2">
                    <Link href={item.code} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        Code
                      </button>
                    </Link>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        See Demo
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Front-end Developer and UI Designer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
