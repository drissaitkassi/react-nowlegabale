
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import UpdateUser from "./UpdateUser";
import { Link } from 'react-router-dom'



function TableSection(){
 
    const [userData,setUserData]=useState([])

    function handleDelete(event,id){

        fetch(`http://localhost:3000/users/${id}`,{method:'DELETE'})
        .then((res)=>{
            if(res.ok){
                setUserData(userData.filter((u)=>{
                    return u.user_id!=id
                }))  
            }
        })
    }

    useEffect(()=>{
        fetch('http://localhost:3000/users')
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[])

  

    return(
   <div id="myTable">
    <Container>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th >Age </th>
                <th>Action </th>
            </tr>
            </thead>
            <tbody>
            {
                userData.map((data)=> {
                    return( 
                        <tr>
                            <td>{data.user_id}</td>
                            <td >{data.name}</td>
                            <td >{data.age}</td>
                            <td className="col-3">
                                
                                <Button variant="info" size="sm"  ><Link to={`/update/${data.user_id}`}>Update</Link></Button>
                                {/* if we don't pass the event the function get called when the component is mount 
                                and we dont want that 
                                we want the function to be called when the on click event get trigered by the button */}
                                <Button className="ms-2" variant="danger" size="sm" onClick={event =>handleDelete(event,data.user_id)}>Delete</Button>
                            </td>                           
                        </tr>
                    )
              

                })
            }
           
           
            </tbody>
        </Table>
       
      </Container>
    </div>
    );
}

export default TableSection;