import React from 'react'

const Details = ({formdata}) => {
  return (
    
        <pre>{JSON.stringify(formdata,undefined,2)}</pre>
    
  )
}

export default Details;