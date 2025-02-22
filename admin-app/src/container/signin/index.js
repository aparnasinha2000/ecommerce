import React from "react";
import Layout from "../../components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from '../../components/UI/input';
/**
 * @author
 * @function Signin
 **/

const Signin = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{marginTop: '80px'}}>
          <Col md={{span:6, offset:3}}> 
          <Form>
          <Input
              Label="Email Id"
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
            
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
        </Row>
       
      </Container>
    </Layout>
  );
};

export default Signin;
