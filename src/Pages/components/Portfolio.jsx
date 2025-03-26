import React from "react";
import ProjectDetails from "./ProjectDetails";

const Portfolio = () => {
  const portfolioDetails = [
    {
      projectName: "Opentext LiquidOffice",
      duration: "2021-present",
      abstract:
        "Intelligent Forms Automation with OpenText™ LiquidOffice™ is a comprehensive, enterprise-level solution that enables organizations to seamlessly automate information capture and processing using electronic forms to drive interaction with customers and employees, ensure information accuracy and route information immediately to its destination.",
      techStatck: [
        "Java 21",
        "Ext Js",
        "Oracel 21c",
        "Sql server",
        "Postgres",
        "Jersey REST",
        "Apache TomEE 10",
        "OTDS",
        "LDAP",
      ],
      contribution: [
        {
          role: "Add the new features and enhance the existing features as per the requirements.",
        },
        {
          role: "Fix the support issues and release the hotfixes.                                                           ",
        },
        {
          role: "Fix the security issues which are identified by Black-duck scan and fortify                                ",
        },
        {
          role: "Perform End to End testing and give the demo to product Manager and support team                           ",
        },
        {
          role: "Reviewing the others code and merge the changes if everything looks good.                                  ",
        },
        {
          role: "Implement the test cases using Junit                                                                       ",
        },
        {
          role: "Integrate the application with multiple content systems like share point, content server and DMS.          ",
        },
        {
          role: "Implement REST APIs and SOAP APIs to the customers, so that they can integrate in their portals.           ",
        },
        {
          role: "Preparing the Documentation for the customers and release notes for every release                          ",
        },
        {
          role: "Verify the product changes in all the OS like windows, windows server, Linux, Ubuntu and redhat linux etc.,",
        },
        {
          role: "Preparing the ESCROW and third-party license document for release process.",
        },
      ],
    },
    {
      projectName: "CRST- Project providence (CRST International)",
      duration: "2018-2021",
      abstract:
        "The main aim of CRST is to maintain the their customers and life cycle of the Orders and Quotes, here the main application flow will starts once order is placed and we will track all the order information like order information and its products and the respective customers and partners information.  We also calculate the products costs and based on this will generate the invoice reports, customers cost and partner cost dynamically.",
      techStatck: [
        "Java 8",
        "Spring Boot and Microservices",
        "Hibernate",
        "Angular 6",
        "Sql server",
      ],
      contribution: [
        {
          role: "Participated in the business requirement session.                                                       ",
        },
        {
          role: "Designed the backend logic using spring boot, Hibernate (spring data JAP) and sql server procedures.    ",
        },
        {
          role: "Handled the server side validation for REST API’s                                                       ",
        },
        {
          role: "Created the model classes to map with database tables to persist or fetch the data.                     ",
        },
        {
          role: "Worked on the REST API design document (Implemented the swagger).                                       ",
        },
        {
          role: "Written JUNIT (MOCKITO) test cases.                                                                     ",
        },
        {
          role: "Integrated the backend services with UI service components.                                             ",
        },
        {
          role: "Loading the master data into DB tables.                                                                 ",
        },
        {
          role: "Fixed the issues in Angular application.                                                                ",
        },
        {
          role: "Designed the reports in UI, using Prime Ng component and implemented server-side sorting and pagination.",
        },
      ],
    },
    {
      projectName:
        "ADB –IDS (Asian Development Bank, Integrated design system)",
      duration: "Aug,2018 - Dec,2021",
      abstract:
        "The main aim of ADB-IDS is to maintain the Loans, grants and disbursements related Information and to approve it. This application mainly consists of 4 epics, they are loans, grants, disbursements and technical assistance. Once ADB get any request from the member countries Technical assistance people will verify the request documents and approve the loans, grants or disbursements. ",
      techStatck: [
        "Java 8",
        "Spring Boot",
        "Mybatis",
        "Angular 4",
        "Oracle",
        "Html",
        "Css",
      ],
      contribution: [
        {
          role: "Participated in the business requirement session.                                  ",
        },
        {
          role: "Designed the backend logic using Spring boot, mybatis and sql procedures.          ",
        },
        {
          role: "Handled the server side validation for REST API’s                                  ",
        },
        {
          role: "Created the model classes to map with database tables to persist or fetch the data.",
        },
        {
          role: "Worked on the REST API design document.                                            ",
        },
        {
          role: "Written JUNIT (MOCKITO) test cases.                                                ",
        },
        {
          role: "Fixed the sonar complaints.                                                        ",
        },
        {
          role: "Integrated the backend services with UI service components.                        ",
        },
        {
          role: "Loading the master data into DB tables.                                            ",
        },
      ],
    },

    {
      projectName: "Wal-Mart - GSM (Global Supplier Management).",
      duration: "2016-2018",
      abstract:
        "GSM is replacement for SLSC (Supplier Life Cycle). The main purpose of the GSM is to onboard supplier to sell goods. All supplier’s data will be stored in MDG from which other downstream systems will utilize the supplier data. This application mainly consists of four epics. They are Registration, Certification, Invitation and Acceptance. Out of four epics except Registration remaining all are internal to the organization. Registration has to be completed by the supplier only. Once the registration is completed supplier has to complete the Certification. In Certification the supplier has to provide the information regarding the company like contact information, insurance details, products they sell etc. Invitation will be sent to the supplier from the buyer (Wal-Mart employee who is having the access to send). Once the supplier receives the invitation, supplier has to complete the Acceptance phase in order to make contract with the Wal-Mart.",
      techStatck: [
        "Java8",
        "Spring rest",
        "Hibernate",
        "Angular Js",
        "Ms-Sql server",
        " Html",
        "Css",
      ],
      contribution: [
        { role: "Participated in business and requirements session.																															" },
        {
          role: "Involved in designing the presentation layer by using HTML, Angular JS, CSS and Material Design and backend logic using Spring and hibernate.                               ",
        },
        {
          role: "Handled client-side validations.                                                                                                                                            ",
        },
        {
          role: "Creating entity class to interact with db tables.                                                                                                                           ",
        },
        {
          role: "Worked on the Documentum (EMC documetum) to store the files in cloud-based storage location.                                                                                ",
        },
        {
          role: "Xml and XML schema file designed to handle the data from listeners and to save in the DB.                                                                                   ",
        },
        {
          role: "Integrated third party services like Duns number validation, USA Address, Supplier number validation etc..,                                                                 ",
        },
        {
          role: "Created design and functional documents to maintain information about application and attached to the Assigned user stories in jira.                                        ",
        },
        {
          role: "Created Technical Specification documents and TUT’s after fixing the incidents raised in production.                                                                        ",
        },
        {
          role: "Interact with clients to discuss the design, architectural and non-functional requirements like performance, scalability, reliability, availability, and maintainability.   ",
        },
        {
          role: "Understand the requirements of third party services and implemented services to provide the request in required format.                                                     ",
        },
        {
          role: "Integration of UI with services using Angular HTTP Services and Ajax calls.                                                                                                 ",
        },
        {
          role: "Performed integration testing and unit testing.                                                                                                                             ",
        },
        {
          role: "Writing Junit test cases for developed stories and running the code coverage report.                                                                                        ",
        },
      ],
    },

    {
      projectName:
        "Mission for Elimination of Poverty In Municipal Areas (MEPMA)",
      duration: "Nov,2014 - Nov, 2016",
      abstract:
        "Mission for Elimination of Poverty in Municipal Areas (MEPMA) was established in 2007 as per G.O Ms No 414 dated 4.6.2007 by government of Andhra Pradesh to formulate strategies to implement poverty reduction programs in urban areas. The main aim & objective of the department is to promote, strengthen and nurture self-sustainable institutions of the poor and through them, address all poverty issues like access to credit, financial freedom, health, disability and vulnerability.",
      techStatck: ["Java 1.7", "Struts 1.2", "PostgreSQL", "Jquery"],
      contribution: [
        {
          role: "As a Team Member involved in full Development of Mas, Nutri shops, Street vendors, Livelihoods Entry screens and their respective reports and pdfs.",
        },
        { role: "Involved in writing Struts Action classes and Form Beans." },
        { role: "Implemented user interface using JSP." },
        { role: "Performed Client Side and Server Side Validations." },
        {
          role: "Implemented Ajax to load dynamic content without reloading the web page.",
        },
        {
          role: "Handling Front-End logic completely with Struts Tag library.",
        },
      ],
    },

    //---
  ];
  return (
    <div>
      <div>
        {portfolioDetails.map((data) => {
          return <ProjectDetails key={data.projectName} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
