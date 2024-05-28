"use client";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

import { GoDeviceMobile, GoLocation, GoMail } from "react-icons/go";

const Footer = () => {
  return (
    <footer
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      className=" w-full rounded-t-[28px] pt-12 z-10 shadow-inner "
    >
      <div className="h-full w-full flex justify-center items-center">
        <section className="w-[99%] bottom-0   mx-auto flex flex-col rounded-3xl  bg-light z-0">
          <div className="relative overflow-hidden h-[300px] w-full rounded-t-3xl">
            <Image
              src={
                "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <div className="px-14 py-12 row-span-4">
            <div className="row flex-col gap-y-9 sm:flex-row flex justify-between">
              <div className="flex-col">
                <a href="https://avvr.nl" className="logo">
                  <span className="text-5xl">Only edu</span>
                </a>
              </div>
              <div className="flex-col flex text-sm text-dark mb-8">
                <ul>
                  <li>
                    <div className="footer-item footer-item-title text-gray-500 mb-3">
                      <span>Sitemap</span>
                    </div>
                  </li>
                  <li>
                    <a className="footer-item" href="https://avvr.nl">
                      <span>Home</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-item"
                      href="https://avvr.nl/expertises"
                    >
                      <span>About us</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer-item" href="https://avvr.nl/team">
                      <span>Our Services</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer-item" href="https://avvr.nl/actueel">
                      <span>Immigration</span>
                    </a>
                  </li>
                  <li>
                    <a className="footer-item" href="https://avvr.nl/over-ons">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-item"
                      href="https://avvr.nl/werken-bij"
                    >
                      <span>Test series</span>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex-col h-full w-[250px] flex gap-y-5 text-sm">
                <li className="flex gap-x-3 justify-center items-center">
                  <GoLocation className="text-2xl text-accent" />
                  <p>Satra Plaza, 909, Sector 19D Navi Mumbai 400709</p>
                </li>
                <li className="flex gap-x-3">
                  <GoMail className="text-accent text-lg" />
                  <p>info@onlyEducation.com</p>
                </li>
                <li className="flex gap-x-3">
                  <GoDeviceMobile className="text-accent text-lg" />
                  <p>+91 9191919191</p>
                </li>
              </div>
            </div>
          </div>
          <div className="h-[5rem] left-0 w-full  text-light bg-greenDark flex justify-around sm:px-24 items-center flex-col z-20">
            <ul className="flex gap-x-2 text-lg">
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
            <ul className="flex text-xs gap-x-6">
              <li>Terms and condition</li>
              <li>Privacy policy</li>
              <li>Contact us</li>
            </ul>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
