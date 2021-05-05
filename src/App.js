import React, { Component } from 'react';
import './App.css';
import PublicVacancies from './components/PublicVacancies'
import { Navbar, NavItem, Icon, Row, Col } from 'react-materialize';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          alignLinks="right"
          brand={<img src="images/hr-logo.png" alt="React Logo" href="#" style={{width: 50}}/>}
          id="mobile-nav"
          menuIcon={<Icon>menu</Icon>}
          options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          <NavItem href="">
            Vacancies
          </NavItem>
        </Navbar>

        <br></br>
        <br></br>
        
        <Row className="container center">
          <Col
            m={12}
            s={12}
          >
            <PublicVacancies />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
