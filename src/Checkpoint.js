import React from 'react'

const Checkpoint = ({title,age,array,handelAlert}) => {
  return (
    <div>Checkpoint
<h1>{title}</h1>
<h1>{age}</h1>
<h1>{array}</h1>
<button onClick={()=>handelAlert(title)}>click me</button>


<ul>
{array.map((el)=>(<li> (el) </li>))}


</ul>



    </div>
  )
}

export default Checkpoint