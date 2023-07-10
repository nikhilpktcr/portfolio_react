import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <header>
        <h1>NIKHIL P K</h1>
        <h3>Technical Lead/Senior Software Engineer</h3>
      </header>

      <section className="about">
        <h2>About Me</h2>
        <p>With nearly 6 years of experience in web development, my expertise lies primarily in backend development. I possess practical knowledge in utilizing ExpressJS, NodeJS, JavaScript, SQL, and ORM-based database management. My passion revolves around creating scalable and top-notch applications that cater to the requirements of contemporary users. I constantly maintain an enthusiasm for acquiring new knowledge and staying updated with the latest technologies and methodologies in the web development realm. I strongly believe in the power of collaboration and teamwork to achieve exceptional outcomes. Moreover, I am dedicated to crafting user-friendly and efficient applications.</p>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <ul>
            <li>
                <h3>Neoito Technologies Pvt Ltd</h3>
                <p>Position: Technical Lead/Senior Software Engineer</p>
                <p>Duration: 2021 - Present</p>
            </li>
            <li>
                <h3>Simplogics Solutions Pvt Ltd</h3>
                <p>Position: Software Engineer</p>
                <p>Duration: 2017 - 2021</p>
            </li>
        </ul>
      </section>

      <section className="education">
        <h2>Education</h2>
        <ul>
          <li>
            <h3>Cochin University of Science and Technology</h3>
            <p>Degree: Bachelor of Technology in Computer Science</p>
            <p>Graduation Year: 2017</p>
          </li>
          <li>
            <h3>Board of Technical Education, Kerala</h3>
            <p>Diploma: Polytechnic Diploma in Computer Engineering</p>
            <p>Graduation Year: 2013</p>
          </li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Info</h2>
        <p>Email: nikhil.pk.connect@gmail.com</p>
        <p>Phone: +91-7012654803</p>
      </section>
    </div>
  );
}

export default Portfolio;
