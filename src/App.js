import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import home from "./components/home/home"
import Dashboard from "./components/layout/Dashboard";
import NotFound from './components/home/NotFound';
import PayrollForm from "./components/payroll-form/PayrollForm";
import EditUser from "./components/payroll-form/Edituser";
import EmployeeService from "./components/payroll-form/EmployeeService";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";

function App() {
  return (

    <Router>
      <div className="App">
        <Dashboard />
        <Switch>
          <Route exact path="/" component={home} />
          <Route exact path="/payroll-form/add" component={PayrollForm} />
          <Route exact path="/payroll-form/edit/:id" component={EditUser} />
          <Route exact path="/payroll-form/:id" component={EmployeeService} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>

  );
}

export default App;