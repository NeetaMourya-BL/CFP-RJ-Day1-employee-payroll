import './App.css';
import { Router } from 'react-router-dom';
import PayrollForm from './components/payrollform/PayrollForm';
import TakeRouter from './router/router';

function App() {
  return (
    <div className="App">
     <TakeRouter/>
    </div>
  );
}
export default App;