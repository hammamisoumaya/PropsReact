
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
      title={"Introduction au PROPS"}

      //props number
     age={30}

     //props array
array={array}
//props function
handelAlert={handelAlert}
   
      />

<hr/>
<Chek name={"Soumaya"} age={27} profession ={"developpeuse"}/>
<hr/>
<Chek name={"Mariem"} age={27} profession ={"developpeuse"}/>
<hr/>
<Chek name={"Baha"} age={27} profession ={"developpeuse"}/>
<hr/>
<Chek name={"Francise"} age={27} profession ={"developpeuse"}/>
<hr/>




<Che name="test"> 
<div>


<h1> hello,i'am a child prop</h1>
<p> hello,i'am a child too</p>

</div>
</Che>

  
    </div>
  );
}

export default App;
