import { StaticImageData } from "next/image";

export type Post = {
  _id: string;
  title: string;
  description?: string;
  image: StaticImageData;
  date?: string;
  fileCount?: number;
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
  date?: string;
  link?: string;
};