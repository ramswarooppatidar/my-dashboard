import React from 'react'
import { Link } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
      <h1>this is Dashboard components </h1>
      <Link className='text-xs text-blue-500 underline' to="/products">go to products</Link>
    </div>
  )
}

export default Dashboard
