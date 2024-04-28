import { useEffect } from "react"

function Certificates({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
    return (
      <div className={`article about ${activeTab === 'Certificates' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Certificates</h2>
          </header>
        
      </div>
    )
  }
  
  export default Certificates
  