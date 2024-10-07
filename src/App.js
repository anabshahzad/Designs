import React from 'react'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Charts from './components/Charts'
import Cards  from './components/Cards'

function App() {
  return (
    <div>
      <Navbar/>
      <Dashboard/>
      <Charts />
      <Cards/>
    </div>
  )
}

export default App