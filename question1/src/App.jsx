// import { useState } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UrlPage from './Component/UrlPage'
import Showurl from './Component/Showurl'

function App() {
  return (
    <>
    <div>

  <Router>
    <Routes>
      <Route path="/" element={<UrlPage/>} />
      <Route path="/shorturls" element={<Showurl/>} />
    </Routes>
  </Router>
    </div>
    </>
  )
}

export default App
