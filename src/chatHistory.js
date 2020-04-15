import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";

class chatHistory extends Component {
  state = {};
  render() {
    const chat = ["99", "ii", "kk", "ll", "ee", "qq", "rr"];
    return (
      <ReactBootstrap.Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Time</th>
            <th>Sender</th>
            <th>Receiver</th>
            <th>Message</th>
            <th>Room</th>
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

export default chatHistory;
