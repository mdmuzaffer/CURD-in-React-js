import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import {useHistory } from "react-router-dom";


const Insert = () => {

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const [msg, setMsg] = useState("");

    const history = useHistory()

    let handleSubmit = async (e) => {
        e.preventDefault();
        const data = { name:name, email:email, mobile:mobile, address:address, message:msg}
       
        try {

            axios.post('http://localhost/lumenapi/public/api/user-insert', data ,{
            method: 'POST',
            headers: {
              "Content-Type" : "application/json",
              "Accept" : "application/json",
            },
            //data: { name:name, email:email, mobile:mobile, address:address, message:msg}
             }).then(function(response){
                if(response.data.status ===200){
                    setMessage(response.data.message);
                    console.log(response.data.message);
                    swal({ title: "Success!", text: response.data.message, type: "success", timer: 3000 });
                    history.push("/")
                }
          })

          } catch (err) {
            console.log(err);
            setMessage(err);
          }
    }

    return (
        <>
            <div className="container">
                <h1>Insert record</h1>

                <div className="message text-primary text-center">{message ? <p>{message}</p> : null}</div>

                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Mobile</Form.Label>
                            <Form.Control type="text" placeholder="Enter mobile" value={mobile} onChange={(e) => setMobile(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridaddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Message</Form.Label>
                            <Form.Control type="text" placeholder="Enter message" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                        </Form.Group>

                    </Row>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>

            </div>
        </>
    )
}
export default Insert;