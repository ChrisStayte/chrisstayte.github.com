import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <React.Fragment className='App'>
      <Container>
        <Col>
          <Row>
            <h1 className='align-center'>Projects</h1>
          </Row>
          <Row>
            <p className='text-left'>
              This is the main page where you can see all of the projects I have
              created. I will try to list them out to see how I have evolved
              over time.
            </p>
          </Row>
          <Row>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <a href='https://chrisstayte.app/unitconverter'>
                      Unit Converter
                    </a>
                  </td>
                  <td>NA</td>
                </tr>
              </tbody>
            </Table>
          </Row>
        </Col>
      </Container>
    </React.Fragment>
  );
}

export default App;
