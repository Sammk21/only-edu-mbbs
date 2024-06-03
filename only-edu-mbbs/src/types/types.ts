// types.ts

export interface Links {
  id: number;
  href: string;
  label: string;
  target: string | null;
  isExternal: boolean;
}

export interface Dropdown {
  id: number;
  label: string;
  href: string;
  subMenuLinks: Links[];
}

export interface Navigation {
  id: number;
  links: Links[];
  dropdown:Dropdown[];
}
