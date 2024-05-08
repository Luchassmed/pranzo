"use client";

import React from "react";
import { AiOutlineFacebook, AiOutlineGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

const contacts = [
  {
    id: 1,
    logo: <AiOutlineFacebook className="h-8 w-8" />,
    url: "https://www.facebook.com/groups/654389965643357",
  },
  {
    id: 2,
    logo: <AiOutlineInstagram className="h-8 w-8" />,
    url: "https://www.instagram.com/fossprivat/",
  },
  {
    id: 3,
    logo: <AiOutlineGithub className="h-8 w-8" />,
    url: "https://github.com/Luchassmed/pranzo",
  },
];

export default function Socials() {
  return (
    <div className="bg-[#FCF4EC] flex flex-row items-center justify-center pb-5 md:pb-10 gap-8">
      {contacts.map((contact, i) => {
        return (
          <a href={contact.url} target="_blank" rel="noreferrer" key={i}>
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.9 }}
            >
              {contact.logo}
            </motion.div>
          </a>
        );
      })}
    </div>
  );
}
