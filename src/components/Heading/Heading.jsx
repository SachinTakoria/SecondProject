import React from 'react'

const Heading = ({first,second}) => {
  return (
    <div>
          <div className='col-md-4 column col-left d-flex justify-content-center align-items-center ' >
                    <h1 className='text-center sign-up-heading'>{first}<br/>{second}</h1>
                </div>
      
    </div>
  )
}

export default Heading
