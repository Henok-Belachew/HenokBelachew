

function Portfolio({activeTab}: {activeTab: string}) {
    return (
      <div className={`article about ${activeTab === 'Portfolio' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Portfolio</h2>
          </header>
        
      </div>
    )
  }
  
  export default Portfolio
  