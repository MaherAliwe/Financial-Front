import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios'
import Swal from 'sweetalert2';
import ExpensesList from "../components/expenses-listing.component";
import "./exp.css"

export default class CreateExpense extends Component {
      constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeExpenseName = this.onChangeExpenseName.bind(this);
    this.onChangeExpenseAmount = this.onChangeExpenseAmount.bind(this);
    this.onChangeExpenseDescription = this.onChangeExpenseDescription.bind(this);
    this.onChangeExpenseDate= this.onChangeExpenseDate.bind(this);
    this.onChangeExpenseCategory= this.onChangeExpenseCategory.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      name: '',
      description: '',
      expense_date:'',
      amount: '',
     category:''
    
    }
  }

  onChangeExpenseName(e) {
    this.setState({name: e.target.value})
  }

  onChangeExpenseAmount(e) {
    this.setState({amount: e.target.value})
  }

  onChangeExpenseDescription(e) {
    this.setState({description: e.target.value})
  }
  onChangeExpenseDate(e) {
    this.setState({expense_date: e.target.value})
  }
  onChangeExpenseCategory(e) {
    this.setState({category_id: e.target.value})
  }

  onSubmit(e) {
    e.preventDefault()
     const expense = {
      name: this.state.name,
      amount: this.state.amount,
      expense_date: this.state.expense_date,
      description: this.state.description,
      category_id: this.state.category_id
    };
    axios.post("http://localhost:8000/api/expenses/", expense)
      .then(res => console.log(res.data));
    console.log(`Expense successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Amount: ${this.state.amount}`);
    console.log(`Description: ${this.state.description}`);
    console.log(`Date: ${this.state.expense_date}`);
    console.log(`Date: ${this.state.category_id}`);
    Swal.fire(
  'Good job!',
  'Expense Added Successfully',
  'success'
)

    this.setState({name: '', amount: '', description: '' , expense_date: '',category_id:''})
  }

  render() {
    return (
    <div className="form-wrapper">
      <br></br>
      <br></br>
      <Form onSubmit={this.onSubmit}>
        <Row> 
            <Col>
             <Form.Group controlId="Name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={this.state.name} onChange={this.onChangeExpenseName}/>
             </Form.Group>
            
            </Col>
            
            <Col>
             <Form.Group controlId="Amount">
                <Form.Label>Amount</Form.Label>
                        <Form.Control type="number" value={this.state.amount} onChange={this.onChangeExpenseAmount}/>
             </Form.Group>
            </Col>  
        <Col>
        <Form.Group controlId="date">
          <Form.Label>expense date</Form.Label>
                <Form.Control  type="date" value={this.state.expense_date} onChange={this.onChangeExpenseDate}/>
        </Form.Group>
        </Col>
        <Col>
        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" value={this.state.category_id} onChange={this.onChangeExpenseCategory} />
        </Form.Group>
        </Col>
        </Row>
        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" type="textarea" value={this.state.description} onChange={this.onChangeExpenseDescription}/>
        </Form.Group>
        <br></br>
        <Button variant="primary" size="lg" block="block" type="submit">
          Add Expense
        </Button>
      
      </Form>
      <br></br>
      <br></br>
      <ExpensesList/>
    </div>);
  }
}




