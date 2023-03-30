
import './App.css';
import Checkpoint from './Checkpoint';
import Chek from './Chek';
import Che from './Che';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

//tableau
const array=[11,124,23456,12790]

function App() {

//fonction
  const handelAlert=(name)=>{
    alert(`hi,my name is ${name}`)
  }
  return (
    
    <div className="App">
      <Checkpoint
      //props de type string
      title={"Introduction au PROPS"}

      //props number
     age={30}

     //props array
array={array}
//props function
handelAlert={handelAlert}
   
      />
       <Card style={{ width: '18rem' }}>
      <Card.Header>Featured</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item><Chek name={"Soumaya"} age={27} profession ={"Developpeuse"}/></ListGroup.Item>
        <ListGroup.Item><Chek name={"Mariem"} age={27} profession ={"Developpeuse"}/></ListGroup.Item>
        <ListGroup.Item><Chek name={"Baha"} age={27} profession ={"Developpeur"}/></ListGroup.Item>
      </ListGroup>
    </Card>





<div>


<h1> Hello,i'am a child prop</h1>
<p> Hello,i'am a child too</p>

</div>


  
    </div>
  );
}

export default App;
