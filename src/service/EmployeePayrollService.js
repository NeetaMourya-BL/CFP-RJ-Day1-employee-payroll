import axios from "axios";

class EmployeePayrollService {
    baseUrl = "http://localhost:8080/employeepayrollservice"

addEmployee(data) {
    return axios.post('${this.baseUrl}/create',data);
}

getAllEmployees(){
    return axios.get('${this.baseUrl}/get/all',data);
}

getEmployee(employeeId) {
    return axios.get('${this.baseUrl}/get/${employeeId}');
}

updateEmployee(employeeId,data) {
    return axios.put('$(this.baseUrl)/update/${employeeId}',data)
}

deleteEmployee(employeeId,data) {
    return axios.delete('$(this.baseUrl)/delete/${employeeId}',data)
}

getEmployeeByDepartment(department) {
    return axios.get('${this.baseUrl}/department/${department}');
}

getEmployeeByGender(gender) {
    return axios.get('${this.baseUrl}/gender/${department}');
}

deleteAllEmployee(employeeId,data) {
    return axios.delete('$(this.baseUrl)/deleteall',data)
}

}
export default EmployeePayrollService;