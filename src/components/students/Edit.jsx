import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import axios from "axios";

const Edit = () => {
  const [student, setStudent] = useState({
    studentName: "",
    depertment: "",
    email: "",
    address: "",
    phone: "",
  });
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

  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value,
    });
  };

  const backToHome = () => history.push("/");

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/students/${id}`, student);
      backToHome();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-7">
            <div className="card p-3 bg-light shadow">
              <div className="card-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="id" className="form-label">
                      ID
                    </label>
                    <input
                      value={id}
                      onChange={handleChange}
                      type="number"
                      name="id"
                      className="form-control"
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      value={student.studentName}
                      onChange={handleChange}
                      type="text"
                      name="studentName"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="depertment" className="form-label">
                      depertment
                    </label>
                    <input
                      value={student.depertment}
                      onChange={handleChange}
                      type="text"
                      name="depertment"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      value={student.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      Address
                    </label>
                    <input
                      value={student.address}
                      onChange={handleChange}
                      type="text"
                      name="address"
                      className="form-control"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Phone
                    </label>
                    <input
                      value={student.phone}
                      onChange={handleChange}
                      type="number"
                      name="phone"
                      className="form-control"
                    />
                  </div>
                  <div className="d-grid gap-2">
                    <button
                      type="submit"
                      onClick={(e) => handleUpdate(e)}
                      className="btn btn-success"
                    >
                      Update Student
                    </button>
                    <button
                      type="submit"
                      onClick={backToHome}
                      className="btn btn-primary"
                    >
                      Back To Home
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit;
