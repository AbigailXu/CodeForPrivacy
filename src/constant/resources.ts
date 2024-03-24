import { type Resource } from "@/types/types";

const gretelAi = "@/../public/images/gretel.ai.png"
const PLACEHOLDER = "@/../public/images/placeholder-image.png"

export const RESOURCES: Resource[] = [
  {
    _id: "1",
    title: "gretel.ai",
    description:
      "Generate artificial datasets with the same characteristics as real data, so you can develop and test AI models without compromising privacy.",
    link: "https://www.google.com",
    image: gretelAi
  },
  {
    _id: "2",
    title: "Resource 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.google.com",
    image: PLACEHOLDER
  },
  {
    _id: "3",
    title: "Resource 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.google.com",
    image: PLACEHOLDER
  },
  {
    _id: "4",
    title: "Resource 4",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.google.com",
    image: PLACEHOLDER
  },
  {
    _id: "5",
    title: "Resource 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.google.com",
    image: PLACEHOLDER
  },
];
