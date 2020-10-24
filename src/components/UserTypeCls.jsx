import React, { Component } from "react";
import ReactToExcel from "react-html-table-to-excel";
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
import { userInfo } from "os";
class UserTypeCls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addmodal: false,
      editmodal: false,
      addUserTypedata: {
        UserType: "",
        Rating: "",
        IsActive: true
      },
      editUserTypedata: {
        UserId: "",
        UserType: "",
        Rating: "",
        IsActive: true
      },    

      UserTypes: []
    };

    this.addtoggle = this.addtoggle.bind(this);
    this.edittoggle = this.edittoggle.bind(this);
  }

  refreshData() {
    fetch("http://localhost:25512/api/UserType/")
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          UserTypes: data.result
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }
  componentDidMount() {
    // alert("didmount");
    this.refreshData();
  }

  addtoggle() {
    this.setState({
      addmodal: !this.state.addmodal
    });
  }

  edittoggle() {
    this.setState({
      editmodal: !this.state.editmodal
    });
  }
  editUserType(UserId, UserType, Rating, IsActive) {
    this.setState({
      editUserTypedata: { UserId, UserType, Rating, IsActive },
      editmodal: !this.state.editmodal
    });
  }

  UpdateUserType() {
    let { UserId, UserType, Rating, IsActive } = this.state.editUserTypedata;

    axios
      .put("http://localhost:25512/api/UserType/" + UserId, {
        UserId,
        UserType,
        IsActive,
        Rating
      })
      .then(response => {
        this.refreshData();
        this.setState({
          editmodal: !this.state.editmodal,
          editUserTypedata: {
            UserId: "",
            UserType: "",
            Rating: "",
            IsActive: true
          }
        });
      });
  }
  addUserType() {
    axios
      .post("http://localhost:25512/api/UserType/", this.state.addUserTypedata)
      .then(response => {
        this.refreshData();
        this.setState({
          addmodal: !this.state.addmodal,
          addUserTypedata: {
            UserId: "",
            UserType: "",
            Rating: "",
            IsActive: true
          }
        });

        // console.log(response.data);
      });
  }
  deleteUserType(UserId) {
    // alert(UserId);
    axios
      .delete("http://localhost:25512/api/UserType/" + UserId)
      .then(response => {
        this.refreshData();
      });
  }

  render() {
    let UserTypess = this.state.UserTypes.map(User => {
      return (
        <tr key={User.UserId}>
          <td>{User.UserId}</td>
          <td>{User.UserType}</td>
          <td>{User.Rating}</td>
         <td>{User.IsActive === true ? "Active" : "InActive"}</td>

          <td>
            <Button
              color="success mr-2 "
              onClick={this.editUserType.bind(
                this,
                User.UserId,
                User.UserType,
                User.Rating,
                User.IsActive
              )}
            >
              Edit
            </Button>
            <Button
             // color="danger"
              color="success"
              className=" btn_isactive"
              onClick={this.deleteUserType.bind(this, User.UserId)}
            >
         {User.IsActive === true ? "Deactivate" : "Activate"}

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
          <ModalHeader toggle={this.addUserType}>Add User Type</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Usertype">UserType</Label>
              <Input
                id="Usertype"
                type="Text"
                value={this.state.addUserTypedata.UserType}
                onChange={e => {
                  let { addUserTypedata } = this.state;
                  addUserTypedata.UserType = e.target.value;
                  this.setState({ addUserTypedata });
                }}
                placeholder="Enter User Type"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleRating">Rating</Label>
              <Input
                type="Text"
                value={this.state.addUserTypedata.Rating}
                id="exampleRating"
                onChange={e => {
                  let { addUserTypedata } = this.state;
                  addUserTypedata.Rating = e.target.value;
                  this.setState({ addUserTypedata });
                }}
                placeholder="EnterReating"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary " onClick={this.addUserType.bind(this)}>
              Add User Type
            </Button>
            <Button color="secondary " onClick={this.addtoggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        <Modal
          isOpen={this.state.editmodal}
          toggle={this.edittoggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.editUserType}>Edit User Type</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="Usertype">UserType</Label>
              <Input
                id="Usertype"
                type="Text"
                value={this.state.editUserTypedata.UserType}
                onChange={e => {
                  let { editUserTypedata } = this.state;
                  editUserTypedata.UserType = e.target.value;
                  this.setState({ editUserTypedata });
                }}
                placeholder="Enter User Type"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleRating">Rating</Label>
              <Input
                type="Text"
                value={this.state.editUserTypedata.Rating}
                id="exampleRating"
                onChange={e => {
                  let { editUserTypedata } = this.state;
                  editUserTypedata.Rating = e.target.value;
                  this.setState({ editUserTypedata });
                }}
                placeholder="EnterReating"
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button color="primary " onClick={this.UpdateUserType.bind(this)}>
              Edit User Type
            </Button>
            <Button color="secondary" onClick={this.edittoggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>

        <h2>User Type Master</h2>
        <table>
          <tr>
            <td colSpan="2" align="left">
              <Button color="primary" onClick={this.addtoggle}>
                Add User Type
              </Button>
            </td>
            <td colSpan="2" align="right">
              <ReactToExcel
                table="tt1"
                filename="hh.xlsx"
                sheet="UserType"
                ButtonText="Export"
              />
            </td>
          </tr>
        </table>
        <table id="tt1">
          <thead>
            <td>#</td>
            <td>UserType</td>
            <td>Rating</td>
            <td>IsActive</td>
            <td>Action</td>
          </thead>
          <tbody>{UserTypess}</tbody>
        </table>
      </div>
    );
  }
}

export default UserTypeCls;
