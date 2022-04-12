import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import PayrollForm from './components/payroll-form/PayrollForm';
import NotFound from './components/payroll-form/NotFound';

function App() {
  return (
    
    <Router>
    <div className="App">

      <Switch>
        <Route exact path="/" component={PayrollForm} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
    
  );
}

export default App;