import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import TitleSection from './titleSection';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function UpdateProduct() {

  const [details,setDetails ]=useState({
    product_id:"",
    name :"",
    price : "",
    description : "",
    instock : "",
})
const {id}=useParams();
const handleChange=(e)=>{

    const name =e.target.name
    const value =e.target.value
    setDetails((prev)=>{
        return {...prev,[name]:value}
    })
    console.log(value);
}

function handelUpdateProduct() {
    
    fetch(`http://localhost:3000/products/${id}`,{
        method:"PUT",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(details)

    }).then(res=>res.json())
    .then(data=>console.log(`${data} sucess`))
}


  return (
    <Container id="addUserFormContainer"> 
         <TitleSection title="Update product Form "></TitleSection>
            <Form onSubmit={handelUpdateProduct}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Product id</Form.Label>
                    <Form.Control type="text" value={id} name="product_id" disabled onChange={handleChange}/>
                </Form.Group>

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
                    <Form.Control type="text" placeholder="is in stock" name="instock" onChange={handleChange} />
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
        </Container>
  );
}



export default UpdateProduct;