import { useState } from 'react'

import { Route, Routes } from 'react-router'
import Navbar from './Navbar'
import './App.css'
import Layout from './layout'
import Home from './Home'
import Policy from './policy'
import Contact from './contact'
import About from './About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Routes>
<Route path='/' element={<Layout/> }>
<Route index element={<Home/>} />
<Route path='/about' element={<About/>} />
<Route path='/contact' element={<Contact/>} />
<Route path='/policy' element={<Policy/>} />

</Route>
</Routes>
    </>
  )
}

export default App
