import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

function TitleSection(props){

    return(

        <div id="myTitle">
            <Container>
                <h1>{props.title} </h1>
            </Container>
        </div>
      
        
    )
}


export default TitleSection; 