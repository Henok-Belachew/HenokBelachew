
import { useEffect } from "react"
function Contact({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);

    return (
      <div className={`article about ${activeTab === 'Contact' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
        
      </div>
    )
  }
  
  export default Contact
  