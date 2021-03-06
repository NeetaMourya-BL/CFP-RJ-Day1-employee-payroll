import React, { useState, useEffect, useCallback } from "react"
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { Link } from "react-router-dom";
import profile1 from '../../Assets/profile-images/Ellipse -1.png';
import profile2 from '../../Assets/profile-images/Ellipse -2.png';
import profile3 from '../../Assets/profile-images/Ellipse -3.png';
import profile4 from '../../Assets/profile-images/Ellipse -4.png';
import deleteIcon from "../../Assets/icons/delete-black-18dp.svg";
import editIcon from "../../Assets/icons/create-black-18dp.svg";
import search from "../../Assets/icons/search.png"
import logo from '../../Assets/images/logo.png'
import './home.css'

const Home = () => {

  // let employeeList = JSON.parse(localStorage.getItem('EmployeeList'));
  // console.log(employeeList);

  const [employee, setUser] = useState([]);

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
        <div>
        <span className="emp-details">Employee Details</span>
        </div>
        <div className="employee-count">{employee.length}</div>
        <div>
        <img className="search" src={search} alt="search" />
        </div>
        <div>
        <Link className="add-button" to="/payroll-form/add">+Add User</Link>
        </div>
      </div>
      <div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>

              <th scope="col">Id</th>
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
            {employee.map((employee, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td><img className="profile"
                  src={
                    employee.profilePic ===
                      "../../Assets/profile-images/Ellipse -1.png"
                      ? profile1
                      : employee.profilePic ===
                        "../../Assets/profile-images/Ellipse -2.png"
                        ? profile2
                        : employee.profilePic ===
                          "../../Assets/profile-images/Ellipse -3.png"
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
                <td>{employee.day+'-'+employee.month+'-'+employee.year}</td>
                <td>
                  <Link class="btn btn-primary mr-2" to={`/payroll-form/${employee.id}`}>
                    View
                  </Link>

                  <img src={deleteIcon} alt="delete" onClick={() => deleteUserData(employee.id)} />
                  <Link to={`/payroll-form/edit/${employee.id}`}>
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