import TopNavigationBar from "./nav";
import TitleSection from "./titleSection";
import { Card, Container,Form,Button } from "react-bootstrap";
import { useState } from "react";

function Login() {

    const [details,setDetails ]=useState({
        email :"",
        password : "",
    })

    const handleChange=(e)=>{

        const name =e.target.name
        const value =e.target.value
        setDetails((prev)=>{
            return {...prev,[name]:value}
        })
        console.log(value);
    }

    function handelLogin(e) {
        
        fetch('http://localhost:3000/login',{
            method:"POST",
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
    
        }).then(res=>res.json())
        .then(data=>console.log("sucess"))

    }

  return (
    <div>
      <TopNavigationBar></TopNavigationBar>
      <TitleSection title="Login page "></TitleSection>
      <br></br>
      <Container>
            <Card>
                <Card.Body>
                <Form onSubmit={handelLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password"  name="password" onChange={handleChange}/>
                </Form.Group>
               
                <Button variant="primary" type="submit" >
                    Submit
                </Button>
            </Form>
                </Card.Body>
            </Card>
      </Container>
   
    </div>
    
  );
}

export default Login;
