import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className='my-5'>
      <h1 className='text-center mb-3'><b>404</b></h1>
      <div className="text-center">
        <Link to={'/'} className='btn btn-primary'>Go To Home</Link>
      </div>
    </section>
  )
}

export default Error
