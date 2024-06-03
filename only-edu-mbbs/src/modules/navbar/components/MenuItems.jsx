import Link from "next/link";
import React from "react";

export const MenuItems = ({ items }) => {
  return (
    <li className="menu-items text-dark hover:text-dark/50">
      <Link href={items?.href || "#"}>{items.label}</Link>
    </li>
  );
};


