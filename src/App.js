import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import PayrollForm from "./components/home/PayrollForm";
// import Navbar from "./components/layout/Navbar";


import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from './components/home/NotFound';
import Adduser from './components/payroll-form/Adduser';
import EditUser from "./components/payroll-form/Edituser";
import User from "./components/payroll-form/Users";


function App() {
  return (
    
    <Router>
    <div className="App">
      {/* <Navbar /> */}

      <Switch>
        <Route exact path="/" component={PayrollForm} />
        
        <Route exact path="/payroll-form/add" component={Adduser} />
        <Route exact path="/payroll-form/edit/:id" component={EditUser} />
          <Route exact path="/payroll-form/:id" component={User} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;