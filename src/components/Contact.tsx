
import { useEffect } from "react"
import { IoIosSend } from "react-icons/io";
function Contact({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);

    return (
      <div className={`article about dark:bg-primary-dark-2 bg-primary-light-2 border-[1px] border-primary-light-5 dark:border-primary-dark-5 ${activeTab === 'Contact' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 text-on-light-surface-11 dark:text-on-dark-surface-11 article-title after:bg-primary after:opacity-35">Contact</h2>
          </header>

          <section className="mapbox" data-mapbox>
          <figure>
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9400012181864!2d38.80717847404775!3d8.885170691225769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1714321772426!5m2!1sen!2set" width="400" height="300" loading="lazy"></iframe>

              
          </figure>
        </section>

        <div className="contact-form">

          <h3 className="h3 form-title text-on-light-surface-11 dark:text-on-dark-surface-11">Contact Form</h3>

          <div className="form" >

            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input border-[1px] border-primary-light-5 dark:border-primary-dark-5" placeholder="Full name"  />

              <input type="email" name="email" className="form-input border-[1px] border-primary-light-5 dark:border-primary-dark-5" placeholder="Email address"  />
            </div>

            <textarea name="message" className="form-input border-[1px] border-primary-light-5 dark:border-primary-dark-5" placeholder="Your Message" ></textarea>

            <button className="form-btn bg-gradient-to-br to-100% from-0% dark:from-[#002744]   from-[#0087e870] text-on-light-surface-11 dark:text-on-dark-surface-11 to-transparent hover:text-primary" type="submit" >
              <IoIosSend />
              <span>Send Message</span>
            </button>

          </div>

        </div>
        
      </div>
    )
  }
  
  export default Contact
  