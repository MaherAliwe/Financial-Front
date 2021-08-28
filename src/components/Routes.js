import React from 'react'
import { Switch, Route} from 'react-router-dom';
import Users from '../pages/Users';
import WeeklyReports from '../pages/WeeklyReports';
import MonthlyReports from '../pages/MonthlyReports';
import YearlyReports from '../pages/YearlyReports';
import CategoryExpense from '../pages/CategoryExpense';
import CategoryIncome from '../pages/CategoryIncome';
import Expense from '../pages/Expense';
import Income from '../pages/Income';
import { Redirect } from 'react-router';
import  Home  from '../pages/Home';
import Login from '../pages/Login';


export default function Routes() {
    return (
     <Switch>
         <Route path="/login" exact component={Login}></Route>
         <Route path="/users" exact component={Users}></Route>
         <Route path="/income" exact component={Income}></Route>
         <Route path="/expense" exact component={Expense}></Route>
         <Route path="/categoryincome" exact component={CategoryIncome}></Route>
         <Route path="/categoryexpense" exact component={CategoryExpense}></Route>
         <Route path="/yearlyreports" exact component={YearlyReports}></Route>
         <Route path="/monthlyreports " exact component={MonthlyReports}></Route>
         <Route path="/weeklyreports" exact component={WeeklyReports}></Route>
         <Redirect to="/" />
     </Switch>
    )
}