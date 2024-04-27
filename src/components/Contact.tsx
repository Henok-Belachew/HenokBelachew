

function Contact({activeTab}: {activeTab: string}) {
    return (
      <div className={`article about ${activeTab === 'Contact' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Contact</h2>
          </header>
        
      </div>
    )
  }
  
  export default Contact
  