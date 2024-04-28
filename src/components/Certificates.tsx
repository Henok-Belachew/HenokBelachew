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


          <div className="certificates gap-[20px] 4-md:gap-[42px] lg:gap-[42px] flex flex-wrap">

            {
              CertificatesData.map((data, ) => (
                <>
                <div className="w-[250px] mx-auto lg:mx-0 text-white-2">
                  <img className="w-[250px] bg-cover h-[145px] " src={data.img} alt="" />

                  <div className="mt-3 flex flex-col gap-2">

                    <div className="flex flex-col gap-1">
                      <h1>{data.name}</h1>
                      <p className="flex font-[300] text-white-2 opacity-80">{data.issuingOrg}</p>
                    </div>
                    
                    <div className="flex font-[200] text-white-2 opacity-80 justify-between">
                    
                    
                    <p className="">Issued {data.dateIssue}</p>

                    <span onClick={() => window.open(data.link, '_blank')} className="flex gap-2 items-center opacity-70 hover:opacity-100 hover:text-orange-yellow-crayola justify-center cursor-pointer">
                        
                        <span >Verify</span>

                        <RxExternalLink />

                      </span>

                    


                    </div>

                    {/* Description */}
                    {/* <p className="my-2">
                    I learned essential networking concepts with Cisco: network types, cabling, IP navigation, protocols, apps, and built a home wireless network. 

                    </p> */}
                    

                    

                  </div>
                  
                  


                </div>
                
                
                {
                  CertificatesData.length - 1 !== CertificatesData.indexOf(data) && <div className="w-full lg:hidden h-px bg-jet my-4"></div>
                  
                }
                
                

                </>
              ))
            }

          </div>
        
      </div>
    )
  }
  
  export default Certificates
  