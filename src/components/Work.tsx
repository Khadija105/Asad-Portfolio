import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  {
    name: "Immersive Fox",
    category: "AI video learning platform",
    tools: "Next.js, React, Python, Django, AWS, LLM integrations",
    image: "/images/next2.webp",
  },
  {
    name: "ReadyHubb",
    category: "Staffing platform",
    tools: "Next.js, SSR, React, TypeScript",
    image: "/images/react2.webp",
  },
  {
    name: "Instantly AI",
    category: "Cold email SaaS",
    tools: "React, JavaScript, REST APIs",
    image: "/images/javascript.webp",
  },
  {
    name: "CrewBloom",
    category: "Remote staffing platform",
    tools: "React, JavaScript, responsive UI",
    image: "/images/next.webp",
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
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={`${project.name} project`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
