import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Link from "next/link";

const about = () => {
  return (
    <div>
      <Header />
      <div className="">
        <div className="m-12">
          <h1 className="text-xl font-bold">About this resume</h1>
          <p className="pt-4">
            The purpose of this resume is to demonstrate the use of the{" "}
            <a
              href="
      https://jsonresume.org/
      "
              target="_blank"
              className="text-primary"
            >
              JSON Resume
            </a>{" "}
            format to create a resume file, build an API to serve it, and a
            layout to display it. <br />
            The resume is created using the{" "}
            <a
              href="
      https://jsonresume.org/schema
      "
              target="_blank"
              className="text-primary"
            >
              JSON Resume Schema
            </a>
            . <br />
            The data for this resume lives in a{" "}
            <a
              href="https://gist.github.com/adamcbowman/5e8846d20351f7d5ab004bc692b00262"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              GitHub gist file
            </a>
            .<br />
            Source code for this project is on{" "}
            <a
              href="https://github.com/adamcbowman/acb-next-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
            >
              my github.
            </a> <br />
            <br />
            Tech stack for this project is NextJs, TailwindCSS, DaisyUI library. The project is hosted on Vercel. <br />
            <br />
            Resume is also available on a prebuilt JSON resume template file at <a
            href="https://registry.jsonresume.org/adamcbowman"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
            >registry.jsonresume.org/adamcbowman</a>

          </p>
          <h2 className="text-xl font-bold mt-4" >API Information</h2>
          <p className="pt-4">
            
            <button className="m-2"><code><Link href="/api/resume">GET /api/resume</Link></code> </button>returns the JSON resume file. 
            
            <br />
            <button className="m-2"><code><Link href="/api/resume/skills">GET /api/resume/skills</Link></code></button> returns the skills section.{" "}
            <br />
            <button className="m-2"><code><Link href="/api/resume/info">GET to /api/resume/info</Link></code></button> returns the header section.{" "}
            <br />
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default about;
