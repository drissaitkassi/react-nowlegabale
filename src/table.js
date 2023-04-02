
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom'
import { Card,Form } from "react-bootstrap";


function TableSection(){
    // generale user data state 

    const [userData,setUserData]=useState([])
    const [keyword ,setKeyword]=useState('')
     // handeling deleted entries
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

    // getting values from on change event 
    const handleChange=(e)=>{

        const value =e.target.value
        console.log("im called before setKeyord")
        setKeyword(value)
        console.log(value);
    }
    function handelSearchUser(e) {
        
        fetch(`http://localhost:3000/users/${keyword}`)
        .then(res=>res.json())
        .then(data=>setKeyword(data))

    }

    console.log(`this is ${keyword}`)

    // getting all users 

    useEffect(()=>{
        fetch(`http://localhost:3000/users/${keyword}`)
        .then(res=>res.json())
        .then(data=>setUserData(data))
    },[keyword])

  


    // jsx markup and styling 
    return(
   <div id="myTable">
    <Container>
    
                <Form onSubmit={handelSearchUser}>
                    <Form.Group className="mb-3 col-12 " controlId="formBasicEmail">
                        <Form.Label >Keyword </Form.Label>
                        <div className="d-flex col-12">
                        <Form.Control className="d-flex" type="text" placeholder="Enter Keyword" name="keyword" onChange={handleChange}>
                        </Form.Control>
                        <Button className="btn btn-success ms-2 col-1" variant="primary" type="submit" >
                            Search
                        </Button>
                        </div>
                    </Form.Group>
                </Form>
   
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
                                
                                <Button variant="info" size="sm"  ><Link id="update-link" to={`/update/${data.user_id}`}>Update</Link></Button>
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