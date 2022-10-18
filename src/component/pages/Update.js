import React  from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useParams, useHistory } from "react-router-dom";


const Update = () =>{

    const id = useParams();
    const updateId = id.id;
    const history = useHistory()

    const [message, setMessage] = useState();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [address, setAddress] = useState();
    const [updateid , setUpdateid] = useState(updateId);



    useEffect(() => {
       getContact();
      },[]);


    const baseURL  = `http://localhost/lumenapi/public/api/get-user/${updateId}`;
    const getContact = async() =>{
            await axios.get(`${baseURL}`).then((response) => {
                setName(response.data.user.name)
                setEmail(response.data.user.email)
                setMobile(response.data.user.mobile)
                setAddress(response.data.user.address)
                setMessage(response.data.user.message)

        }).catch(function (error) {
            console.log(error);
        });
    }

//alert(`${updateusers.name}`);

    let handleSubmit = async (e) => {
        e.preventDefault();
        
        const data = { name:name, email:email, mobile:mobile, address:address, message:message}
       
        try {

            axios.post(`http://localhost/lumenapi/public/api/update/${updateId}`, data ,{
            method: 'POST',
            headers: {
              "Content-Type" : "application/json",
              "Accept" : "application/json",
            },
          
             }).then(function(response){
                if(response.data.status ===200){
                    console.log(response.data);
                    swal({ title: "Success!", text: response.data.message, type: "success", timer: 3000 });
                    history.push("/") 
                }
          })

          } catch (err) {
            console.log(err);
            setMessage(err);
          }


    }

    return(
        <>
            <div className="container">
                <h1>Update record</h1>

                <Form onSubmit={handleSubmit}>
                <Form.Control type="hidden" value={updateid}  onChange={(e) =>setUpdateid(updateid)}/>
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
                            <Form.Control type="text" placeholder="Enter message" value={message} onChange={(e) => setMessage(e.target.value)}/>
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
export default Update;