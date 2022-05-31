import React from 'react'
import { useState, useEffect } from 'react';



const Resume = () => {
  const [resume, setResume] = useState(null);

  useEffect(() => {
    //get data from api/resume route
    fetch('/api/resume')
      .then(res => res.json())
      .then(data => {
        //set data to state
        setResume(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      {resume && (
        <div className="row">
          <div className="col-md-12">
            <h1>{resume.basics.name}</h1>
                <p>
                  <a href={resume.basics.email}>{resume.basics.email}</a>
                </p>
            </div>
          </div>
      )}
    </div>
  )
}

export default Resume