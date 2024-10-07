import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VendingMachine from './VendingMachine';

import './App.css'

function App() {
 

  return (
    <>
    <h1>React Vending Machine</h1>
    <Router>
      <Routes>
        <Route path="/*" element={<VendingMachine />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
