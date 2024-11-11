import React from 'react'
import { Line } from 'react-chartjs-2'
import { Link } from 'react-router-dom'

export default function Product() {
  return (
    <div>
      <h1>this is product page</h1>
      <Link className="underline text-blue-500 text-xs" to="/dashboard">go to dashboard page</Link>
    </div>
  )
}
