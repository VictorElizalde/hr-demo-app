import React, { Component } from 'react'
import update from 'immutability-helper'

class CompaniesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      companies: []
    }
  }

  getCompanies() {
    axios.get('/api/v1/companies')
    .then(response => {
      this.setState({companies: response.data})
    })
    .catch(error => console.log(error))
  }

  createCompany = (e) => {
    if (e.key === 'Enter') {
      axios.post('/api/v1/companies', {company: {
        name: e.target.value,
        contactName: e.target.value,
        contactLastName: e.target.value,
        contactPhone: e.target.value,
        contactEmail: e.target.value,
        website: e.target.value
      }})
      .then(response => {
        const companies = update(this.state.companies, {
          $splice: [[0, 0, response.data]]
        })
        this.setState({
          companies: companies
        })
      })
      .catch(error => console.log(error))      
    }    
  }

  updateCompany = (e, id) => {
    axios.put(`/api/v1/companies/${id}`, {company: {
      name: e.target.value,
      contactName: e.target.value,
      contactLastName: e.target.value,
      contactPhone: e.target.value,
      contactEmail: e.target.value,
      website: e.target.value
    }})
    .then(response => {
      const companyIndex = this.state.companies.findIndex(x => x.id === response.data.id)
      const companies = update(this.state.companies, {
        [companyIndex]: {$set: response.data}
      })
      this.setState({
        companies: companies
      })
    })
    .catch(error => console.log(error))      
  }

  deleteCompany = (id) => {
    axios.delete(`/api/v1/companies/${id}`)
    .then(response => {
      const companyIndex = this.state.companies.findIndex(x => x.id === id)
      const companies = update(this.state.companies, {
        $splice: [[companyIndex, 1]]
      })
      this.setState({
        companies: companies
      })
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getCompanies()
  }

  render() {
    return (
        
    )
  }
}

export default CompaniesContainer