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

      <table cellSpacing="15px">
        
        <tr>
          <td align="center">
            Id:
          </td>
          <td align="center">
            Name:
          </td>
          <td align="center">
            Salary:
          </td>
          <td align="center">
            Age:
          </td>
        </tr>

        {this.state.people.map(person =>
          <tr>
            <td align="center">
              {person.id}
            </td>
            <td align="center">
              {person.employee_name}
            </td>
            <td align="center">
              {person.employee_salary}$
            </td>
            <td align="center">
              {person.employee_age}
            </td>
          </tr>
        )}

      </table>
    )

  }

}