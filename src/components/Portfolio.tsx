import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
function Portfolio({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
    return (
      <div className={`article about ${activeTab === 'Portfolio' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 text-l-on-surface-11 dark:text-d-on-surface-11 article-title">Portfolio</h2>
          </header>

          <div className="projects">
              
              {/* Filtering Elemnts */}
              <ul className="filter-list">

                  <li className="filter-item">
                    <button className="active" >All</button>
                  </li>

                  <li className="filter-item">
                    <button >Website design</button>
                  </li>

                  <li className="filter-item">
                    <button >Mobile App Design</button>
                  </li>

                  <li className="filter-item">
                    <button >Web development</button>
                  </li>

              </ul>

              <div className="filter-select-box">

                  <button className="filter-select" data-select>

                      <div className="select-value" data-selecct-value>Select category</div>

                      <div className="select-icon">
                        <IoIosArrowDown />
                      </div>

                  </button>

                  <ul className="select-list">

                    <li className="select-item">
                      <button data-select-item>All</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Web design</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Applications</button>
                    </li>

                    <li className="select-item">
                      <button data-select-item>Web development</button>
                    </li>

                  </ul>

              </div>

              {/* ----- Filtering Elements End ----- */}




          </div>
        
      </div>
    )
  }
  
  export default Portfolio
  