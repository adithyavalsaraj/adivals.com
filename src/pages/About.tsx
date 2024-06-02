import React from "react";

const About: React.FC = () => {
  return (
    <div className="about">
      <h2>About Me</h2>
      <div className="section">
        <p>
          Hello! My name is Adithya Valsaraj, and I'm delighted to welcome you
          to my portfolio. I am a{" "}
          <span className="highlight">Senior UI/UX Developer</span> with over
          eight years of experience in the tech industry. My career has been a
          dynamic journey filled with innovative projects, continuous learning,
          and a dedication to creating exceptional user experiences.
        </p>
      </div>
      <div className="section">
        <h3>My Professional Journey</h3>
        <p>
          With a background in both user interface and user experience design, I
          have had the privilege of working on a wide range of projects, from
          small startups to large enterprises. My expertise lies in
          understanding user needs and translating them into intuitive,
          beautiful, and functional designs.
        </p>
        <p>Here are some key highlights of my professional journey:</p>
        <ul>
          <li>
            <span className="highlight">Expertise</span>: Proficient in HTML,
            CSS, JavaScript, React, and various UX/UI design tools such as
            Figma, Sketch, and Adobe XD.
          </li>
          <li>
            <span className="highlight">Projects</span>: Successfully led the
            design and implementation of numerous web and mobile applications,
            ensuring they meet both user and business goals.
          </li>
          <li>
            <span className="highlight">Collaboration</span>: Worked closely
            with cross-functional teams, including developers, product managers,
            and stakeholders, to deliver seamless user experiences.
          </li>
          <li>
            <span className="highlight">Innovation</span>: Always on the lookout
            for new technologies and design trends to incorporate into my work,
            ensuring that my designs are modern and forward-thinking.
          </li>
        </ul>
      </div>
      <div className="section">
        <h3>My Interests</h3>
        <div className="interests">
          <div>
            <p>
              <span className="highlight">Technology</span>: My fascination with
              technology extends beyond my work. I love exploring new gadgets,
              staying updated with the latest tech trends, and understanding how
              emerging technologies can be integrated into everyday life.
            </p>
          </div>
          <div>
            <p>
              <span className="highlight">Music</span>: Music is a significant
              part of my life. Whether I’m listening to my favorite tunes or
              playing an instrument, it serves as a great source of inspiration
              and relaxation.
            </p>
          </div>
          <div>
            <p>
              <span className="highlight">Biking</span>: Biking is another
              passion of mine. It allows me to explore new places, experience
              the thrill of adventure, and maintain a healthy lifestyle. There's
              nothing quite like the freedom of the open road and the joy of
              discovering new trails.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h3>My Philosophy</h3>
        <p>
          I believe that design is not just about making things look good, but
          about creating experiences that make people's lives easier and more
          enjoyable. This philosophy guides my approach to every project I
          undertake, ensuring that the end product is both aesthetically
          pleasing and highly functional.
        </p>
      </div>
      <div className="section">
        <h3>Let's Connect</h3>
        <p>
          I'm always excited to connect with like-minded individuals, potential
          collaborators, and anyone who shares a passion for design and
          technology. Feel free to explore my portfolio, check out my projects,
          and get in touch if you’d like to discuss potential collaborations or
          just chat about the latest in tech and design.
        </p>
        <p>
          Thank you for visiting, and I hope you enjoy exploring my work as much
          as I enjoyed creating it.
        </p>
      </div>
    </div>
  );
};

export default About;
