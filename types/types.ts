import { type StaticImageData } from "next/image";

// a database/mondel entry
export type Entry = {
  _id: string;
  title: string;
  description?: string;
  image: string;
  date?: string;
  fileCount?: number;
};

export type Tag = {
  _id: string;
  title: string;
  iconType: string;
  iconName: string;
};
