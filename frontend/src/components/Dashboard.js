import React, { useEffect, useState } from "react";
import axiosApi from "../api/axiosApi";
import CreateClient from "./CreateClient";
import { useNavigate } from "react-router-dom";
import ErrorMsg from "../utils/ErrorMsg";

const Dashboard = () => {
  const navigate = useNavigate();
  const [clients, setClients] = useState([]);
  const [isCreatePanel, setIsCreatePanel] = useState(false);
  const [apiErrorMsg, setApiErrorMsg] = useState("");

  useEffect(() => {
    getAllClients();
  }, []);

  const getAllClients = async () => {
    try {
      const reqPayload = { key: "wti" };
      const response = await axiosApi("/get", "GET", reqPayload);
      if (response?.response) {
        setClients(response?.response);
      }
      if (response?.statusCode !== 200) {
        throw new Error(response);
      }
    } catch (error) {
      console.error("Error getting all clients: ", error);
    }
  };

  const deleteClient = async (emailId) => {
    try {
      const reqPayload = {
        emailId: emailId,
      };
      const response = await axiosApi("/delete", "DELETE", reqPayload);
      if (response?.statusCode !== 200) {
        throw new Error(response);
      }
      getAllClients();
    } catch (error) {
      console.error("Error deleting client: ", error);
    }
  };

  const onEdit = (email) => {
    navigate("/update-client", { state: { data: email } });
  };

  const onClientCreated = async () => {
    await getAllClients();
    setIsCreatePanel(false);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div
            className={
              isCreatePanel ? "navbar-brand text-secondary" : "navbar-brand"
            }
            style={{ marginLeft: "30px" }}
            onClick={() => setIsCreatePanel(false)}
          >
            Clients Panel
          </div>
          <div
            className={
              !isCreatePanel ? "navbar-brand text-secondary" : "navbar-brand"
            }
            style={{
              marginLeft: "30px",
            }}
            onClick={() => setIsCreatePanel(true)}
          >
            Create Client
          </div>
        </nav>
      </header>
      {!isCreatePanel ? (
        <>
          <div className="container">
            <h2 className="text-start mx-auto p-2 pb-0">Clients</h2>
            <div className="row"></div>
            <br />
            <div className="row">
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Mobile No.</th>
                    <th>Project</th>
                  </tr>
                </thead>

                <tbody>
                  {clients?.map((client) => (
                    <tr key={client.id}>
                      <td>{client.first_name}</td>
                      <td>{client.last_name}</td>
                      <td>{client.email_id}</td>
                      <td>{client.phone_number}</td>
                      <td>{client.project}</td>
                      <td>
                        <button
                          onClick={() => {
                            onEdit(client.email_id);
                          }}
                          className="btn btn-info"
                          style={{ marginLeft: "20px" }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteClient(client.email_id)}
                          className="btn btn-danger"
                          style={{ marginLeft: "20px" }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      ) : (
        <CreateClient
          onClientCreated={onClientCreated}
          setApiErrorMsg={setApiErrorMsg}
        />
      )}
      {apiErrorMsg ? <ErrorMsg errorMsg={apiErrorMsg} /> : ""}
    </>
  );
};

export default Dashboard;
