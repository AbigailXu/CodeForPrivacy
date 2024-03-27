import { type Resource } from "@/types/types";

import Enzuzo from "../../public/images/tools/enzuzo_cover.png"
import BigID from "../../public/images/tools/bigid_cover.png"
import Onetrust from "../../public/images/tools/onetrust_cover.png"
import Securiti from "../../public/images/tools/securiti_cover.png"

export const RESOURCES: Resource[] = [

  {

    _id: "1",
    title: "Enzuzo",
    description:
      "Generate artificial datasets with the same characteristics as real data, so you can develop and test AI models without compromising privacy.",
    link: "https://www.enzuzo.com/",
    image: Enzuzo
  },
  {
    _id: "2",
    title: "BigID",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://bigid.com/",
    image: BigID
  },
  {
    _id: "3",
    title: "OneTrust",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.onetrust.com/",
    image: Onetrust
  },
  {
    _id: "4",
    title: "Securiti",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://securiti.ai/",
    image: Securiti
  },
  {
    _id: "5",
    title: "Resource 5",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.google.com",
    image: Onetrust
  },
];
