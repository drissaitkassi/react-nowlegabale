
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";


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
                <th>Age </th>
                
            </tr>
            </thead>
            <tbody>
            {
                userData.map((data)=> {
                    return( 
                        <tr>
                            <td>{data.user_id}</td>
                            <td>{data.name}</td>
                            <td>{data.age}</td>
                            
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