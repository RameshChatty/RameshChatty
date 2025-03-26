import React from "react";
import { MdArrowRightAlt } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap top-2 pt-10">
        <h1 className="pl-30 text-3xl ">About Me</h1>
      </div>
      <div className="flex flex-wrap pt-10  justify-center">
        <div className="w-300">
          <ul className="list-disc list-inside">
            <li>
              10+ years of IT experience in development, Implementation of Web
              applications with emphasis on Object Oriented Programming
              concepts.
            </li>
            <li>
              Technical expertise in using J2EE Technologies –Spring, Hibernate,
              Java, JDBC, Struts 1.x, High charts and Web services (Restful).
            </li>
            <li>
              Good Knowledge in Spring Rest, Struts and RDBMS (Oracle,
              PostgreSQL, MS-Sql server).
            </li>
            <li>Experienced in MVC design pattern</li>
            <li>Exposure to Agile software development.</li>
            <li>Worked with web servers Apache Tomcat Web Server. </li>
            <li>
              Possess strong problem analysis skills with ability to follow
              project standards.
            </li>
            <li>
              Effectively communicate with all team members and with the
              management team.
            </li>
            <li>
              Ability to work in-group as well as independently with minimal
              Supervision.
            </li>
            <li>
              Ability to organize, motivate others through leadership and a
              positive outlook.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
