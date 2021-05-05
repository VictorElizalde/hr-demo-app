import React, { Component } from 'react'
import axios from 'axios'
import { Table } from 'react-materialize';

class PublicVacancies extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vacancies: []
    }
  }

  getVacancies() {
    axios.get('/api/v1/list_vacancies')
    .then(response => {
      this.setState({vacancies: response.data.vacancies})
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getVacancies()
  }

  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th data-field="id">
              Title
            </th>
            <th data-field="name">
              Company
            </th>
            <th data-field="price">
              Salary Range
            </th>
          </tr>
        </thead>
        <tbody>
        {this.state.vacancies.map((vacancy) => {
          return(
            <tr className="vacancy" vacancy={vacancy} key={vacancy.id}>
              <td>{vacancy.title}</td>
              <td>{vacancy.company_name}</td>
              <td>{vacancy.salary_range}</td>
            </tr>
          )       
        })} 
        </tbody>
      </Table>
    )
  }
}

export default PublicVacancies
