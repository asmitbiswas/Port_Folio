import Image from "next/image";
import NavBar from "./component/navbar";
import Link from "next/link";
import "./Style.css";

export default function Home() {
  return (
  <main
  style={{
    maxWidth:"900px",
    margin:"0 auto",
    fontFamily:"ui-sans-serif",
    // display:"flex"
  }}
  >

  <section className="hero">

    <p>Hi, I'm</p>

    <h1>Asmit Biswas</h1>

    <h2>Frontend Developer</h2>
      <img src="github-commit.svg" alt="Github contribution Graph"  className="GithubContributionGraph"/>
    <p>
      I enjoy building fast, modern, and responsive websites.
      Currently learning React, Next.js, and TypeScript while
      creating projects that help me become a better developer.
    </p>

    <div className="buttons">
      <button>View Projects</button>
      <button>Contact Me</button>
    </div>

  </section>

  <section className="about">

    <h2>About Me</h2>

    <p>
      I'm a self-taught developer who loves turning ideas into
      real projects. Most of my time goes into learning new
      technologies, solving bugs, and improving my coding skills.
    </p>

  </section>

  <section className="skills">

    <h2>Tech Stack</h2>

    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Next.js</li>
      <li>TypeScript</li>
      <li>Git & GitHub</li>
    </ul>

  </section>

  <section className="projects">

    <h2>Projects</h2>

    <article>
      <h3>DevVault</h3>

      <p>
        A documentation website where I organize everything
        I've learned about web development.
      </p>
    </article>

    <article>
      <h3>Dev Arc</h3>

      <p>
        A collection of experiments, UI components,
        and projects built while learning.
      </p>
    </article>

  </section>

  <section className="journey">

    <h2>My Journey</h2>

    <p>
      Every project teaches me something new.
      Whether it's fixing bugs, learning a framework,
      or improving my UI design, I'm always trying
      to become a better developer.
    </p>

  </section>

  <section className="contact">

    <h2>Let's Connect</h2>

    <p>
      Thanks for visiting my portfolio.
      Feel free to check out my projects
      or reach out if you'd like to connect.
    </p>

  </section>

</main>
  );
}
