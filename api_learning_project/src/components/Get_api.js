import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    people: []
  }
  componentDidMount() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(res => {
        const people = res.data.data;
        this.setState({ people });
      })
  }

  render() {
    return (
      <ol>
        {this.state.people.map(person => <li>{person.employee_name}</li>)}
      </ol>
    )
  }
}