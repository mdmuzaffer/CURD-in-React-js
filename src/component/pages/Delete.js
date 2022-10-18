import React from "react";
import { useParams, useHistory } from "react-router-dom";
import swal from 'sweetalert';
import axios from 'axios';

const Delete = () =>{
    const id = useParams();
    const deleteId = id.id;
    const history = useHistory()

    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this record!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {

            try{
               const res = axios.delete(`http://localhost/lumenapi/public/api/user-delete/${deleteId}`)
                .then(res => {
                    const message = res.data;
                    if(message.status ===200){

                        swal(message.message, {
                            icon: "success",
                            timer: 2000
                        });
                        history.push("/") 
                    }
                })

            }catch (err) {
                swal("Opps !","Something went Wrong", "error");
            }

        } else {
          swal("Your selected record is safe!", {timer: 2000});
          history.push("/");
        }
      });


    return(
        <>
            <div className="container">
                <h1>Delete</h1>
            </div>
        </>
    )
}
export default Delete;