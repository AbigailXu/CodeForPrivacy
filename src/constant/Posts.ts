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
    ["<html><body><p>Defending against data privacy issues, including malpractices, abuse, and theft by insiders, presents a significant challenge. Insiders", 
    "are behind 95% of cybersecurity incidents. While organizations can impose limitations to mitigate risks from insiders, their visibility", 
    "and control over third-party violations are often restricted. Despite third-party access being crucial for business services,",
    "regulations like GDPR mandate businesses to ensure transparency in how third-parties handle data.</p><br/>",

    "<p>To overcome these challenges, adopt a data-centric and zero-trust strategy incorporating comprehensive controls and insights",
    "across all data processes and modifications. This includes: <br/>",
    "<ul><li>- Continuously evaluating third-party tools and API requests' interaction with sensitive data to assess trust.</li>",
    "<li>- Implementing security measures that dynamically apply policies and controls to data workloads.</li>",
    "<li>- Utilizing Data Loss Prevention (DLP) tools and encrypting sensitive data to minimize breach risks and misuse.</ul><br/>",
    
    "<h4>Understanding Insider Threats & Their Prevention</h4>",
    "<p>Discover everything about insider threats and safeguarding your business. What is Insider Threat Prevention? </p>",
    "<p>It involves proactive measures to protect company data from threats posed by individuals with internal access, focusing on data",
    "protection through threat detection and identification.</p><br/>",

    "<h4>Examples of Insider Threats</h4> ",
    "<p>These threats range from malicious to accidental actions leading to data loss, such as sending sensitive data to incorrect recipients,",
    " unprotected data sharing, or data theft for financial gain.</p><br/>",

    "<h4>Indicators of Insider Threats</h4>",
    "<p>Signs include unauthorized privilege escalation, actions beyond one’s role, abnormal data activities like excessive downloads, and a",
    "demeanor that’s anxious or aloof.</p><br/>",

    "<h4>Preventing Insider Threats</h4>",
    "<p>This can be achieved through a strategy focused on early identification and detection, employing tools for monitoring activities and",
    "tracking user behaviors on systems.</p><br/>",
    
    "<h4>Top Tools for Detecting Insider Threats</h4>",
    "<p>Effective tools offer insights into user behavior, with analytics on user and entity behaviors, and monitoring of user activities and",
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
    ["<html><body><p>North Americans have little faith that social media executives will handle user privacy responsibly.</p></br>",
    "<p>Some 77% of North Americans trust little or not at all that leaders of social media companies will admit mistakes and take responsibility for data misuse.</p>",
    "<p>Their outlook on the government's ability to regulate these tech leaders is similarly bleak: 71% have little to no trust in governmental accountability for these companies' data missteps.</p></br>",
    "<h4>Artificial Intelligence (AI)</h4>",
    "<p>Distrust and concern mark North Americans' views on AI, especially regarding data privacy. </p>",
    "<p>With AI introducing new uses for data, apprehension is widespread. Among those aware of AI, 70% trust companies little or not at all to make responsible decisions with AI in their products.</p></br>",
    "<p>Furthermore, approximately eight out of ten people familiar with AI believe its application by companies will lead to uncomfortable or unintended uses of personal information (81% and 80%, respectively).</p></br>",
    "<p>Yet, a positive note emerges as 62% of North Americans acquainted with AI believe its use by companies will simplify life.</p></br>",
    "<h4>Children’s Online Privacy</h4>",
    "<p>North Americans are concerned about children's online privacy, expecting parents to primarily safeguard it. About 89% express concern over social media platforms accessing personal information about children. Many also worry about advertisers and online games or apps exploiting children's data. While 85% believe parents are primarily responsible for protecting children's online privacy, 59% assign significant responsibility to tech companies, and 46% to the government.</p></br>",
    "<h4>Government Regulation</h4>",
    "<p>Broad, bipartisan support exists for increased regulation of data handling by companies. Around 72% of North Americans advocate for more regulatory measures than currently in place, with only 7% favoring less. This call for more regulation spans political divides, with 78% of Democrats and 68% of Republicans in agreement.</p></body></html>"
  ],
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
    ["<html><body><p>North Americans' everyday experiences highlight the challenges of maintaining privacy, amid significant concern. Many feel overwhelmed by the options provided by tech companies, are skeptical about the effectiveness of these options, or sometimes neglect to take protective measures.</p></br>",
    "<h4>Feelings about Managing Online Privacy</h4>",
    "<p>North Americans' feelings about managing their online privacy vary widely, from confidence to feeling overwhelmed. A majority (78%) trust themselves to make the right decisions regarding their personal information.</p></br>",
    "<p>However, many are skeptical that their actions will significantly impact their privacy, and only about one in five believe their information will be handled responsibly by those who possess it.</p></br>",
    "<h4>Approach to Privacy Policies</h4>",
    "<p>Privacy policies offer users the chance to understand and consent to how their data is used. Yet, their complexity and length can deter their effectiveness, leaving consumers feeling they have no real choice.</p></br>",
    "<p>Our findings show that a majority of North Americans (56%) often agree to privacy policies without reading them. Furthermore, 61% believe these policies do not effectively explain data usage, and 69% see them as merely a hurdle.</p></br>",
    "<h4>Password Overload</h4>",
    "<p>With the need to remember numerous passwords for various services, many North Americans feel overwhelmed (69%) and anxious about their passwords' security (45%). Despite these concerns, only half prioritize more secure, albeit harder to remember, passwords.</p></br>",
    "<h4>Password Management Strategies</h4>",
    "<p>North Americans employ various strategies for password management, including writing them down (41%) and saving them in browsers (34%). Usage of password managers has increased from 20% in 2019 to 32% today, especially among younger adults.</p></br>",
    "<h4>Smartphone Security</h4>",
    "<p>Risky privacy practices persist, with 16% of smartphone users not using any security feature to unlock their phones, a habit more common among older users.</p></br>",
    "<h4>Data Breaches and Security Incidents</h4>",
    "<p>The digital environment also poses real risks, with 26% of North Americans experiencing fraudulent charges and other security breaches in the past year, underscoring the tangible dangers of data misuse.</p></body></html>"],
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
    ["<html><body><p>There's a prevailing belief among North Americans that data security has become more elusive now compared to the past. When queried on whether their personal data feels less secure, the same, or more secure than five years ago, a significant 70% perceive their data as less secure, while a mere 6% view it as more secure.</p></br>",
      "<p>Despite widespread concerns about digital privacy, many North Americans admit to a lack of diligence in scrutinizing the privacy policies and terms of service they frequently encounter. A staggering 97% acknowledge being prompted to approve privacy policies, yet only about one in five consistently reads a company’s privacy policy thoroughly before consenting. Specifically, 9% always and 13% often review these policies, 38% sometimes do, and 36% never read them before consenting.</p></br>",
      "<p>Additionally, reading privacy policies doesn't always imply a comprehensive review. Among those who review privacy policies, only 22% read them entirely before accepting the terms and conditions.</p></br>",
      "<p>A general misunderstanding about data privacy laws also persists: 63% of North Americans confess to having little or no knowledge about the existing laws and regulations protecting their data privacy.</p></br>",
      "<p>These insights reveal a deep-seated caution regarding privacy today, though in certain situations, the public recognizes the benefits of a data-driven environment. For instance, there's a notable acceptance for scenarios like underperforming schools sharing student data with nonprofits aiming to enhance educational outcomes, or the government collecting data on citizens to identify potential terrorist threats.</p></body></html>"
    ],
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
    ["<html><body><p>A substantial majority of senior IT and IT security leaders, nearly 80%, are convinced their organizations are not adequately protected against cyberattacks, despite increased investments in IT security in 2020 aimed at addressing challenges posed by distributed IT and remote work, as revealed by a new IDG Research Services survey commissioned by Insight Enterprises (NASDAQ:NSIT), a global provider of Insight Intelligent Technology Solutions™ for organizations of all sizes.</p></br>",
      "<p>This significant concern regarding their ability to counter cyberthreats amidst today's complex IT landscape has led 91% of organizations to boost their cybersecurity budgets for 2021, nearly aligning with the 96% that escalated their IT security expenditures in 2020, as indicated by the survey conducted by Insight’s Cloud + Data Center Transformation team.</p></br>",
      "<p>The study, titled “Cybersecurity at a Crossroads: The Insight 2021 Report,” explored the consequences of the distributed IT framework and the shift to a remote workforce due to the pandemic on IT security. This included examining changes in modernization priorities, initiatives pursued in 2020, and key challenges in enhancing cybersecurity defenses. The survey featured responses from over 200 C-level IT and IT security executives from organizations averaging 21,300 employees, spanning various industries.</p></br>",
      "<p>Overall, the survey unveiled that 78% of respondents are doubtful of their company's IT security measures, pointing out the need for enhancements. The least confidence was in their organization’s security roadmap (32%), technology and tools related to security (30%), and internal teams and skill sets (27%). Conversely, the highest level of trust was placed in their company’s data management strategy, yet less than half (45%) felt assured about this facet of their security operations. </p></body></html>"
    ],
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
    ["<html><body><p>Digital literacy is increasingly recognized as a crucial skill, yet North Americans' understanding of digital topics significantly varies by subject. For instance, most U.S. adults are familiar with the function of website cookies and can identify a secure password, but far fewer can recognize two-factor authentication, a key cybersecurity measure enhancing online account security.</p></br>",
      "<p>Moreover, a larger proportion of individuals are aware that Elon Musk managed Tesla and Twitter (recently renamed X in July 2023, after the survey) in April 2023 than understand the technology underpinning ChatGPT. In a Pew Research Center survey conducted among 5,101 U.S. adults from May 15 to May 21, 2023, participants correctly answered a median of five out of nine questions on a range of topics, including cybersecurity, technology companies, artificial intelligence, and federal online privacy laws.</p></br>",
      "<p>Only 26% of U.S. adults could accurately answer at least seven out of the nine questions, and a mere 4% answered all correctly. Consistent with past surveys, digital knowledge varies by age and educational level.</p></br>",
      "<h4>Digital Knowledge Variation by Topic:</h4></br>",
      "<li>Cybersecurity: 87% correctly chose the most secure password from four options, 67% understand cookies' tracking function, and 48% can identify two-factor authentication.</li>",
      "<li>Major Technology Companies: 80% were aware of Elon Musk's leadership roles, and 77% knew Facebook's rebranding to Meta.</li>",
      "<li>Artificial Intelligence: 42% recognize a deepfake, and 32% understand large language models like ChatGPT generate responses based on learned word patterns.</li>",
      "<li>Federal Privacy Laws: 23% are aware the U.S. lacks a unified national privacy law, and 21% know the prohibition against collecting data from minors under 13 without consent.</li></br>",
      "<p>Despite these insights, a notable portion of Americans admit to uncertainty about AI operations and privacy laws, reflecting widespread ambiguity on these subjects.</p></body></html>"
    ],
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
    ["<html><body><p>By the time you finish reading this paragraph, another cyber attack will have occurred, and another one will have begun, illustrating the relentless cycle of digital threats. A study by the University of Maryland in 2016—note that it's now 2024—found that on average, every 39 seconds, a hacker attempts to breach someone's data online. Although this statistic might seem outdated, cybercrime has soared by 600% since the onset of COVID-19, suggesting that the frequency of attacks is likely even higher today.</p></br>",
    "<p>Protecting yourself from cyber attackers involves securing your data through straightforward steps. Installing antivirus software, password-protecting your information, and using a VPN to safeguard your network are effective measures to keep your data safe.</p></br>",
    "<p>The importance of protecting customers' personal information has never been greater, especially with the rise of hybrid and remote work leading to more consistent online sharing of personally identifiable information (PII). Hackers are seizing the opportunity to target unprotected data.</p></br>",
    "<p>When clients choose to do business with you, they trust that their information will be kept secure, especially if it's used for personal identification or business operations. Safeguarding customer data is crucial for building customer relationships and preserving your business's reputation. A single breach can have detrimental effects.</p></br>",
    "<p>Here are 5 strategies to protect customer data effectively:</p>",
    "<li>Eliminate Unused Data: Delete files no longer needed and overwrite them with file-shredding software. An automatic deletion system for expired files enhances data protection.</li>",
    "<li>Comply with Data Protection Laws: Adhere to regional regulations like PIPEDA in Canada, HIPAA in the US, and GDPR in the EU. Keeping abreast of these laws ensures the highest protection level for your clients.</li>",
    "<li>Secure Your Devices: Limit public wifi use and utilize VPNs to create secure networks on your mobile devices, making it harder for hackers to access your data.</li>",
    "<li>Update Your Software: Regular updates are crucial for security, introducing bug fixes and enhancements to protect against cyber threats.</li>",
    "<li>Limit Data Access: Restrict data access within your organization to minimize the risk of internal breaches. Use passwords and two-factor authentication to secure data.</li></br>",
    "<h4>Key Takeaways:</h4>",
    "<li>Disposing of redundant data and updating systems are simple yet effective measures to protect against data breaches.</li>",
    "<li>Understanding applicable laws ensures compliance and customer data protection.</li>",
    "<li>Limiting data access within your team reduces potential vulnerabilities.</li></p></body></html>"],
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
    ["<html><body><p>An IBM study across 17 industries revealed that the average time to detect a data breach is 197 days, allowing hackers ample time to analyze and sell compromised data on the dark web. Alarmingly, 42% of North Americans never receive notification from companies when their information is compromised, exacerbating the challenge of resolving data breaches.</p></br>",
      "<p>Fortunately, businesses can adopt several strategies to identify breaches more swiftly. Investing in governance, risk management, and compliance (GRC) and employing cybersecurity analysts for regular security monitoring are critical steps. Implementing cybersecurity best practices is essential.</p></br>",
      "<h4>21 Cybersecurity Tips and Best Practices for Businesses</h4>",
      "<p>Cybercrime, a rapidly growing threat, necessitates awareness and adoption of current cybersecurity tips and practices to prevent breaches. Despite challenges in staying ahead of cybercriminals constantly seeking new vulnerabilities, adhering to these cybersecurity tips can significantly enhance your defense:<p>",
      "<li>Update Software Regularly: Updates address new features, bug fixes, and security enhancements.</li>",
      "<li>Beware of Suspicious Emails: Avoid opening them to prevent phishing scams.</li>",
      "<li>Update Hardware: Support the latest security software by using current hardware.</li>",
      "<li>Encrypt Data with Secure File-Sharing Solutions: Use these instead of regular email for sensitive information.</li>",
      "<li>Install Anti-virus and Anti-malware Software: These are essential for reducing vulnerability online.</li>",
      "<li>Use VPNs for Secure Connections: VPNs encrypt your internet connection, protecting your data even on public networks.</li>",
      "<li>Verify Links Before Clicking: Hover over links to check their destinations and avoid disguised harmful links.</li>",
      "<li>Create Strong Passwords: Use tools to assess password security and improve them.</li>",
      "<li>Turn Off Bluetooth When Not in Use: Prevent hacking through Bluetooth by keeping it disabled.</li>",
      "<li>Enable 2-Factor Authentication: This adds a layer of security for account access.</li>",
      "<li>Eliminate Adware: Use tools to remove adware and unwanted programs.</li>",
      "<li>Ensure HTTPS on Websites: Verify the security of websites before sharing personal information.</li>",
      "<li>Securely Store Important Information: Choose storage options that prevent unauthorized access.</li>",
      "<li>Scan External Devices for Malware: Always check external storage for viruses before use.</li>",
      "<li>Avoid Public Networks: Public networks are insecure; use a VPN if necessary.</li>",
      "<li>Reject the 'Secure Enough' Mentality: Continuous improvement in security is essential as no system is ever completely secure.</li>",
      "<li>Invest in Security Upgrades: Prioritize security investments to mitigate breach risks.</li>",
      "<li>Back Up Data: Regularly back up critical data to recover from potential breaches.</li>",
      "<li>Train Employees on Security Practices: Educate employees to ensure they uphold security measures.</li>",
      "<li>Use HTTPS for Your Website: Secure your website with SSL certificates to encrypt data traffic.</li>",
      "<li>Hire a 'White Hat' Hacker: Employ ethical hackers to uncover and address security vulnerabilities.</li></ol></br>",
      "<p>By implementing these practices, businesses can bolster their defenses against cyber threats and protect sensitive customer information effectively.</p></body></html>"
    ],
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
