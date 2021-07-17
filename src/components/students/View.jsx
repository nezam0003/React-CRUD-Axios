import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";

const View = () => {
  const [student, setStudent] = useState([]);
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const getStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/students/${id}`
        );
        const singleStudent = await response.data;
        setStudent(singleStudent);
      } catch (error) {
        console.log(error);
      }
    };
    getStudent();
  }, [id]);

  const backToHome = () => history.push("/");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col mx-auto">
            <table className="table table-dark table-hover">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Name</th>
                  <th scope="col">Depertment</th>
                  <th scope="col">E-mail</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{student.id}</th>
                  <td>{student.studentName}</td>
                  <td>{student.depertment}</td>
                  <td>{student.email}</td>
                  <td>{student.phone}</td>
                  <td>{student.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="g-grid">
          <button className="btn btn-primary" onClick={backToHome}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default View;
