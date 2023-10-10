import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function AboutMe() {
  return (
    <div id="about-me" className="aboutMe-section">
      <h1 className="section-title">"About Me"</h1>
      <p className="details">
        I'm a web developer and designer based out of Delhi, India. I I love
        building apps that solve real-world problems, and that are delightful to
        use. My specialities include TypeScript, React JS, Tailwind CSS, and
        Styled Components.
      </p>
      <p className="details">
        My background is in teaching and marketing, and I have a bachelors
        degree in Computer Science from Manipur University, Don Bosco College.
      </p>

      <a
        href="https://github.com/Productivty/Resume/files/12850852/Pradeep.Thapa.Resume.pdf"
        download={"Pradeep Thapa Resume.pdf"}
      >
        <button className="resume-button">
          Resume{" "}
          <span>
            <FontAwesomeIcon icon={faDownload} />
          </span>
        </button>
      </a>
    </div>
  );
}

export default AboutMe;
