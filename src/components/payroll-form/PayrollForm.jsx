import React, { useState } from "react";
import profile2 from '../../Assets/profile-images/Ellipse -1.png';
import profile1 from '../../Assets/profile-images/Ellipse -2.png';
import profile4 from '../../Assets/profile-images/Ellipse -3.png';
import profile3 from '../../Assets/profile-images/Ellipse -4.png';
import logo from '../../Assets/images/logo.png'
import './PayrollForm.css';
import axios from 'axios'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';


const PayrollForm = () => {
    let history = useHistory();
    const [employee, setUser] = useState({
        name: '',
        profileArray: [
            { url: '../../Assets/profile-images/Ellipse -1.png' },
            { url: '../../Assets/profile-images/Ellipse -2.png' },
            { url: '../../Assets/profile-images/Ellipse -3.png' },
            { url: '../../Assets/profile-images/Ellipse -4.png' }

        ],
        allDepartment: [
            'HR', 'Sales', 'Finance', 'Engineer', 'Others'
        ],
        departMentValue: [],
        gender: '',
        salary: '',
        day: '',
        month: '',
        year: '',
        startDate: '',
        notes: '',
        id: '',
        profilePic: '',
        isUpdate: false,
        error: {
            department: '',
            name: '',
            gender: '',
            salary: '',
            profilePic: '',
            startDate: ''
        }
    });
    const [formValue, setForm] = useState(employee);

    // const onInputChange = async event => {
    //     setUser({ ...employee, [event.target.name]: event.target.value });
    // };

    const onSubmit = async event => {
        event.preventDefault();
        await axios.post("http://localhost:3001/employee", employee);
        
        history.push("/");
    };
    const changeValue = (event) => {
        setForm({ ...employee, [event.target.name]: event.target.value })
        setUser({ ...employee, [event.target.name]: event.target.value })
    }

    const onCheckChange = (name) => {
        let index = employee.departMentValue.indexOf(name);

        let checkArray = [...employee.departMentValue]
        if (index > -1)
            checkArray.splice(index, 1)
        else
            checkArray.push(name);
        setUser({ ...employee, departMentValue: checkArray });
    }
    const getChecked = (name) => {
        return employee.departMentValue && employee.departMentValue.includes(name);
    }
    return (
        <div className="payroll-main">
            <header className='header-content header'>
                <div className="logo-content">
                    <img src={logo} alt="" />
                    <div>
                        <Link className="nav-link" exact to="/">
                            <span className="emp-text">EMPLOYEE</span> <br />
                            <span className="emp-text emp-payroll">PAYROLL</span>
                        </Link>
                    </div>
                </div>
            </header>
            <div className="form-content">
                <form className="form-head" action="#" onSubmit={onSubmit}>
                    <div className="form-head">Employee Payroll form</div>
                    <div className="row-content">
                        <label className="label text" htmlFor="name">Name</label>
                        <input className="input" type="text" id="name" name="name" value={employee.name} onChange={changeValue} placeholder="Your name.." />
                        {/* <error className="error">{employee.error.name}</error> */}
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="profilePic">Profile image</label>
                        <div className="profile-radio-content">

                            <label >
                                <input type="radio" name="profilePic" checked={employee.profilePic === '../../Assets/profile-images/Ellipse -1.png'} value="../../Assets/profile-images/Ellipse -1.png" onChange={changeValue} />
                                <img className="profile" src={profile2} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profilePic" checked={employee.profilePic === '../../Assets/profile-images/Ellipse -2.png'} value="../../Assets/profile-images/Ellipse -2.png" onChange={changeValue} />
                                <img className="profile" src={profile1} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profilePic" checked={employee.profilePic === '../../Assets/profile-images/Ellipse -3.png'} value="../../Assets/profile-images/Ellipse -3.png" onChange={changeValue} />
                                <img className="profile" src={profile4} alt="profile" />
                            </label>
                            <label >
                                <input type="radio" name="profilePic" checked={employee.profilePic === '../../Assets/profile-images/Ellipse -4.png'} value="../../Assets/profile-images/Ellipse -4.png" onChange={changeValue} />
                                <img className="profile" src={profile3} alt="profile" />
                            </label>

                        </div>
                        {/* <error className="error">{employee.error.profilePic}</error> */}
                    </div>
                    <div className="row-content">
                        <label className="label text" htmlFor="gender">Gender</label>
                        <div>
                            <input type="radio" id="male" checked={employee.gender === 'male'} onChange={changeValue} name="gender" value="male" />
                            <label className="text" htmlFor="male">Male</label>
                            <input type="radio" id="female" checked={employee.gender === 'female'} onChange={changeValue} name="gender" value="female" />
                            <label className="text" htmlFor="female">Female</label>
                        </div>
                        {/* <error className="error">{employee.error.gender}</error> */}
                    </div>
                    < div className="row-content" >
                        <label className="label text" htmlFor="departments">Department</label>
                        {
                            employee.allDepartment.map(item => (
                                <span key={item}>
                                    <input className="checkbox" type="checkbox" onChange={() => onCheckChange(item)} name={item} checked={getChecked(item)} value={item} />
                                    <label className="text" htmlFor={item}>{item}</label>
                                </span>
                            ))}

                        {/* <error className="error">{employee.error.department}</error> */}
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="salary">Salary</label>
                        <input className="input" type="text" id="salary" name="salary" value={employee.salary} onChange={changeValue} />
                        {/* <error className="error">{employee.error.salary}</error> */}
                    </div>



                    <div className="row-content">
                        <label className="label text" htmlFor="startDate">Start Date</label>
                        <div>
                            <select value={employee.day} onChange={changeValue} id="day" name="day">
                                <option value="" disabled selected>Day</option>
                                <option value="01">1</option>
                                <option value="02">2</option>
                                <option value="03">3</option>
                                <option value="04">4</option>
                                <option value="05">5</option>
                                <option value="06">6</option>
                                <option value="07">7</option>
                                <option value="08">8</option>
                                <option value="09">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select value={employee.month} onChange={changeValue} id="month" name="month">
                                <option value="" disabled selected>Month</option>
                                <option value="Jan">January</option>
                                <option value="Feb">Febuary</option>
                                <option value="Mar">March</option>
                                <option value="Apr">April</option>
                                <option value="May">May</option>
                                <option value="Jun">June</option>
                                <option value="Jul">July</option>
                                <option value="Aug">August</option>
                                <option value="Sep">September</option>
                                <option value="Oct">October</option>
                                <option value="Nov">November</option>
                                <option value="Dec">December</option>
                            </select>
                            <select value={employee.year} onChange={changeValue} id="year" name="year">
                                <option value="" disabled selected>Year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                                <option value="2018">2018</option>
                                <option value="2017">2017</option>
                                <option value="2016">2016</option>
                            </select>
                        </div>
                        {/* <error className="error">{employee.error.startDate}</error> */}
                    </div>

                    <div className="row-content">
                        <label className="label text" htmlFor="notes">Notes</label>
                        <textarea onChange={changeValue} id="notes" value={employee.notes} className="input" name="notes" placeholder=""
                            style={{ height: '120%' }}></textarea>
                        {/* <error className="error">{employee.error.notes}</error> */}
                    </div>

                    <div className="buttonParent">
                        <Link to="/" className="resetButton button cancelButton">Cancel</Link>
                        <Link to="/" className="resetButton button cancelButton">Employee List</Link>

                        <div className="submit-reset">

                            <button type="submit" className="button submitButton" id="submitButton">{employee.isUpdate ? 'Update' : 'Submit'}</button>
                        </div>
                    </div >
                </form >
            </div >
        </div >
    );
};

export default PayrollForm;