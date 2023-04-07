
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
        fetch(`http://localhost:3000/products/${id}`,{method:'DELETE'})
        .then((res)=>{
            if(res.ok){
                setUserData(userData.filter((u)=>{
                    return u.product_id!=id
                }))  
            }
        })
    }

    // getting values from on change event 
    const handleChange=(e)=>{

        const value =e.target.value
        setKeyword(value)
    }
    function handelSearchProduct(e) {
        
        fetch(`http://localhost:3000/products/${keyword}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setKeyword(data)})

    }


    // getting all users 

    useEffect(()=>{
        fetch(`http://localhost:3000/products/${keyword}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUserData(data)
        })
    },[keyword])

  


    // jsx markup and styling 
    return(
   <div id="myTable">
    <Container>
    
                <Form onSubmit={handelSearchProduct}>
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
                <th >price </th>
                <th>description </th>
                <th>in Stock </th>
                <th>action </th>
            </tr>
            </thead>
            <tbody>
            {
                userData.map((data)=> {
                    return( 
                        <tr>
                            <td>{data.product_id}</td>
                            <td >{data.name}</td>
                            <td >{data.price}</td>
                            <td >{data.description}</td>
                            <td >{data.instock}</td>
                            <td className="col-3">
                                
                                <Button variant="info" size="sm"  ><Link id="update-link" to={`/update/${data.product_id}`}>Update</Link></Button>
                                {/* if we don't pass the event the function get called when the component is mount 
                                and we dont want that 
                                we want the function to be called when the on click event get trigered by the button */}
                                <Button className="ms-2" variant="danger" size="sm" onClick={event =>handleDelete(event,data.product_id)}>Delete</Button>
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