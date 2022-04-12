import React, { useState, useEffect, useCallback } from "react"
import axios, { AxiosResponse, AxiosInstance } from 'axios';
import { Link } from "react-router-dom";

const EmployeeService = () => {

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

  return (
    <div className="container" >
      <div className="py-4">
        <h1>Employee payroll List</h1>
      </div>
    </div>
  );
};
export default EmployeeService;