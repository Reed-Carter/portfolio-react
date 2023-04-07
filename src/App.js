import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/contact';
import Projects from './components/projects';

function App() {
  return (
    <>
      <Routes>
        <Route path="process.env.PUBLIC_URL" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='projects' element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
