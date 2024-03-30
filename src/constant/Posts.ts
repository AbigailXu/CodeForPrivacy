import { Post } from "@/types/types";

import PLACEHOLDER from "@/../public/images/placeholder-image.png"
import state_of_security_2023_resource_tile_amer from "@/../public/resources/state-of-security-2023-resource-tile-amer.jpg"
import PI__Privacy_featured from "@/../public/resources/PI_2019.11.15_Privacy_featured (1).jpg"
import Data_Privacy_2 from "@/../public/resources/Data Privacy (2).jpg"
import Data_Privacy_Featured from "@/../public/resources/PI_2023.10.18_data-privacy_featured.jpg"
import Data_Privacy_3 from "@/../public/resources/PI_2019.11.14_privacy_0-03.jpg"
import Network_Security from "@/../public/resources/network-security.jpg"
import Digital_knowledge from "@/../public/resources/PI_2023.08.17_digital-knowledge_featured-jpg.jpg"
import Data_Privacy_M2 from "@/../public/resources/Data-Privacy-M-2.jpg"
import Data_Breach from "@/../public/resources/Data-Breach-400x223.jpg"


export const POSTS: Post[] = [
  {
    _id: "1",
    title: "Insider's Responsibilities",
    description: "Difficult to defend against user malpractice",
    context: 
    ["<html><body><p>Defending against data privacy issues, including malpractices, abuse, and theft by insiders, presents a significant challenge. Insiders <br/>", 
    "are behind 95% of cybersecurity incidents. While organizations can impose limitations to mitigate risks from insiders, their visibility <br/>", 
    "and control over third-party violations are often restricted. Despite third-party access being crucial for business services, <br/>",
    "regulations like GDPR mandate businesses to ensure transparency in how third-parties handle data.</p><br/>",

    "<p>To overcome these challenges, adopt a data-centric and zero-trust strategy incorporating comprehensive controls and insights <br/>",
    "across all data processes and modifications. This includes: <br/>",
    "<ul><li>- Continuously evaluating third-party tools and API requests' interaction with sensitive data to assess trust.</li>",
    "<li>- Implementing security measures that dynamically apply policies and controls to data workloads.</li>",
    "<li>- Utilizing Data Loss Prevention (DLP) tools and encrypting sensitive data to minimize breach risks and misuse.</ul><br/>",
    
    "<h4>Understanding Insider Threats & Their Prevention</h4>",
    "<p>Discover everything about insider threats and safeguarding your business. What is Insider Threat Prevention? </p>",
    "<p>It involves proactive measures to protect company data from threats posed by individuals with internal access, focusing on data <br/>",
    "protection through threat detection and identification.</p><br/>",

    "<h4>Examples of Insider Threats</h4> ",
    "<p>These threats range from malicious to accidental actions leading to data loss, such as sending sensitive data to incorrect recipients, <br/>",
    " unprotected data sharing, or data theft for financial gain.</p><br/>",

    "<h4>Indicators of Insider Threats</h4>",
    "<p>Signs include unauthorized privilege escalation, actions beyond one’s role, abnormal data activities like excessive downloads, and a <br/>",
    "demeanor that’s anxious or aloof.</p><br/>",

    "<h4>Preventing Insider Threats</h4>",
    "<p>This can be achieved through a strategy focused on early identification and detection, employing tools for monitoring activities and <br/>",
    "tracking user behaviors on systems.</p><br/>",
    
    "<h4>Top Tools for Detecting Insider Threats</h4>",
    "<p>Effective tools offer insights into user behavior, with analytics on user and entity behaviors, and monitoring of user activities and <br/>",
    "endpoints, being pivotal for detecting insider threats.</p></body></html>"],
    image: state_of_security_2023_resource_tile_amer,
    authors: "Muhammad Raza",
    reference: "https://www.splunk.com/en_us/blog/learn/data-privacy.html?utm_campaign=google_amer_en_search_generic_dynamic_audienceonly&utm_source=google&utm_medium=cpc&utm_content=dynamic_search&utm_term=&_bk=&_bt=641457582634&_bm=&_bn=g&_bg=144996249552&device=c&gad_source=1&gclid=CjwKCAjw5ImwBhBtEiwAFHDZx92ei6yulg6yWv3bCX0xGd7B85BHBWXa72yh9urqYcpUQR1BA7b3ZhoCFj4QAvD_BwE",
    question: "What percent of all cybersecurity incidents are caused by insiders?",
    options: [
      "35%",
      "55%",
      "75%",
      "95%"
    ],
    answer: "95%",
    date: "2023/01/33",
  },
  {
    _id: "2",
    title: "Americans' Concern Over Online Privacy",
    description: "The role of technology companies, AI and regulation – plus personal experiences with data breaches, passwords, cybersecurity and privacy policies",
    context: 
    ["<html><body><p>In today's digital age, every action online—from clicking to typing—generates data, leaving North Americans feeling uneasy and uncertain about the control and use of their personal information. This concern extends to government data collection, showing an increase in apprehension according to a recent Pew Research Center survey conducted from May 15-21, 2023.</p>",
    "<p>The sentiment towards data usage by companies and the government remains predominantly wary among North Americans, with noticeable shifts over the years:</p>",
    "<ul><li>A growing number of individuals feel in the dark about companies' data practices, with 67% admitting to understanding little or nothing about these practices, a rise from 59%.</li>",
    "<li>A majority believe their control over how their data is used by both companies and the government is minimal to nonexistent. Despite a slight decrease in these sentiments compared to 2019, a significant majority still feel this way, with 73% concerned about companies and 79% about government data handling.</li>",
    "</ul></body></html>"],
    image: PI__Privacy_featured,
    authors: "COLLEEN MCCLAIN, MICHELLE FAVERIO, MONICA ANDERSON AND EUGENIE PARK",
    reference: "https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/",
    question: "What percentage of Americans don't understand what companies are doing with their personal data?",
    options: [
      "57%",
      "67%",
      "47%",
      "37%"
    ],
    answer: "67%",
    date: "2023/01/33",
  },
  {
    _id: "3",
    title: "How Americans View Data Privacy I",
    description: "Role of social media, tech companies and government regulation",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Data_Privacy_2,
    authors: "Colleen McClain, Michelle Faverio, Monica Anderson and Eugenie Park",
    reference: "https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/",
    question: "What percentage of Americans say there should be more regulation than there is now?",
    options: [
      "52%",
      "72%",
      "82%",
      "92%"
    ],
    answer: "72%",
    date: "2023/01/33",
  },
  {
    _id: "4",
    title: "How Americans View Data Privacy II",
    description: "North Americans’ day-to-day experiences with online privacy",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Data_Privacy_Featured,
    authors: "Colleen McClain, Michelle Faverio, Monica Anderson and Eugenie Park",
    reference: "https://www.pewresearch.org/internet/2023/10/18/how-americans-view-data-privacy/",
    question: "Which of the following passwords is the most secure?",
    options: [
      "SportsFan1983",
      "7abc12.6.48",
      "1234567890",
      "WTh!58iLf2?9zD"
    ],
    answer: "WTh!58iLf2?9zD",
    date: "2023/01/33",
  },
  {
    _id: "5",
    title: "Reading Privacy Policies",
    description: "Exploring North Americans' habits regarding privacy policies and terms of service.",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Data_Privacy_3,
    authors: "Brooke Auxier, Lee Rainie, Monica Anderson, Andrew Perrin, Madhu Kumar and Erica Turner",
    reference: "https://www.pewresearch.org/internet/2019/11/15/americans-and-privacy-concerned-confused-and-feeling-lack-of-control-over-their-personal-information/",
    question: "How many Americans always or often read a company's privacy policy before agreeing to it?",
    options: [
      "9%",
      "22%",
      "36%",
      "49%"
    ],
    answer: "22%",
    date: "2023/01/33",
  },
  {
    _id: "6",
    title: "Confidence in Company Cybersecurity",
    description: "The confidence levels among IT leaders in their organizations' cybersecurity postures.",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Network_Security,
    authors: "Cheryl Scholz and Jim Capalbo",
    reference: "https://solutions.insight.com/78-Lack-Confidence-in-Company-Cybersecurity",
    question: "What percentage of senior IT and IT security leaders are confident in their organization’s cybersecurity posture?",
    options: [
      "82%",
      "22%",
      "72%",
      "42%"
    ],
    answer: "22%",
    date: "2023/01/33",
  },
  {_id: "7",
    title: "What Our Society Knows About AI, Cybersecurity and Big Tech",
    description: "Most adults can correctly identify a secure password. Far fewer can recognize an example of two-factor authentication",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Digital_knowledge,
    authors: "Olivia Sidoti and Emily A. Vogels",
    reference: "https://www.pewresearch.org/internet/2023/08/17/what-americans-know-about-ai-cybersecurity-and-big-tech/",
    question: "What is a “deepfake”?",
    options: [
      "A seemingly real, computer-generated image, video or audio of something that did not occur",
      "A text-based chatbot that tricks people into thinking that they are talking to another person",
      "A system that records and protects information online",
      "A program that makes it look like people are using the internet from a different location"
    ],
    answer: "A seemingly real, computer-generated image, video or audio of something that did not occur",
    date: "2023/01/33",
  },
  {_id: "8",
    title: "Frequency of Hacker Attacks",
    description: "Understanding the relentless frequency of hacker attacks in the digital age.",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Data_Privacy_M2,
    authors: "",
    reference: "https://www.titanfile.com/blog/7-data-privacy-statistics-that-may-surprise-you/",
    question: "How often do hackers attack, on average?",
    options: [
      "Every 29 seconds",
      "Every 39 seconds",
      "Every 49 seconds",
      "Every 59 seconds"
    ],
    answer: "Every 39 seconds",
    date: "2023/01/33",
  },
  {_id: "9",
    title: "Time Taken to Detect A Data Breach",
    description: "Understanding the the time taken to detect a data breach compared to the time for a hack",
    context: 
    ["<html><body><p> </p></body></html>"],
    image: Data_Breach,
    authors: "",
    reference: "https://www.titanfile.com/blog/7-data-privacy-statistics-that-may-surprise-you/",
    question: "How long does it take to detect a data breach, on average?",
    options: [
      "Every 60 seconds",
      "Every 30 minutes",
      "Every 15 hours",
      "Every 200 days"
    ],
    answer: "Every 200 days",
    date: "2023/01/33",
  }
];
