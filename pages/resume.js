import React from "react";
import { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Resume = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    //get data from api/resume route
    fetch("/api/resume")
      .then((res) => res.json())
      .then((data) => {
        //set data to state
        setResume(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div className="text-center">
        {!resume && (
          <div className="m-12">
             <h1>Loading...</h1>
          </div>
        )}
        
        {resume && (
          <>

            <div className="row p-8 border">
              <div className="col-md-12">
                <h1 className="text-3xl font-bold">{resume.basics.name}</h1>
                <p>
                  <p>{resume.basics.email}</p>
                </p>
              </div>
            </div>
            <div className="row p-6 border">
              <div className="col-md-12">
                <p>{resume.basics.summary}</p>
              </div>
            </div>

            <div className="row pt-6 border">
              <div className="col-md-12">
                <h2 className="text-xl font-semibold underline">Work Experience</h2>
                {resume.work.map((work, index) => (
                  <div key={index} className="p-4">
                    <h3 className="text-xl font-semibold">{work.company}</h3>
                    <p>{work.position}</p>
                    <p>
                      {work.startDate} - {work.endDate}
                    </p>
                    <p>{work.summary}</p>
                  </div>
                ))}
              </div>
            </div>
        
            <div className="row pt-6 border">
              <div className="col-md-12">
                <h2 className="text-xl font-semibold underline">Skills</h2>
                {resume.skills.map((skill, index) => (
                  <div key={index} className="p-4">
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                    <p className="font-semibold">{skill.level}</p>
                    {skill.keywords.map((keyword, index) => (
                      <p key={index}>{keyword}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="row pt-6 border">
              <div className="col-md-12">
                <h2 className="text-xl font-semibold underline">Volunteer Experience</h2>
                {resume.volunteer.map((volunteer, index) => (
                  <div key={index} className="p-4">
                    <h3 className="text-xl font-semibold">{volunteer.organization}</h3>
                    <p>{volunteer.position}</p>
                    <p>
                      {volunteer.startDate} - {volunteer.endDate}
                    </p>
                    <p>{volunteer.summary}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
