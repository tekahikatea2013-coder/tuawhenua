import { useState, useEffect } from 'react'
import './App.css'
import {Routes, Route} from "react-router-dom"
import Header from './components/Header.jsx'
import Home from './pages/Home.jsx'
import Tangaroa from './pages/Tangaroa.jsx'
import TaneMahuta from './pages/Tanemahuta.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Events from './pages/Events.jsx'
import Contact from './pages/Contact.jsx'
import kereru1 from './assets/kereru/kereru1.png'
import kereru2 from './assets/kereru/kereru2.png'
import kereru3 from './assets/kereru/kereru3.png'
import Slideshow from'./components/Slideshow.jsx'

const imageKereru = [kereru1, kereru2, kereru3]

function App() {
  return (                               
        <>
      <Header />
      <Slideshow images={imageKereru} />
      <main className="page-content">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tangaroa" element={<Tangaroa />} />
        <Route path="/tane-mahuta" element={<TaneMahuta />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      </main>
      
    </>
  );
  
}

export default App
