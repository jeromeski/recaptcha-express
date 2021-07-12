import React from 'react'
import {Link} from 'react-router-dom'

function TosComponent() {
  return (
    <div className='tos-wrapper'>
      <Link className='tos-link' to='/public/tos'>Terms of Service</Link>
    </div>
  )
}

export default TosComponent
