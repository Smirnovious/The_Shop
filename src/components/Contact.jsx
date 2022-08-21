import React from 'react'
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr/>
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img src="\assets\questions.jpg" alt="" height="400px" width="400px" />
          </div>
          <div className="col-md-6">
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="name" placeholder="Leonardo DiCaprio" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>What's your Question/s?</Form.Label>
        <Form.Control as="textarea" rows={5} />
      </Form.Group>
      <button className="btn btn-outline-primary" type="submit">Send Message</button>
    </Form>
          </div>
        </div>
      </div>
    </div>
      
  )
}

export default Contact