import React from 'react'
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from '../../components/UI/input';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <Layout>
      <Container>
        <Row style={{marginTop: '80px'}}>
          <Col md={{span:6, offset:3}}> 
          <Form>
            <Row>
              <Col md={6}>
              <Input
              Label="First Name"
              placeholder="First Name"
              value=""
              type="text"
              onChange= {()=> {}}
              />
              </Col>

              <Col md={6}>
              <Input
              Label="Last Name"
              placeholder="Last Name"
              value=""
              type="text"
              onChange= {()=> {}}
              />
              </Col>
            </Row>
            <Input
              Label="Email"
              placeholder="Email"
              value=""
              type="email"
              onChange= {()=> {}}
              />

            <Input
              Label="Password"
              placeholder="Password"
              value=""
              type="password"
              onChange= {()=> {}}
              />
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember Me" />
            </Form.Group>
           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
        </Row>
       
      </Container>
    </Layout>
   )

 }

export default Signup