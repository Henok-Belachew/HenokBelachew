import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
function Portfolio({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
    return (
      <div className={`article dark:bg-primary-dark-2 bg-primary-light-2 border-[1px] border-primary-light-5 dark:border-primary-dark-5  about ${activeTab === 'Portfolio' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 text-on-light-surface-11 dark:text-on-dark-surface-11 article-title after:bg-primary after:opacity-35">Portfolio</h2>
          </header>

          <div className="projects">
            <p className="text-[#b8b8b8] text-center lg:mt-28 mt-12 w-4/5 mx-auto">This section is still under development. Please visit my <a className="inline hover:text-primary-dark-9 text-primary-dark-9" href="https://github.com/Henok-Belachew">GitHub</a> and <a className="inline hover:text-primary-dark-9 text-primary-dark-9" href="https://www.behance.net/henokbelachew">Behance</a> to see my work in the meantime.  I appreciate your understanding! </p>




          </div>
        
      </div>
    )
  }
  
  export default Portfolio
  