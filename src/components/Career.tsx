import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Developer</h4>
                <h5>Expert System Solution</h5>
              </div>
              <h3>2023 — NOW</h3>
            </div>
            <p>
              Building modern interfaces and scalable web applications with
              JavaScript, TypeScript, React.js, and Next.js. I also contribute
              to RESTful APIs, AI automation, and collaborative Git workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>MERN Stack Developer</h4>
                <h5>Logixtec</h5>
              </div>
              <h3>2022 — 2023</h3>
            </div>
            <p>
              Delivered responsive React interfaces and dynamic web
              applications, using Redux and Zustand for state management and
              Bootstrap and Tailwind for cross-device experiences.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor&apos;s Degree in Computer Science</h4>
                <h5>The Islamia University of Bahawalpur</h5>
              </div>
              <h3>2019 — 2023</h3>
            </div>
            <p>
              Built a strong foundation in software engineering while
              developing practical experience across frontend technologies,
              backend services, and collaborative product delivery.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
