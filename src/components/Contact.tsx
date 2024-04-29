
import { useEffect } from "react"
import { IoIosSend } from "react-icons/io";
function Contact({activeTab}: {activeTab: string}) {
  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page
  
}, []);

    return (
      <div className={`article about dark:bg-d-surface-2 bg-l-surface-2 border-[1px] border-l-on-surface-5 dark:border-d-on-surface-5 ${activeTab === 'Contact' ? 'active' : ''}`}>
          <header>
            <h2 className="h2 text-l-on-surface-11 dark:text-d-on-surface-11 article-title">Contact</h2>
          </header>

          <section className="mapbox" data-mapbox>
          <figure>
            
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.9400012181864!2d38.80717847404775!3d8.885170691225769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b82a7e392203f%3A0xb05f440eacc98f9f!2sAddis%20Ababa%20Science%20and%20Technology%20University!5e0!3m2!1sen!2set!4v1714321772426!5m2!1sen!2set" width="400" height="300" loading="lazy"></iframe>

              
          </figure>
        </section>

        <div className="contact-form">

          <h3 className="h3 form-title">Contact Form</h3>

          <div className="form" data-form>

            <div className="input-wrapper">
              <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input />

              <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input />
            </div>

            <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>

            <button className="form-btn" type="submit" disabled data-form-btn>
              <IoIosSend />
              <span>Send Message</span>
            </button>

          </div>

        </div>
        
      </div>
    )
  }
  
  export default Contact
  