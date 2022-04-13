import React, { useState, useEffect, useCallback } from "react"
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { Link } from "react-router-dom";
import profile1 from '../../Assets/profile-images/Ellipse -3.png';
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile3 from '../../Assets/profile-images/Ellipse -8.png';
import profile4 from '../../Assets/profile-images/Ellipse -7.png';
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
import search from "../../Assets/icons/search.png"
import logo from '../../Assets/images/logo.png'
import './home.css'

const Home = () => {

  // let employeeList = JSON.parse(localStorage.getItem('EmployeeList'));
  // console.log(employeeList);

  const [users, setUser] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:3001/employee");
    setUser(result.data);
  }
  const deleteUserData = async (id) => {
    await axios.delete(`http://localhost:3001/employee/${id}`);
    loadUsers();
  }

  return (
    <div className="container" >
      <header className='header-content header'>

        <div className="logo-content">
          <img src={logo} alt="" />
          <div>
            <span className="emp-text">EMPLOYEE</span> <br />
            <span className="emp-text emp-payroll">PAYROLL</span>
          </div>
        </div>
      </header>
      <div className="form-content">
      <span className="emp-text emp-payroll">Employee Details</span>
        <img className="search" src={search} alt="search" />
        <button className="add-button">
          <Link className="text-content" to="/payroll-form/add">+Add User</Link>
        </button>
      </div>
      <div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Profile Image</th>
              <th scope="col">Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Department</th>
              <th scope="col">Salary</th>
              <th scope="col">Start Date</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {users.map((employee, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img className="profile"
                  src={
                    employee.profilePic ===
                      "../../Assets/profile-images/Ellipse -3.png"
                      ? profile1
                      : employee.profilePic ===
                        "../../Assets/profile-images/Ellipse -1.png"
                        ? profile2
                        : employee.profilePic ===
                          "../../Assets/profile-images/Ellipse -4.png"
                          ? profile3
                          : profile4
                  }
                  alt=""
                />
                </td>
                <td>{employee.name}</td>
                <td>{employee.gender}</td>
                <td>{employee.departMentValue.map(dept => (
                  <div  >
                    {dept}
                  </div>
                ))}</td>
                <td>{employee.salary}</td>
                <td>{employee.startdate}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/employee/${employee.id}`}>
                    View
                  </Link>

                  <img src={deleteIcon} alt="delete" onClick={() => deleteUserData(employee.id)} />
                  <Link to={`/employee/edit/${employee.id}`}>
                    <img src={editIcon} alt="edit" />
                  </Link>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Home;