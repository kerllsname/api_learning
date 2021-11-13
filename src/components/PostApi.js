import React from "react";
import axios from "axios";

export default class PeopleList extends React.Component {
  state = {
    name: "",
  };
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name: this.state.name,
    };

    axios
      .post("http://dummy.restapiexample.com/api/v1/create", { user })
      .then((res) => {
        console.log(res);
      });
  };

  render() {
    return (
      <div align="center">
        <form onSubmit={this.handleSubmit}>
          <label>
            Employee Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Employee Salary:
            <input type="number" onChange={this.handleChange} />
          </label>
          <br />
          <button type="submit">Add employee</button>
        </form>
      </div>
    );
  }
}
