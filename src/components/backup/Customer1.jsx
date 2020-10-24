import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
class Customer1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addmodal: false,
      addCustomerdata: {
        CustomerName: "",
        ContactNo: "",
        EmailId: "",
        Address: "",
        FranchiseId: "",
        CreatedBy: "",
        CreatedDate: "",
        ModifiedBy: "",
        ModifiedDate: "",
        Status: ""
      },
      editCustomerdata: {
        CustomerId: "",
        CustomerName: "",
        ContactNo: "",
        EmailId: "",
        Address: "",
        FranchiseId: "",
        CreatedBy: "",
        CreatedDate: "",
        ModifiedBy: "",
        ModifiedDate: "",
        Status: ""
      },
      editmodal: false,
      Customres: [],
      Franchise: []
    };
    this.addtoggle = this.addtoggle.bind(this);
    this.edittoggle = this.edittoggle.bind(this);
  }
  addtoggle() {
    alert("hi");
    this.setState({
      addmodal: !this.state.addmodal
    });
  }
  edittoggle() {
    this.setState({
      editmodal: !this.state.editmodal
    });
  }
  editCustomer(
    CustomerId,
    CustomerName,
    ContactNo,
    EmailId,
    Address,
    FranchiseId,
    CreatedBy,
    CreatedDate,
    ModifiedBy,
    ModifiedDate,
    Status
  ) {
    this.setState({
      editCustomerdata: {
        CustomerId,
        CustomerName,
        ContactNo,
        EmailId,
        Address,
        FranchiseId,
        CreatedBy,
        CreatedDate,
        ModifiedBy,
        ModifiedDate,
        Status
      },
      editmodal: !this.state.editmodal
    });
  }
  UpdateCustomer() {
    let {
      CustomerId,
      CustomerName,
      ContactNo,
      EmailId,
      Address,
      FranchiseId,
      CreatedBy,
      CreatedDate,
      ModifiedBy,
      ModifiedDate,
      Status
    } = this.state.editCustomerdata;

    axios
      .put("http://localhost:25512/api/Customer/UpdateCustomer" + CustomerId, {
        CustomerId,
        CustomerName,
        ContactNo,
        EmailId,
        Address,
        FranchiseId,
        CreatedBy,
        CreatedDate,
        ModifiedBy,
        ModifiedDate,
        Status
      })
      .then(response => {
        this.refreshData();
        this.setState({
          editmodal: !this.state.editmodal,
          editCustomerdata: {
            CustomerId: "",
            CustomerName: "",
            ContactNo: "",
            EmailId: "",
            Address: "",
            FranchiseId: "",
            CreatedBy: "",
            CreatedDate: "",
            ModifiedBy: "",
            ModifiedDate: "",
            Status: ""
          }
        });
      });
  }

  addCustomers() {
    axios
      .post("http://localhost:25512/api/Customer/", this.state.addCustomerdata)
      .then(response => {
        this.refreshData();
        this.setState({
          addmodal: !this.state.addmodal,
          addCustomerdata: {
            CustomerName: "",
            ContactNo: "",
            EmailId: "",
            Address: "",
            FranchiseId: "",
            CreatedBy: "",
            CreatedDate: "",
            ModifiedBy: "",
            ModifiedDate: "",
            Status: ""
          }
        });
      });
  }
  deleteCustomer(CustomerId) {
    axios
      .delete("http://localhost:25512/api/Customer/" + CustomerId)
      .then(response => {
        this.refreshData();
      });
  }
  refreshData() {
    fetch("http://localhost:25512/api/Customer/GetCustomer")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          Customres: data.result
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  Franchiseget() {
    fetch("http://localhost:25512/api/Customer/GetAllFranhMaster")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          Franchise: data.result
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.refreshData();
  }
  render() {
    let Customres = this.state.Customres.map(Cust => {
      return (
        <tr key={Cust.CustomerId}>
          <td>{Cust.CustomerId}</td>
          {/* <td>{Franchisedrop}</td> */}
          <td>{Cust.CustomerName}</td>
          <td>{Cust.ContactNo}</td>
          <td>{Cust.EmailId}</td>
          <td>{Cust.Address}</td>
          <td key={this.state.Franchise.Franchise_Id}>
            {this.state.Franchise.Franchise_Name}
          </td>
          <td>{Cust.Status === true ? "Active" : "InActive"}</td>
          <td>
            <Button
              color="success mr-2 "
              onClick={this.editCustomer.bind(
                this,
                Cust.CustomerId,
                Cust.CustomerName,
                Cust.ContactNo,
                Cust.EmailId,
                Cust.Address,
                Cust.FranchiseId,
                Cust.CreatedBy,
                Cust.CreatedDate,
                Cust.ModifiedBy,
                Cust.ModifiedDate,
                Cust.Status
              )}
            >
              Edit
            </Button>
            <Button
              color="danger"
              color="success"
              onClick={this.deleteCustomer.bind(this, Cust.CustomerId)}
            >
              Delete
            </Button>
          </td>
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
          <ModalHeader toggle={this.addCustomers}>Add New Customer</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="CustomerName">Customer Name</Label>
              <Input
                id="CustomerName"
                type="Text"
                value={this.state.addCustomerdata.CustomerName}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.CustomerName = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ContactNo">Contact No</Label>
              <Input
                id="ContactNo"
                type="Text"
                value={this.state.addCustomerdata.ContactNo}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.ContactNo = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter Contact No"
              />
            </FormGroup>
            <FormGroup>
              <Label for="EmailId">Email Id</Label>
              <Input
                id="EmailId"
                type="Text"
                value={this.state.addCustomerdata.EmailId}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.EmailId = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter EmailId"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Address"> Address</Label>
              <Input
                id="Address"
                type="Text"
                value={this.state.addCustomerdata.Address}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.Address = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect">Franchise</Label>

              <Input type="select" name="select" id="exampleSelect">
                {this.state.Franchise.map(f => {
                  return (
                    <option key={f.Franchise_Id}>{f.Franchise_Name}</option>
                  );
                })}
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">Franchise Name</Label>
              <Input
                id="FranchiseId"
                type="Text"
                value={this.state.addCustomerdata.FranchiseId}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.FranchiseId = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter FranchiseId"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CreatedBy">CreatedBy</Label>
              <Input
                id="CreatedBy"
                type="Text"
                value={this.state.addCustomerdata.CreatedBy}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.CreatedBy = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter CreatedBy"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">CreatedDate</Label>
              <Input
                id="CreatedDate"
                type="Text"
                value={this.state.addCustomerdata.CreatedDate}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.CreatedDate = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter CreatedDate"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">ModifiedBy</Label>
              <Input
                id="ModifiedBy"
                type="Text"
                value={this.state.addCustomerdata.ModifiedBy}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.ModifiedBy = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter ModifiedBy"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">ModifiedDate</Label>
              <Input
                id="ModifiedDate"
                type="Text"
                value={this.state.addCustomerdata.ModifiedDate}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.ModifiedDate = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter ModifiedDate"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Status">Status</Label>
              <Input
                id="Status"
                type="Text"
                value={this.state.addCustomerdata.Status}
                onChange={e => {
                  let { addCustomerdata } = this.state;
                  addCustomerdata.Status = e.target.value;
                  this.setState({ addCustomerdata });
                }}
                placeholder="Enter Status"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary " onClick={this.addCustomers.bind(this)}>
              Add New Customer
            </Button>
            <Button color="secondary " onClick={this.addtoggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        {/* Edit Model Starts */}
        <Modal
          isOpen={this.state.editmodal}
          toggle={this.edittoggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.editCustomer}>Edit Customer</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="CustomerName">Customer Name</Label>
              <Input
                id="CustomerName"
                type="Text"
                value={this.state.editCustomerdata.CustomerName}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.CustomerName = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter Customer Name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="ContactNo">Contact No</Label>
              <Input
                id="ContactNo"
                type="Text"
                value={this.state.editCustomerdata.ContactNo}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.ContactNo = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter Contact No"
              />
            </FormGroup>
            <FormGroup>
              <Label for="EmailId">Email Id</Label>
              <Input
                id="EmailId"
                type="Text"
                value={this.state.editCustomerdata.EmailId}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.EmailId = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter EmailId"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Address"> Address</Label>
              <Input
                id="Address"
                type="Text"
                value={this.state.editCustomerdata.Address}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.Address = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter Address"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">FranchiseId</Label>
              <Input
                id="FranchiseId"
                type="Text"
                value={this.state.editCustomerdata.FranchiseId}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.FranchiseId = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter FranchiseId"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CreatedBy">CreatedBy</Label>
              <Input
                id="CreatedBy"
                type="Text"
                value={this.state.editCustomerdata.CreatedBy}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.CreatedBy = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter CreatedBy"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">CreatedDate</Label>
              <Input
                id="CreatedDate"
                type="Text"
                value={this.state.editCustomerdata.CreatedDate}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.CreatedDate = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter CreatedDate"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">ModifiedBy</Label>
              <Input
                id="ModifiedBy"
                type="Text"
                value={this.state.editCustomerdata.ModifiedBy}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.ModifiedBy = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter ModifiedBy"
              />
            </FormGroup>
            <FormGroup>
              <Label for="CustomerName">ModifiedDate</Label>
              <Input
                id="ModifiedDate"
                type="Text"
                value={this.state.editCustomerdata.ModifiedDate}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.ModifiedDate = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter ModifiedDate"
              />
            </FormGroup>
            <FormGroup>
              <Label for="Status">Status</Label>
              <Input
                id="Status"
                type="Text"
                value={this.state.editCustomerdata.Status}
                onChange={e => {
                  let { editCustomerdata } = this.state;
                  editCustomerdata.Status = e.target.value;
                  this.setState({ editCustomerdata });
                }}
                placeholder="Enter Status"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary " onClick={this.UpdateCustomer.bind(this)}>
              Edit Customer
            </Button>
            <Button color="secondary " onClick={this.edittoggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <h2>Customers</h2>
        <table>
          <tr>
            <td colSpan="4" align="left">
              <Button color="primary" onClick={this.addtoggle}>
                Add New Customer
              </Button>
            </td>
          </tr>
        </table>
        <table>
          <thead>
            <td>#</td>
            <td>Name</td>
            <td>ContactNo</td>
            <td>EmailId</td>
            <td>Address</td>
            <td>Franchise</td>
            <td>Status</td>
            <td>Action</td>
          </thead>
          <tbody>{Customres}</tbody>
        </table>
      </div>
    );
  }
}

export default Customer1;
