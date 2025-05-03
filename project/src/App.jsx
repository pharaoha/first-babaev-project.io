import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Header from './components/Header'
import Home from './pages/Home'
import Mechanics from './pages/Mechanics'
import Electrodynamics from './pages/Electrodynamics'
import Optics from './pages/Optics'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mechanics" element={<Mechanics />} />
            <Route path="/electrodynamics" element={<Electrodynamics />} />
            <Route path="/optics" element={<Optics />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  )
}

export default App