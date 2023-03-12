import React from 'react'
import { Navbar } from '../../components'
import './items.css'

const Items = () => {
  return (
    <div className='items-container'>
      <Navbar />
      <div>
        <h1>
        Items
        </h1>
      </div>
      <div>
        <h3>
          Currently under development...
        </h3>
      </div>
    </div>
  )
}

export default Items
