import type { Dropdown, Links } from "@/types/types";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import qs from "qs";

interface MenuItemProps {
  items: {
    id: number;
    label: string;
    href?: string | null;
    subMenuLinks?: Links[];
  };
  depthLevel: number;
}

export const DropDownItems = ({ items, depthLevel }: MenuItemProps) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (event: MouseEvent | TouchEvent) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target as Node)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setDropdown(false);
    }
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <>
        <Link
          href={items.href || "#"}
          className="  hover:text-dark/50 dark:text-dark/80 items-center gap-r-1"
          type="button"
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}
        >
          <span className=" flex justify-between items-center">
            <p>{items.label}</p>{" "}
            {depthLevel > 0 ? (
              <RiArrowRightSLine />
            ) : (
              <RiArrowDownSLine
                className={`mt-[2px] font-semibold transition duration-200 ease-in-out ${
                  dropdown && "rotate-180"
                } `}
              />
            )}
          </span>
        </Link>
        {items.subMenuLinks && (
          <Dropdown
            depthLevel={depthLevel}
            subMenuLinks={items.subMenuLinks}
            dropdown={dropdown}
          />
        )}
      </>
    </li>
  );
};

interface DropDownItemProps {
  subMenuLinks: Links[];
  dropdown: boolean;
  depthLevel: number;
}

const Dropdown = ({
  subMenuLinks,
  dropdown,
  depthLevel,
}: DropDownItemProps) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul
      className={`dropdown border-borderLight border dark:border-border bg-light dark:bg-dark ${dropdownClass} ${
        dropdown ? "show" : ""
      }`}
    >
      {" "}
      {subMenuLinks.map((submenu, index) => (
        <DropDownItems items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};
