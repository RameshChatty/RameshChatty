import React from "react";

import resume from "../../assets/files/Ramesh_Resume_Java_full_stack_developer_10yrs_exp.pdf";

const Resume = () => {
  return (
    <div>
      <span></span>
      <div>
        <object width="100%" height="400" data={resume} type="application/pdf">
          {" "}
        </object>
      </div>
    </div>
  );
};

export default Resume;
