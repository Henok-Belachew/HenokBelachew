import { useEffect } from "react";

function Portfolio({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
    return (
      <div className={`article about ${activeTab === 'Portfolio' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
        
      </div>
    )
  }
  
  export default Portfolio
  