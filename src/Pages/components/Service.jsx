import React from "react";

const Service = () => {
  let technologies = {
    backend: [
      {
        name: "Java",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/java.png",
      },
      {
        name: "Spring",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring.png",
      },
      {
        name: "SpringBoot",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/spring_boot.png",
      },
      {
        name: "Maven",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/maven.png",
      },
      {
        name: "Hibernate",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/hibernate.png",
      },
      {
        name: "Struts",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/struts.png",
      },
      {
        name: "JUnit",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/junit.png",
      },
      {
        name: "mocikto",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mocikto.png",
      },
      {
        name: "Lombok",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/lombok.png",
      },
      {
        name: "Tomcat",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tomcat.png",
      },
    ],
    db: [
      {
        name: "PostgreSQL",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postgresql.png",
      },
      {
        name: "Oracle",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/oracle.png",
      },
      {
        name: "MySQL",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mysql.png",
      },
      {
        name: "MSSQL",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/mssql.png",
      },
    ],
    OS: [
      {
        name: "Windows",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/windows.png",
      },
      {
        name: "Linux",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/linux.png",
      },
    ],
    UI: [
      {
        name: "TypeScript",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/typescript.png",
      },
      {
        name: "JavaScript",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/javascript.png",
      },
      {
        name: "Angular",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/angular.png",
      },
      {
        name: "React",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/react.png",
      },
    ],
    Web: [
      {
        name: "Swagger",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/swagger.png",
      },
      {
        name: "HTML",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/html.png",
      },
      {
        name: "CSS",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/css.png",
      },
      {
        name: "Bootstrap",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bootstrap.png",
      },
      {
        name: "Tailwind",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/tailwind_css.png",
      },
    ],
    tools: [
      {
        name: "SonarQube",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/sonarqube.png",
      },
      {
        name: "Postman",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/postman.png",
      },
      {
        name: "Jira",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jira.png",
      },
    ],

    version: [
      {
        name: "Git",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/git.png",
      },
      {
        name: "GitHub",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/github.png",
      },
      {
        name: "GitLab",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/gitlab.png",
      },
      {
        name: "Bitbucket",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/bitbucket.png",
      },
      {
        name: "Jenkins",
        url: "https://raw.githubusercontent.com/marwin1991/profile-technology-icons/refs/heads/main/icons/jenkins.png",
      },
    ],
  };
  return (
    <div className="pt-10">
      <h1 className="font-bold text-3xl ">Skills</h1>

      <div className="text-center flex flex-wrap justify-center">
        {technologies.backend.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
      <div className="text-center flex flex-wrap justify-center">
        {technologies.db.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>

      <div className="text-center flex flex-wrap justify-center">
        {technologies.OS.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
      <div className="text-center flex flex-wrap justify-center">
        {technologies.UI.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
      <div className="text-center flex flex-wrap justify-center">
        {technologies.Web.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
      <div className="text-center flex flex-wrap justify-center">
        {technologies.tools.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
      <div className="text-center flex flex-wrap justify-center">
        {technologies.version.map((tech) => {
          return (
            <span className="p-2">
              <img src={tech.url} title={tech.name} width={50} height={30} />
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
