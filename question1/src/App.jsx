// import { useState } from 'react'

import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import UrlPage from './Component/UrlPage'

function App() {
  return (
    <>
    <div>

  <Router>
    <Routes>
      <Route path="/" element={<UrlPage/>} />
    </Routes>
  </Router>
    </div>
    </>
  )
}

export default App
