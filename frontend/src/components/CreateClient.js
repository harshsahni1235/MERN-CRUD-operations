import React, { useState } from "react";
import axiosApi from "../api/axiosApi";

const CreateClient = ({ onClientCreated, setApiErrorMsg }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [mobileNum, setMobileNum] = useState("");
  const [project, setProject] = useState("");

  const saveClient = async (e) => {
    e.preventDefault();
    try {
      const reqPayload = {
        firstName: firstName,
        lastName: lastName,
        emailId: emailId,
        phoneNumber: mobileNum,
        project: project,
      };
      const response = await axiosApi("/add", "POST", reqPayload);
      if (response?.statusCode !== 200) {
        setApiErrorMsg(response?.message);
        throw new Error(response);
      }
      onClientCreated();
    } catch (error) {
      console.error("Error creating client: ", error);
    }
  };

  const changeFirstNameHandler = (event) => {
    setFirstName(event.target.value);
  };
  const changeLastNameHandler = (event) => {
    setLastName(event.target.value);
  };
  const changeEmailHandler = (event) => {
    setEmailId(event.target.value);
  };
  const changeMobileHandler = (event) => {
    setMobileNum(event.target.value);
  };
  const changeProjectHandler = (event) => {
    setProject(event.target.value);
  };

  return (
    <div>
      <br></br>
      <div className="container">
        <div
          className="fs-2 fw-semibold text-center"
          style={{ marginRight: "28rem" }}
        >
          Create Client
        </div>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3 text-start">
            <div className="card-body">
              <form>
                <div className="form-group fw-medium">
                  <label>First Name </label>
                  <input
                    className="form-control"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={changeFirstNameHandler}
                  />
                </div>
                <div className="form-group fw-medium">
                  <label>Last Name</label>
                  <input
                    className="form-control"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={changeLastNameHandler}
                  />
                </div>
                <div className="form-group fw-medium">
                  <label>Email </label>
                  <input
                    className="form-control"
                    placeholder="Email"
                    name="Email"
                    value={emailId}
                    onChange={changeEmailHandler}
                  />
                </div>
                <div className="form-group fw-medium">
                  <label>Mobile No.</label>
                  <input
                    className="form-control"
                    placeholder="Mobile"
                    name="Mobile"
                    value={mobileNum}
                    onChange={changeMobileHandler}
                  />
                </div>
                <div className="form-group fw-medium">
                  <label>Project</label>
                  <input
                    className="form-control"
                    placeholder="Project"
                    name="Project"
                    value={project}
                    onChange={changeProjectHandler}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary mt-2"
                  onClick={(e) => saveClient(e)}
                >
                  {" "}
                  Create Client{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateClient;
