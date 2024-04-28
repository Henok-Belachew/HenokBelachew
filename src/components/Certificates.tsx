import { useEffect } from "react"
import CertificatesData from "../Data/CertificatesData"
import { RxExternalLink } from "react-icons/rx";
function Certificates({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);
    return (
      <div className={`article about ${activeTab === 'Certificates' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 article-title">Certificates</h2>
          </header>


          <div className="certificates gap-[20px] justify-between flex flex-wrap">

            {
              CertificatesData.map((data) => (
                <div className="w-[400px] mx-auto lg:mx-0 text-white-2">
                  <img className="w-[400px] bg-cover h-[265px] " src={data.img} alt="" />

                  <div className="mt-3">
                    <h1>{data.name}</h1>
                    <p className="font-[200] text-white-2 opacity-80">{data.issuingOrg}</p>

                    <span className="flex  items-center justify-between">
                      <p className="font-[200]">Issued {data.dateIssue}</p>

                      <span onClick={() => window.open(data.link, '_blank')} className="flex gap-2 items-center opacity-70 hover:opacity-100 hover:text-orange-yellow-crayola hover:border-orange-yellow-crayola border px-8 py-1 rounded-lg cursor-pointer">
                        
                        <span >Verify</span>

                        <RxExternalLink />

                      </span>
                      
                    </span>

                  </div>
                  
                  


                </div>
                
              ))
            }

          </div>
        
      </div>
    )
  }
  
  export default Certificates
  