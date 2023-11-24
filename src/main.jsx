import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'

// Importing Route Components
import About from './routes/About.jsx';
import Contact from './routes/Contact.jsx';
import Services from './routes/Services.jsx';
import Home from './routes/Home.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  

    <BrowserRouter>

    <Routes>
       <Route path='/' element={<App/>}>
                <Route index element={<Home/>} />
                <Route path='/About-Me' element={<About/>} />
                <Route path='/Services' element={<Services/>} />
                <Route path='/Contact' element={<Contact/>} />
                
       </Route>
    </Routes>

  </BrowserRouter>

  
)
