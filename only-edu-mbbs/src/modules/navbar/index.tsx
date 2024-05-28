"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import { HoveredLink, Menu, MenuItem } from "./components/Menulist";
import { MenuItems } from "./components/MenuItems";

interface MenuItem {
  title: string;
  href?: string;
  submenu?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    title: "Home",
  },

  {
    title: "Services",
    submenu: [
      {
        title: "Mbbs India",
      },
      {
        title: "Mbbs Abroad",
        submenu: [
          { title: "Russia", href: "/mbbs-russia" },
          { title: "China", href: "/mbbs-china" },
          { title: "Ukraine", href: "/mbbs-ukraine" },
          { title: "Philippines", href: "/mbbs-philippines" },
          { title: "Georgia", href: "/mbbs-georgia" },
          { title: "Poland", href: "/mbbs-poland" },
          { title: "Kazakhstan", href: "/mbbs-kazakhstan" },
          { title: "Belarus", href: "/mbbs-belarus" },
          { title: "Bangladesh", href: "/mbbs-bangladesh" },
          { title: "Lithuania", href: "/mbbs-lithuania" },
        ],
      },
      {
        title: "SEO",
      },
    ],
  },
  {
    title: "About",
    submenu: [
      {
        title: "Who we are",
      },
      {
        title: "Our values",
      },
    ],
  },
  {
    title: "Test Series",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    //used useMotionValueEvent from framer motion to avoid unnecessary re-rendering of whole component caused by events
    setIsScrolled(latest >= 80);
  });

  return (
    <header className="mb-9 w-full fixed bg-green-900 dark:bg-only-green-950 z-50">
      <div
        className={`bg-only-green-900 dark:bg-only-green-950  text-white transition-all duration-300 ease-out relative overflow-hidden ${
          isScrolled ? "h-0" : "h-[2rem]"
        }`}
      >
        <div className="flex gap-5 items-center h-full justify-between px-16  ">
          <ul className="w-full flex justify-between  text-xs  sm:text-sm">
            <li>info@onlyeducation.in</li>
            <li>+91 9898989898</li>
          </ul>
          <ul className=" gap-x-2 text-lg hidden sm:flex">
            <li>
              <FaInstagram />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaPinterest />
            </li>
            <li>
              <FaTwitter />
            </li>
          </ul>
        </div>
      </div>
      <nav
        className={`w-full relative bg-light dark:bg-dark justify-between  text-green-950 dark:text-light px-4 sm:px-10 transition-all  ease-in-out duration-300 border-t dark:border-t-border border-t-borderLight flex items-center  ${
          isScrolled ? "rounded-t-none h-[4rem] " : "rounded-t-3xl h-[5rem]"
        } `}
      >
        <span className="font-medium text-2xl">Only edu</span>
        <div>
          <ul className=" hidden md:flex  text-sm font-normal">
            <ul className="menus">
              {" "}
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}{" "}
            </ul>
          </ul>
          <label className="hamburger md:hidden">
            <input type="checkbox" />
            <svg viewBox="0 0 32 32">
              <path
                className="line stroke-dark dark:stroke-light line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path
                className="line stroke-dark dark:stroke-light"
                d="M7 16 27 16"
              ></path>
            </svg>
          </label>
        </div>

        <AnimatePresence mode="wait">
          {isScrolled && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }} // Adjust duration and ease as needed
              className={`absolute left-0 bottom-0 w-full border-b dark:border-b-border border-b-borderLight `}
            ></motion.span>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
