// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Scrap from './Scrap/scrap.jsx'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage_scrap from './components/homepage/homepage_scrap'
import NavBar from './components/index_resources/NavBar'
import Artwork_scrap from './components/artwork/artwork_scrap';
import Music_scrap from './components/music/music_scrap';
import Writings_scrap from './components/writings/writings_scrap';
import Index_scrap from './components/index_resources/index_scrap';
import Misc_scrap from './components/misc/misc_scrap';
import Contact_scrap from './components/contact/contact_scrap';
import About_scrap from './components/about/about_scrap';

import "./scss/index.css"
import './scss/NavBar.css'; // Optional: for styling


// import './App.css'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage_scrap />} />
          <Route path="/artwork" element={<Artwork_scrap />} />
          <Route path="/music" element={<Music_scrap />} />
          <Route path="/writings" element={<Writings_scrap />} />
          <Route path="/index" element={<Index_scrap />} />
          <Route path="/misc" element={<Misc_scrap />} />
          <Route path="/contact" element={<Contact_scrap />} />
          <Route path="/about" element={<About_scrap />} />

        </Routes>
      </Router>


      {/* <Homepage_scrap /> */}
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <Scrap />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

    </>
  )
}

export default App
