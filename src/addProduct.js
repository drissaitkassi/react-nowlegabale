import { useState } from "react";
import { Container , Form,Button } from "react-bootstrap";
import TitleSection from "./titleSection";


function AddProduct(){

    const [details,setDetails ]=useState({
        name :"",
        price : "",
        description : "",
        instock : "",
    })

    const handleChange=(e)=>{

        const name =e.target.name
        const value =e.target.value
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
        console.log(value);
    }

    function handelCreateNewUser(e) {
        
        fetch('http://localhost:3000/products',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
    
        }).then(res=>res.json())
        .then(data=>console.log("sucess"))

    }


    return(
        <Container id="addUserFormContainer"> 
         <TitleSection title="Add product Form "></TitleSection>
            <Form onSubmit={handelCreateNewUser}>
              

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name"  name="name" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>price</Form.Label>
                    <Form.Control type="text" placeholder="Enter price" name="price" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>description</Form.Label>
                    <Form.Control type="text" placeholder="Enter description" name="description" onChange={handleChange} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>instock</Form.Label>
                    <Form.Control type="text" placeholder="in stock" name="instock" onChange={handleChange} />
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>

    )
}

export default AddProduct;