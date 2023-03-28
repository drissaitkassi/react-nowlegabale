
import { Table,Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'


function TableSection(){

    let userData=[{"user_id":1,"name":"driss","age":31},{"user_id":2,"name":"ait kassi","age":32},{"user_id":2,"name":"ait kassi","age":32},{"user_id":2,"name":"ait kassi","age":32},{"user_id":3,"name":"john","age":44},{"user_id":4,"name":"mike","age":27}]

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