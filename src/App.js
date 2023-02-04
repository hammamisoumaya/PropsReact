import logo from './logo.svg';
import './App.css';
import Checkpoint from './Checkpoint';
import Chek from './Chek';
import Che from './Che';
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
      title={"introduction au props"}

      //props number
     age={2345}

     //props array
array={array}
//props function
handelAlert={handelAlert}
   
      />

<hr/>
<Chek name={"soumaya"} age={27} profession ={"developpeuse"}/>
<Chek name={"soumaya"} age={27} profession ={"developpeuse"}/>
<Chek name={"soumaya"} age={27} profession ={"developpeuse"}/>
<Chek name={"soumaya"} age={27} profession ={"developpeuse"}/>




<Che name="test"> 
<div>


<h1> hello,i'am a child prop</h1>
<h1> hello,i'am a child too</h1>

</div>
</Che>

  
    </div>
  );
}

export default App;
