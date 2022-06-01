import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
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
      <div className="">
        {!resume && (
          <div className="m-12">
            <h1>Fetching data...</h1>
          </div>
        )}

        {resume && (
          <>
            <div className="hero bg-base-200 p-20">
              <div className="hero-content text-center">
                <div className="max-w-md">
                  <div className="avatar p-6">
                    <div className="w-24 rounded">
                      <Image
                        src={resume.basics.image}
                        alt="selfie"
                        layout="fill"
                        className="rounded rounded-full"
                      />
                    </div>
                  </div>
                  <h1 className="text-5xl font-bold">{resume.basics.name}</h1>

                  <h2 className="py-2">{resume.basics.email}</h2>
                  <p className="pt-4 font-semibold">{resume.basics.label}</p>
                  <p className="pt-4 text-left text-xs">{resume.basics.summary}</p>
                  <Link href="/contact">
                    <button className="btn btn-primary mt-6">Contact</button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-full items-center p-6">
              <div className="px-3 py-3 sm:px-6">
                <div className="mt-3 text-center">
                  <h3 className="text-lg leading-6 font-semibold text-gray-900">
                    Work Experience
                  </h3>
                </div>
              </div>
              <div className="md:flex">
                {resume.work.map((work, index) => (
                  <>
                    <div className="border border-gray-200 md:w-1/2 m-6 rounded-lg">
                      <dl>
                        <div className="bg-gray-50 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            Company
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {work.company}
                          </dd>
                        </div>
                        <div className="bg-white px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            position
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                            {work.position} <br />
                            {work.startDate} - {work.endDate}
                          </dd>
                        </div>
                        <div className="bg-gray-50 px-2 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            website
                          </dt>
                          <dd className="mt-1 text-sm text-primary sm:mt-0 sm:col-span-2">
                            <a
                              href={work.website}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {work.website}
                            </a>
                          </dd>
                        </div>

                        <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                          <dt className="text-sm font-medium text-gray-500">
                            About
                          </dt>
                          <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 text-left">
                            {work.summary}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </>
                ))}
              </div>
            </div>

            <div className="bg-base-200 shadow overflow-hidden sm:rounded-lg w-screen flex flex-col items-center">
              <div className="mt-3 text-center">
                <h3 className="text-lg leading-6 font-semibold text-gray-900">
                  Skills
                </h3>
              </div>

              <div className="stats shadow min-h-16 md:p-6 my-6 w-full md:mx-24 md:text-center">
                {resume.skills.map((skill, index) => (
                  <div className="stat" key={index}>
                    <div className="stat-title md:p-3 font-semibold md:text-lg">
                      {skill.name}
                    </div>
                    <ul className="list-disc text-xs md:px-6">
                      {skill.keywords.map((keyword, index) => (
                        <li key={index}>{keyword}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full border-opacity-50">
              <div className="m-6 text-center">
                <h3 className="text-lg leading-6 font-semibold text-gray-900">
                  Volunteer Experience
                </h3>
              </div>
              {resume.volunteer.map((volunteer, index) => (
                <>
                <div
                  className="grid card bg-base-200 rounded-box place-items-center p-12 mx-12"
                  key={index}
                >
                  <h3 className="font-semibold">
                    {volunteer.organization}
                  </h3>
                  <p>{volunteer.position}</p>
                  <p>
                    {volunteer.startDate} - {volunteer.endDate}
                  </p>
                  <p>{volunteer.summary}</p>
                </div>
                <div className="divider"></div>
                </>
              ))}

            
            </div>

            {/* <div className="row p-6 border">
              <div className="col-md-12">
                <h2 className="text-xl font-semibold underline">
                  Volunteer Experience
                </h2>
                {resume.volunteer.map((volunteer, index) => (
                  <div key={index} className="p-6">
                    <h3 className="text-xl font-semibold">
                      {volunteer.organization}
                    </h3>
                    <p>{volunteer.position}</p>
                    <p>
                      {volunteer.startDate} - {volunteer.endDate}
                    </p>
                    <p>{volunteer.summary}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
