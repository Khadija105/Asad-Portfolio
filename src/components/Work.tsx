import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface Project {
  name: string;
  category: string;
  tools: string;
  image: string;
  description?: string;
  link?: string;
}

const projects: Project[] = [
  {
    name: "Immersive Fox",
    category: "AI video learning platform",
    description:
      "An AI platform built with Next.js, React, Python, Django, and AWS that turns PDFs into video courses in 57+ languages. I have worked on its frontend UI, reusable components, and LLM integrations for AI automation for over two years and continue to contribute to it.",
    tools: "Next.js, React, Python, Django, AWS, LLM integrations",
    image: "/images/immersive-fox.png",
    link: "https://immersive-fox.com",
  },
  {
    name: "ReadyHubb",
    category: "Beauty and services platform",
    description:
      "A platform for beauty and service professionals to manage bookings, clients, payments, scheduling, and business growth. I contributed to its Next.js frontend and SSR components for almost one year.",
    tools: "Next.js, SSR, React, TypeScript",
    image: "/images/readyhubb.png",
    link: "https://pro.readyhubb.com/",
  },
  {
    name: "Instantly AI",
    category: "Cold email SaaS platform",
    description:
      "A sales engagement and lead intelligence platform that helps teams find perfect leads, create AI Sales Agents, and automate outreach and sales. I worked on its frontend for six months.",
    tools: "React, JavaScript, AI Sales Agents, outreach automation",
    image: "/images/instantly.png",
    link: "https://instantly.ai/",
  },
  {
    name: "CrewBloom",
    category: "Remote staffing platform",
    description:
      "A remote staffing platform that connects U.S. MSMEs with top-tier Filipino professionals, making outsourcing more affordable, efficient, and profitable. I contributed to its frontend for one year.",
    tools: "React, JavaScript, responsive UI, staffing platform",
    image: "/images/crewbloom.png",
    link: "https://crewbloom.com/",
  },
  {
    name: "AuditOne",
    category: "Web3 & AI cybersecurity",
    tools: "React, TypeScript, Material UI",
    image: "/images/typescript.webp",
  },
  {
    name: "CleanTasker",
    category: "Cleaning services platform",
    tools: "React, Tailwind CSS, REST APIs",
    image: "/images/node.webp",
  },
  {
    name: "EA Foods",
    category: "Food industry platform",
    tools: "React, admin panels, UI development",
    image: "/images/express.webp",
  },
  {
    name: "Sendexa Docs",
    category: "Developer documentation",
    tools: "React, JavaScript, documentation UI",
    image: "/images/placeholder.webp",
  },
];

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                {project.description && <p>{project.description}</p>}
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={`${project.name} project`}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
