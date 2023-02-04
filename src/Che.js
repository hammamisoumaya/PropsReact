import React from 'react'
import PropTypes from 'prop-types';
const Che = ({name,children}) => {
  return (
    <div>
<h1>{name}</h1>
<h1>{children}</h1>


    </div>
  )
}




Che.defaultProps={
name:"nothing to say or add"
}


Che.propTypes  ={
  name:PropTypes.string

}
export default Che