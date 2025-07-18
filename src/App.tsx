import { useState, useEffect } from "react"


import Sidebar from "./components/Sidebar"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"




function App() {

  const [activeTab, setActiveTab] = useState('About');	
  const [darkmode, setDarkmode] = useState(true);

  useEffect(() => {
    darkmode ? document.body.classList.add('dark') : document.body.classList.remove('dark');
  })
  
  
  return (

    
    
      
   <main className="main " >

  
        <Sidebar darkmode={darkmode} setDarkmode={setDarkmode} />
   


  
       {/* Main Content */}
        <div className="main-content">
                  <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />       
                  {activeTab === 'About' && <About activeTab={activeTab} />}
                  {activeTab === 'Resume' && <Resume activeTab={activeTab} />}
                  {activeTab === 'Portfolio' && <Portfolio activeTab={activeTab} />}
                  {activeTab === 'Certificates' && <Certificates activeTab={activeTab} />}
                  {activeTab === 'Contact' && <Contact activeTab={activeTab} />}

                  
                  {/* <About/> */}
        </div>
   
   
   </main>
   
  )
}

export default App
