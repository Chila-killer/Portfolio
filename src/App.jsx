import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {

  return (
    <div className='bg-slate-300/80 dark:bg-[#000] text-black dark:text-slate-300 overflow-hidden'>
      <Routes>
         <Route path='/' element={<Home />} />
         <Route path='/projects' element={<Projects />} />
         <Route path='/about' element={<About />} />
         <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
