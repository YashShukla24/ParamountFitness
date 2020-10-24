import React, { Component } from 'react';
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
import axios from "axios";
class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            addmodal: false,            
            addResourcedata: {
                employee_name: "",
                employee_salary: "",
                employee_age: ""
            },  
                ResourcesData: []
            
         }
         this.addtoggle = this.addtoggle.bind(this);
    }
    addtoggle() {
        this.setState({
          addmodal: !this.state.addmodal
        });
      }
      addResourcedata() {
          
        axios
          .post("http://dummy.restapiexample.com/api/v1/create", this.state.addResourcedata)
          .then(response => {
            this.refreshData();
            this.setState({
              addmodal: !this.state.addmodal,
              addResourcedata: {
                employee_name: "",
                employee_salary: "",
                employee_age: ""
                
              }
            });
    
            // console.log(response.data);
          });
      }

    refreshData()
    {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(response => {
          return response.json();
        })
        .then(data => {             
          this.setState({                
              ResourcesData: data.data
          });
        })
        .catch(error => this.setState({ error, isLoading: false }));
    }
    
      componentDidMount() {
        this.refreshData();
        
      }
   
    render() {       

        let resources = this.state.ResourcesData.map(RS => {
            return (
              <tr key={RS.id}>
                <td>{RS.id}</td>
                <td>{RS.employee_name}</td>
                <td>{RS.employee_salary}</td>
                <td>{RS.employee_age}</td>
               </tr>
            );
          });

          return (
            <div className="App-container"> 
<Modal
          isOpen={this.state.addmodal}
          toggle={this.addtoggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.addResourcedata}>Add Resources Data </ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Ename">EmployeeName</Label>
              <Input
                id="Ename"
                type="Text"
                value={this.state.addResourcedata.employee_name}
                onChange={e => {
                  let { addResourcedata } = this.state;
                  addResourcedata.employee_name = e.target.value;
                  this.setState({ addResourcedata });
                }}
                placeholder="Enter Resource Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Sal">Salary</Label>
              <Input
                type="Text"
                value={this.state.addResourcedata.employee_salary}
                id="Sal"
                onChange={e => {
                  let { addResourcedata } = this.state;
                  addResourcedata.employee_salary = e.target.value;
                  this.setState({ addResourcedata });
                }}
                placeholder="Enter Salary"
              />
            </FormGroup>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input
                type="Text"
                value={this.state.addResourcedata.employee_age}
                id="age"
                onChange={e => {
                  let { addResourcedata } = this.state;
                  addResourcedata.employee_age = e.target.value;
                  this.setState({ addResourcedata });
                }}
                placeholder="Enter Age"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary " onClick={this.addResourcedata.bind(this)}>
              Add Resourse
            </Button>
            <Button color="secondary " onClick={this.addtoggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>





              <h2>View Resources</h2> 
              <table>
              <tr>
            <td colSpan="2" align="left">
              <Button color="primary" onClick={this.addtoggle} >
                Add New Resources
              </Button>
            </td>
            <td colSpan="2" align="right">
              <ReactToExcel
                table="Resources"
                filename="Res"
                sheet="Resourcesdata"
                ButtonText="Export"
              />
            </td>
          </tr>
                  </table>            
              <table id="Resources">
                <thead>
                  <td>#</td>
                  <td>Employee Name</td>
                  <td>Employee Salary</td>                 
                  <td>Employee Age</td>                 
                </thead>
                <tbody>{resources}</tbody>
              </table>
            </div>
          );

        
    }
}
 
export default Resources;