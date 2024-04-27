

function Certificates({activeTab}: {activeTab: string}) {
    return (
      <div className={`article about ${activeTab === 'Certificates' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Certificates</h2>
          </header>
        
      </div>
    )
  }
  
  export default Certificates
  