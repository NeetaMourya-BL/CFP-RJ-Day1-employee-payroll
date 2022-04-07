import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PayrollForm from '../components/payrollform/PayrollForm';
import NoPage from "../components/payrollform/NoPage";

function TakeRouter() {
    return (
        <div>
            <BrowserRouter >
                <Switch>
                    <Route exact path="/" component={PayrollForm} />
                    <Route exact path="/NoPage" component={NoPage} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default TakeRouter
