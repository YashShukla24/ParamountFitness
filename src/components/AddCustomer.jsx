import React, { Component } from 'react';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactToExcel from "react-html-table-to-excel";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
class AddCustomer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserTypes: []
         }
    }
    refreshData() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
          .then(response => {
            return response.json();
          })
          .then(data => {             
            this.setState({                
              UserTypes: data.data
            });
          })
          .catch(error => this.setState({ error, isLoading: false }));
      }
      componentDidMount() {
        this.refreshData();
      }
      render() {
        let UserTypess = this.state.UserTypes.map(User => {
          return (
            <tr key={User.id}>
              <td>{User.id}</td>
              <td>{User.employee_name}</td>
              <td>{User.employee_salary}</td>
              <td>{User.employee_age}</td>
             </tr>
          );
        });
        return (
            <div className="App-container">            
              <h2>View Employee</h2>             
              <table id="tt1">
                <thead>
                  <td>#</td>
                  <td>EmployeeName</td>
                  <td>EmployeeSalary</td>                 
                  <td>EmployeeAge</td>                 
                </thead>
                <tbody>{UserTypess}</tbody>
              </table>
            </div>
          );
    }
} 
export default AddCustomer;