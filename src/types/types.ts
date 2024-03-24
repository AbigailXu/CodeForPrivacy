export type Post = {
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

export type Resource = {
  _id: string;
  title: string;
  description?: string;
  image?: string;
  date?: string;
  link?: string;
};