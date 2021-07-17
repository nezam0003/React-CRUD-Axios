import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { IconButton, Tooltip } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import axios from "axios";

const StudentsList = () => {
  const [allStudents, setAllStudents] = useState([]);

  const getStudents = useCallback(async () => {
    try {
      const response = await axios.get("http://localhost:3333/students");
      const students = await response.data;
      setAllStudents(students);
    } catch (error) {
      console.log(error);
    }
  }, []);

  // get all students from server
  useEffect(() => {
    getStudents();
  }, [getStudents]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3333/students/${id}`);
    const newStudent = allStudents.filter((student) => {
      return student.id !== id;
    });
    setAllStudents(newStudent);
  };

  return (
    <>
      <table className="table table-dark table-hover align-middle">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col" className="text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {allStudents.map((student, index) => {
            const { id, studentName, email } = student;
            console.log(id);
            return (
              <tr key={id}>
                <th scope="row">{index + 1}</th>
                <td>{studentName}</td>
                <td>{email}</td>
                <td className="d-flex aligin-items-center justify-content-between">
                  <Tooltip title="View">
                    <IconButton>
                      <Link to={`/view/${id}`}>
                        <VisibilityIcon color="primary" />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit">
                    <IconButton>
                      <Link to={`/edit/${id}`}>
                        <EditIcon />
                      </Link>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(id)}>
                      <DeleteIcon color="secondary" />
                    </IconButton>
                  </Tooltip>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default StudentsList;
