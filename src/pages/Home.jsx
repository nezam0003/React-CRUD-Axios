import React from "react";
import Header from "../components/Header";
import StudentForm from "../components/StudentForm";
import StudentList from "../components/students/StudentsList";

const Home = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-10 mx-auto mx-lg-0 col-md-5">
            <StudentForm />
          </div>
          <div className="col-10 mx-auto mx-lg-0 col-md-7">
            <Header title="Student List" styleclass="bg-primary text-light" />
            <StudentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
