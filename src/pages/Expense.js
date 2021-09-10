import React from "react";
import CreateExpense from "../components/create-expense.component";

import EditExpense from "../components/edit-expense.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Expense() {
  return (

      <Router>
       
                  <Switch>
               
                <Route path="/create-expense" component={CreateExpense} />
                <Route path="/edit-expense/:id" component={EditExpense} />    
            
                <CreateExpense/>
                 <EditExpense/>
              </Switch>
      </Router>
 
  );
}
