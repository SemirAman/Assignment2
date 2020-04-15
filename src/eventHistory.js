import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

class eventHistory extends Component {
  state = {};
  render() {
    const chat = ["99", "ii", "kk", "ll", "ee", "qq", "rr"];
    return (
      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Type</th>
            <th>Date</th>
            <th>Time</th>
            <th>User</th>
            <th>EventID</th>
            <th>PPID</th>
          </tr>
        </thead>
        <tbody>
          {chat.map((item) => {
            return <td>{item}</td>;
          })}
        </tbody>
      </ReactBootstrap.Table>
    );
  }
}

export default eventHistory;
