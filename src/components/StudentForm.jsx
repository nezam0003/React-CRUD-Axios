import React, { useState } from "react";
import axios from "axios";

const StudentForm = () => {
  const [students, setStudents] = useState({
    studentName: "",
    depertment: "",
    email: "",
    address: "",
    phone: "",
  });
  const handleChange = (e) => {
    setStudents({
      ...students,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (students.studentName && students.depertment) {
        await axios.post(`http://localhost:3333/students`, students);
        setStudents({
          studentName: "",
          depertment: "",
          email: "",
          address: "",
          phone: "",
        });
      } else {
        alert("give proper info");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="card p-3 bg-light shadow">
        <div className="card-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                value={students.studentName}
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
                value={students.depertment}
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
                value={students.email}
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
                value={students.address}
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
                value={students.phone}
                onChange={handleChange}
                type="number"
                name="phone"
                className="form-control"
              />
            </div>
            <div className="d-grid">
              <button
                type="submit"
                onClick={handleSubmit}
                className="btn btn-success"
              >
                Add Student
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StudentForm;
