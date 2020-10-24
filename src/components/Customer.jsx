import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import {
  Button,
  Form,
  CustomInput,
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

class Customer extends Component {
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
        FranchiseName: "",
        CreatedBy: "",
        CreatedByName: "",
        CreatedDate: "",
        ModifiedBy: "",
        ModifiedByName: "",
        ModifiedDate: "",
        Status: true
      },
      editCustomerdata: {
        CustomerId: "",
        CustomerName: "",
        ContactNo: "",
        EmailId: "",
        Address: "",
        FranchiseId: "",
        FranchiseName: "",
        CreatedBy: "",
        CreatedByName: "",
        CreatedDate: "",
        ModifiedBy: "",
        ModifiedByName: "",
        ModifiedDate: "",
        Status: ""
      },

      editmodal: false,
      Customres: [],
      Franchise: [],
      Users: [],
      deleteCustomer: []
    };
    this.addtoggle = this.addtoggle.bind(this);
    this.edittoggle = this.edittoggle.bind(this);
  }

  addtoggle() {
    //alert("hi");
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
    FranchiseName,
    CreatedBy,
    CreatedByName,
    CreatedDate,
    ModifiedBy,
    ModifiedByName,
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
        FranchiseName,
        CreatedBy,
        CreatedByName,
        CreatedDate,
        ModifiedBy,
        ModifiedByName,
        ModifiedDate,
        Status
      },
      editmodal: !this.state.editmodal
    });
  }
  UpdateCustomer() {
    // let {
    //   CustomerId,
    //   CustomerName,
    //   ContactNo,
    //   EmailId,
    //   Address,
    //   FranchiseId,
    //   CreatedBy,
    //   CreatedDate,
    //   ModifiedBy,
    //   ModifiedDate,
    //   Status
    // } = this.state.editCustomerdata;

    axios
      .put(
        "http://localhost:25512/api/Customer/UpdateCustomer/",
        this.state.editCustomerdata
      )
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
            CreatedByName: "",
            CreatedDate: "",
            ModifiedBy: "",
            ModifiedByName: "",
            ModifiedDate: "",
            Status: false
          }
        });
      });
  }

  addCustomers() {
    axios
      .post(
        "http://localhost:25512/api/Customer/PutCustomers/",
        this.state.addCustomerdata
      )
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
            FranchiseName: "",
            CreatedBy: "",
            CreatedByName: "",
            CreatedDate: "",
            ModifiedBy: "",
            ModifiedByName: "",
            ModifiedDate: "",
            Status: false
          }
        });
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
  getAllFranchise() {
    fetch("http://localhost:25512/api/Customer/GetAllFranhMaster/")
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

  getAllUser() {
    fetch("http://localhost:25512/api/Customer/GetAllUserMaster/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          Users: data.result
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  deleteCustomers(CustomerId) {
    alert(`record no. ${CustomerId} deleted`);
    let st = this.state.deleteCustomer.Status === true ? "False" : "true";
    axios
      .put(
        "http://localhost:25512/api/Customer/UpdateCustomer/",
        this.state.editCustomer
      )
      .then(response => {
        this.refreshData();
        this.setState({
          editCustomer: {
            CustomerId: "",
            Status: st
          }
        });
      });
  }
  // deleteCustomers(CustomerId) {
  //   axios
  //     .delete(
  //       "http://localhost:25512/api/Customer/DeleteCustomer?Id=" + CustomerId
  //     )
  //     .then(response => {
  //       this.refreshData();
  //     });
  // }

  componentDidMount() {
    this.refreshData();
    this.getAllFranchise();
    this.getAllUser();
  }

  render() {
    const columns = [
      {
        Header: "CustomerId",
        accessor: "CustomerId",
        width: 150,
        style: {
          textAlign: "center"
        }
      },
      {
        Header: "CustomerName",
        accessor: "CustomerName",
        width: 150
      },
      {
        Header: "ContactNo",
        accessor: "ContactNo",
        sort: "asc",
        sortable: false
      },
      {
        Header: "EmailId",
        accessor: "EmailId",
        sort: "asc",
        width: 150
      },
      {
        Header: "Address",
        accessor: "Address",
        sort: "asc",
        width: 150
      },
      {
        Header: "FranchiseName",
        accessor: "FranchiseName",
        sort: "asc",
        width: 150
      },
      {
        Header: "Status",
        accessor: "Status",
        sort: "asc",
        width: 150
      },
      {
        Header: "Action",
        Cell: props => {
          return (
            <button
              color="danger"
              onClick={this.deleteCustomers.bind(this, this.state.CustomerId)}
            >
              x
            </button>
          );
        }
      }
    ];

    return (
      <div>
        <ReactTable
          filterable
          columns={columns}
          data={this.state.Customres}
          defaultPageSize={7}
          showPaginationTop={true}
        />
      </div>
    );
    //let statuss = this.state.editCustomerdata.Status == true ? "true" : "false";
    // <td>{Cust.Status === true ? "Active" : "InActive"}</td>

    // let Customres = this.state.Customres.map(Cust => {
    //   return (
    //     <tr key={Cust.CustomerId}>
    //       <td>{Cust.CustomerId}</td>
    //       <td>{Cust.CustomerName}</td>
    //       <td>{Cust.ContactNo}</td>
    //       <td>{Cust.EmailId}</td>
    //       <td>{Cust.Address}</td>
    //       <td>{Cust.FranchiseName}</td>
    //       <td>{Cust.Status === true ? "Active" : "InActive"}</td>
    //       <td>
    //         <Button
    //           color="success mr-2 "
    //           onClick={this.editCustomer.bind(
    //             this,
    //             Cust.CustomerId,
    //             Cust.CustomerName,
    //             Cust.ContactNo,
    //             Cust.EmailId,
    //             Cust.Address,
    //             Cust.FranchiseId,
    //             Cust.FranchiseName,
    //             Cust.CreatedBy,
    //             Cust.CreatedByName,
    //             Cust.CreatedDate,
    //             Cust.ModifiedBy,
    //             Cust.ModifiedByName,
    //             Cust.ModifiedDate,
    //             Cust.Status
    //           )}
    //         >
    //           Edit
    //         </Button>

    //         <Button
    //           color="danger"
    //           color="success"
    //           onClick={this.deleteCustomers.bind(
    //             this,
    //             Cust.CustomerId,
    //             Cust.Status
    //           )}
    //         >
    //           {Cust.Status === true ? "InActive" : "Active"}
    //         </Button>
    //       </td>
    //     </tr>
    //   );
    // });
    //   <div className="App-container">
    //     <Modal
    //       isOpen={this.state.addmodal}
    //       toggle={this.addtoggle}
    //       // className={this.props.className}
    //       className="modal-dialog modal-lg overlay-content "
    //     >
    //       <ModalHeader toggle={this.addCustomers}>Add New Customer</ModalHeader>
    //       <ModalBody>
    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">Customer Name</Label>
    //           <Input
    //             id="CustomerName"
    //             type="Text"
    //             value={this.state.addCustomerdata.CustomerName}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.CustomerName = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter Customer Name"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="ContactNo">Contact No</Label>
    //           <Input
    //             id="ContactNo"
    //             type="number"
    //             value={this.state.addCustomerdata.ContactNo}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.ContactNo = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter Contact No"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="EmailId">Email Id</Label>
    //           <Input
    //             id="EmailId"
    //             type="Text"
    //             value={this.state.addCustomerdata.EmailId}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.EmailId = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter EmailId"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="Address"> Address</Label>
    //           <Input
    //             id="Address"
    //             type="Text"
    //             value={this.state.addCustomerdata.Address}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.Address = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter Address"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">FranchiseName</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.addCustomerdata.FranchiseId}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.FranchiseId = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //           >
    //             {this.state.Franchise.map(f => {
    //               return (
    //                 <option className="form-control" value={f.Franchise_Id}>
    //                   {f.Franchise_Name}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">CreatedBy</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.addCustomerdata.CreatedBy}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.CreatedBy = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //           >
    //             {this.state.Users.map(u => {
    //               return (
    //                 <option className="form-control" value={u.AdminLoginId}>
    //                   {u.AdminUserName}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>

    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">CreatedDate</Label>
    //           <Input
    //             id="CreatedDate"
    //             type="date"
    //             value={this.state.addCustomerdata.CreatedDate}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.CreatedDate = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter CreatedDate"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">ModifiedBy</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.addCustomerdata.ModifiedBy}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.ModifiedBy = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //           >
    //             {this.state.Users.map(u => {
    //               return (
    //                 <option className="form-control" value={u.AdminLoginId}>
    //                   {u.AdminUserName}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">ModifiedDate</Label>
    //           <Input
    //             id="ModifiedDate"
    //             type="date"
    //             value={this.state.addCustomerdata.ModifiedDate}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.ModifiedDate = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter ModifiedDate"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">Status</Label>
    //           <select
    //             name="Status"
    //             className="form-control"
    //             value={this.state.addCustomerdata.Status}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.Status = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //           >
    //             <option className="form-control" value="true">
    //               true
    //             </option>
    //             <option className="form-control" value="false">
    //               false
    //             </option>
    //           </select>
    //         </FormGroup>

    //         {/* <FormGroup className="col-md-6">
    //           <Label for="Status">Status</Label>
    //           <Input
    //             id="Status"
    //             type="Text"
    //             value={this.state.addCustomerdata.Status}
    //             onChange={e => {
    //               let { addCustomerdata } = this.state;
    //               addCustomerdata.Status = e.target.value;
    //               this.setState({ addCustomerdata });
    //             }}
    //             placeholder="Enter Status"
    //           />
    //         </FormGroup> */}
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button color="primary " onClick={this.addCustomers.bind(this)}>
    //           Add New Customer
    //         </Button>
    //         <Button color="secondary " onClick={this.addtoggle}>
    //           Cancel
    //         </Button>
    //       </ModalFooter>
    //     </Modal>
    //     {/* Edit Model Starts */}
    //     <Modal
    //       isOpen={this.state.editmodal}
    //       toggle={this.edittoggle}
    //       className="modal-dialog modal-lg overlay-content "
    //     >
    //       <ModalHeader toggle={this.editCustomer}>Edit Customer</ModalHeader>
    //       <ModalBody>
    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">Customer Name</Label>
    //           <Input
    //             id="CustomerName"
    //             type="Text"
    //             value={this.state.editCustomerdata.CustomerName}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.CustomerName = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter Customer Name"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="ContactNo">Contact No</Label>
    //           <Input
    //             id="ContactNo"
    //             type="Text"
    //             value={this.state.editCustomerdata.ContactNo}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.ContactNo = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter Contact No"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="EmailId">Email Id</Label>
    //           <Input
    //             id="EmailId"
    //             type="Text"
    //             value={this.state.editCustomerdata.EmailId}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.EmailId = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter EmailId"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="Address"> Address</Label>
    //           <Input
    //             id="Address"
    //             type="Text"
    //             value={this.state.editCustomerdata.Address}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.Address = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter Address"
    //           />
    //         </FormGroup>

    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">FranchiseName</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.editCustomerdata.FranchiseId}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.FranchiseId = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //           >
    //             {this.state.Franchise.map(f => {
    //               return (
    //                 <option value={f.Franchise_Id} className="form-control">
    //                   {" "}
    //                   {f.Franchise_Name}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>

    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">CreatedBy</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.editCustomerdata.CreatedBy}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.CreatedBy = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //           >
    //             {this.state.Users.map(u => {
    //               return (
    //                 <option className="form-control" value={u.AdminLoginId}>
    //                   {u.AdminUserName}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>

    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">CreatedDate</Label>
    //           <Input
    //             id="CreatedDate"
    //             type="Text"
    //             value={this.state.editCustomerdata.CreatedDate}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.CreatedDate = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter CreatedDate"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">ModifiedBy</Label>
    //           <select
    //             className="form-control"
    //             value={this.state.editCustomerdata.ModifiedBy}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.ModifiedBy = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //           >
    //             {this.state.Users.map(u => {
    //               return (
    //                 <option className="form-control" value={u.AdminLoginId}>
    //                   {u.AdminUserName}
    //                 </option>
    //               );
    //             })}
    //           </select>
    //         </FormGroup>

    //         <FormGroup className="col-md-6">
    //           <Label for="CustomerName">ModifiedDate</Label>
    //           <Input
    //             id="ModifiedDate"
    //             type="Text"
    //             value={this.state.editCustomerdata.ModifiedDate}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.ModifiedDate = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             placeholder="Enter ModifiedDate"
    //           />
    //         </FormGroup>
    //         <FormGroup className="col-md-6">
    //           <Label for="exampleSelect">Status</Label>
    //           <input
    //             name="Status"
    //             type="checkbox"
    //             value={this.state.editCustomerdata.Status}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.Status = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //             checked={this.state.editCustomerdata.Status}
    //           />
    //           {/* <select
    //             name="Status"
    //             className="form-control"
    //             value={this.state.editCustomerdata.Status}
    //             onChange={e => {
    //               let { editCustomerdata } = this.state;
    //               editCustomerdata.Status = e.target.value;
    //               this.setState({ editCustomerdata });
    //             }}
    //           >
    //             <option className="form-control" value={statuss}>
    //               {statuss}
    //             </option>
    //           </select> */}
    //         </FormGroup>
    //       </ModalBody>

    //       <ModalFooter>
    //         <Button color="primary " onClick={this.UpdateCustomer.bind(this)}>
    //           Edit Customer
    //         </Button>
    //         <Button color="secondary " onClick={this.edittoggle}>
    //           Cancel
    //         </Button>
    //       </ModalFooter>
    //     </Modal>

    //     <h2>Customers</h2>
    //     <table>
    //       <tr>
    //         <td colSpan="4" align="left">
    //           <Button color="primary" onClick={this.addtoggle}>
    //             Add New Customer
    //           </Button>
    //         </td>
    //       </tr>
    //     </table>
    //     <table>
    //       <thead>
    //         <td>#</td>
    //         <td>Name</td>
    //         <td>ContactNo</td>
    //         <td>EmailId</td>
    //         <td>Address</td>
    //         <td>FranchiseName</td>
    //         <td>Status</td>
    //         <td>Action</td>
    //       </thead>
    //       <tbody>{Customres}</tbody>
    //     </table>
    //   </div>
    //);
  }
}

export default Customer;
