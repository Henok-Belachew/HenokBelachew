

function Resume({activeTab}: {activeTab: string}) {
  return (
    <div className={`article about ${activeTab === 'Resume' ? 'active' : ''}`}>
        <header>
          <h2 className="h2 article-title">Resume</h2>
        </header>
      
    </div>
  )
}

export default Resume
