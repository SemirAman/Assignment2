import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "react-bootstrap";
import "./App.css";

class Rooms extends Component {
  state = {};
  render() {
    const chat = ["99", "ii", "kk", "ll", "ee", "qq"];

    return (
      <React.Fragment>
        <ReactBootstrap.Form>
          <input placeholder="RoomName"></input>
          <Form as="select">
            <option>Active</option>
            <option>Inactive</option>
          </Form>

          <Button variant="primary" type="submit">
            Add New Room
          </Button>
        </ReactBootstrap.Form>

        <ReactBootstrap.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>Room</th>
              <th>Created Date</th>
              <th>Edited Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {chat.map((item) => {
              return <td>{item}</td>;
            })}
          </tbody>
        </ReactBootstrap.Table>
      </React.Fragment>
    );
  }
}

export default Rooms;
