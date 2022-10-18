import React from "react";
import { useState , useEffect } from "react";
import axios from "axios";
import Moment from 'moment';
import {Link} from 'react-router-dom';

const baseURL  = "http://localhost/lumenapi/public/api/all-users";
const Home = () =>{

    const [contacts, setContact] = useState([]);

    useEffect(() => {
        getAllcontact();
      }, []);

      const getAllcontact  = async() =>{
            await axios.get(`${baseURL}`).then((response) => {
            setContact(response.data);

        }).catch(function (error) {
            console.log(error);
        })
    }
//Delete records 

    return(
        <>
            <div className="container">
                <h1>Home Page</h1>
                <p>THis is the Home page users table content</p>
                <p style={{float:"right"}}><Link to="/insert"><input type="button" class="btn btn-info" value="Insert"/></Link></p>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Address</th>
                        <th scope="col">Message</th>
                        <th scope="col">Date</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                    contacts.map((contact, index)=>{

                       return( 
                       <tr>
                        <th>{contact.id}</th>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>{contact.mobile}</td>
                        <td>{contact.address}</td>
                        <td>{contact.message}</td>
                        <td>{Moment(contact.updated_at).format('YYYY-MM-DD')}</td>
                        <td>
                        <Link to={`/delete/${contact.id}`}><input type="button" class="btn btn-danger" value="Delete"/></Link> ||
                         <Link to={`/update/${contact.id}`}><input type="button" class="btn btn-primary" value="Update"/></Link></td>
                        </tr>
                       )
                     })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Home;