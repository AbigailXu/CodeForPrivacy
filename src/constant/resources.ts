import { type Resource } from "@/types/types";

import Enzuzo from "../../public/images/tools/enzuzo_cover.png"
import BigID from "../../public/images/tools/bigid_cover.png"
import Onetrust from "../../public/images/tools/onetrust_cover.png"
import Securiti from "../../public/images/tools/securiti_cover.png"
import Incogni from "../../public/images/tools/incogni_cover.png"
import Collibra from "../../public/images/tools/collibra_cover.png"
import PrivacyBee from "../../public/images/tools/privacybee_cover.png"
import Drata from "../../public/images/tools/drata_cover.png"
import tools from "../../public/images/tools/tools.json"

export const RESOURCES: Resource[] = [

  {

    _id: "1",
    title: "Enzuzo",
    context:
      "Generate artificial datasets with the same characteristics as real data, so you can develop and test AI models without compromising privacy.",
    link: "https://www.enzuzo.com/",
    image: Enzuzo
  },
  {
    _id: "2",
    title: "BigID",
    context:"<html><body><p>BigID is a data discovery and intelligence platform that helps businesses discover and manage data across their entire enterprise. The tool specializes in data discovery and intelligence and offers great tools for assessing, classifying, and managing sensitive data sets, as well as automating data flow mapping. BigID accomplishes this through a series of tools, both out-of-the-box and configurable, that help companies make sense of their information.\
              The Data Privacy Management unit on the BigID platform provides you with your privacy program, which you can implement through privacy impact assessment (PIA) and data quality management. This mechanism enhances employee productivity by generating workflows to trigger automatically. You can automate your entire privacy program.\
              You can create a user portal that deals with all of the privacy policy management issues that members of the public could face when dealing with your business. These extend to consent policy management, including cookie consent records, and continue through to results, such as DSAR reports or data deletion confirmation. </p></body></html>",
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
    title: "Incogni",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://incogni.com/",
    image: Incogni
  },
  {
    _id: "6",
    title: "Collibra",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://www.collibra.com/",
    image: Collibra
  },
  {
    _id: "7",
    title: "PrivacyBee",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://privacybee.com/",
    image: PrivacyBee
  },
  {
    _id: "8",
    title: "Drata",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    link: "https://drata.com/",
    image: Drata
  }
];
