import { kebabCase } from "@/utils/utils";
import { Experience } from "types";

const experiences: Experience[] = [
  {
    date: "2023 - Present",
    icon: "/static/timeline/np.png",
    title: "Ngee Ann Polytechnic",
    subtitle: ["Cybersecurity & Digital Forensics Student", "CSIT Diploma Scholar"],
    description: {"Clubs & CCAs:": ["Leo Club", "Overflow SIG", "NullSec SIG", "ICT Society", "The Christieara Programme (TCP)"], 
                    "Leadership Roles": ["Overflow Workgroup", "NullSec Intern EXCO"],
                    "Events:" : ["STANDC0N 2023 - Linux x86 Binary Exploitation Workshop", "YBN CTF - 8th Place (Team)", "MINDEF Sentinel Programme - CTI"]},
    contentStyle: {background: '#000F2E', color: 'white', border: '2px solid #192742'},
    tags: []
  },
  {
    date: "2019-2022",
    icon: "/static/timeline/fhss.png",
    title: "Fuhua Secondary School",
    subtitle: ["Student"],
    description: {"Clubs & CCAs:": ["Table Tennis"], 
                    "Leadership Roles": ["Welfare Head & Secretary (Table Tennis)", "Class Chair (2019)"],
                    "Competitions:": ["Honourable Mention, Singapore Mathematics Olympiad (Senior)", "Bronze, Singapore Junior Physics Olympiad (Team)", "Honourable Mention, Singapore Junior Physics Olympiad (Individual)"]},
    contentStyle: {background: '#000F2E', color: 'white', border: '2px solid #192742'},
    tags: [""]
  }
];

export const allTags = []

experiences.forEach((experience) => {
  experience.tags.forEach((tag) => !allTags.includes(tag) && allTags.push(tag))
});

export const allKebabTags = allTags.map(tag => (
  kebabCase(tag)
))

export default experiences;