import React from 'react';
import {  Button, Panel, Col, Form, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import { connect } from 'react-redux'

let FormPost = ({ dispatch }) => {

  const titleHeader = (
    <h3>Posts Form</h3>
  );
  let title
  let body
  return (

      <div>
       <Panel header={titleHeader} bsStyle="primary">
         <Form horizontal onSubmit={(e) => {
           e.preventDefault();
           console.log(body);
           console.log(title.value);
           dispatch({type: 'ADD_POST'});
         }}>
            <FormGroup controlId="formHorizontalTitle">
              <Col componentClass={ControlLabel} sm={2}>
                Title
              </Col>
              <Col sm={10}>
                <FormControl type="text" ref={ node => {title = node }} placeholder="Title" />
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalBody">
              <Col componentClass={ControlLabel} sm={2}>
                Body
              </Col>
              <Col sm={10}>
                <FormControl type="text" ref={ node => { body = node }} placeholder="Body" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit" bsStyle="primary">
                  Save
                </Button>
              </Col>
            </FormGroup>
          </Form>
       </Panel>
      </div>

    );

}

FormPost = connect()(FormPost);

export default FormPost;
