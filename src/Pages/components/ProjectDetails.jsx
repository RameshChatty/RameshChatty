import React from "react";

const ProjectDetails = (props) => {
  //   console.log("000000000000000000" + props);
  let data = props.data;
  //   console.log("---------->" + data);
  return (
    <div className="top-2 p-5">
      <div className="underline">
        <h1 className="font-bold text-3xl ">
          {data.projectName}
          <span className="text-xl">({data.duration})</span>
        </h1>
      </div>
      <div className="p-4">
        <div className="pt-2">
          <p>
            <b>Abstratc: </b>
            {data.abstract}
          </p>
        </div>
        <div className="pt-2">
          <p>
            <b>Technolgies Used:</b>
          </p>
          <div className="p-5">
            {data.techStatck.map((tech) => {
              return (
                <span className="rounded-3xl border-2 p-3 mr-1">{tech}</span>
              );
            })}
          </div>
        </div>
        <div className="pt-2">
          <p>
            <b>Roles and Responsibilities:</b>
          </p>
          <ul className="m-4 list-item list-disc">
            {data.contribution.map((cont) => {
              return <li>{cont.role}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
