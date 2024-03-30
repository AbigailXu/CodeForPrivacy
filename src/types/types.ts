import { StaticImageData } from "next/image";

export type Post = {
  _id: string;
  title: string;
  description?: string;
  authors: string;
  image: StaticImageData;
  date?: string;
  context?: string[] | JSX.Element[];
  reference?: string;
  question: string;
  options: string[];
  answer: string;
};

export type Tag = {
  _id: string;
  title: string;
  iconType: string;
  iconName: string;
};

export type Resource = {
  _id: string;
  title: string;
  description?: string;
  image?: StaticImageData;
  context?: string[] | JSX.Element[];
  date?: string;
  link?: string;
};