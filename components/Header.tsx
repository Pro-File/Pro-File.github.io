import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "../typings";
import Link from "next/link";

type Props = {
  social: Social[]
};

export default function Header({ social }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-center justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {
          social && social?.map((item) => {
            return <SocialIcon
              key={item._id}
              url={item.url}
              target="_blank"
              fgColor="gray"
              bgColor="transparent"
            />
          })
        }

      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center text-gray-300 cursor-pointer"
      >
         <Link href="#contact">
        <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          Get In Touch
        </p>
         </Link>
      </motion.div>
    </header>
  );
}