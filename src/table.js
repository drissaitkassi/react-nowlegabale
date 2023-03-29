
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";


function TableSection(){

    const [userData,setUserData]=useState([])
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
                            <td className="col-3"><Button variant="info" size="sm" >Update</Button><Button className="ms-2" variant="danger" size="sm">Delete</Button></td>
                            


                            
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