import map from "../assets/map.png"
import phone from "../assets/phone.png"
import email from "../assets/email.png"
import time from "../assets/time.png"
import background from "../assets/background.png"



const From = () => {
   
    return (
        <form className="w-full mb-10">
           <div className="text-center mt-40">
             <b className="text-[35.3px]"
               data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out"> 
                Get In Touch
             </b>
             <p className="m-10"
              data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                Ready to start your next project? Contact us today for a consultation.
             </p>
            </div> 
            <div className="lg:flex">
                <section className="lg:w-[50%] m-2"
                    >
                    <div className=" shadow  rounded-lg m-2"
                      data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">

                         <div className="m-2 p-2">
                          <label htmlFor="name">Name</label>
                          <input className="w-full rounded-lg p-1 focus:ring-blue-500 border focus:ring-2 focus:outline-none border-gray-300" 
                          type="text" 
                          placeholder="Enter Your Name" 
                             id = "name"
                           value = {FormData.name}
                           />
                
                         </div>



                        <div  className=" m-2 p-2">
                            <label htmlFor="email">Email</label>
                            <input className="w-full rounded-lg p-1 focus:ring-blue-500 border focus:ring-2 focus:outline-none border-gray-300" 
                            type="email" 
                               placeholder="email" 
                               id="email"
                             
            o                />
                        </div>

                        <div  className="m-2 p-2">
                            <label htmlFor="phone">Phone</label>
                             <input className="w-full rounded-lg p-1 focus:ring-blue-500 border focus:ring-2 focus:outline-none border-gray-300" type="phone" 
                             placeholder="phone"
                             id="phone"
                                
                                />
                        </div>
                        
                        <div  className="m-2 p-2">
                            <label htmlFor="message">Message</label>
                            <textarea name="Message" 
                            className="w-full rounded-lg p-1 focus:ring-blue-500 border focus:ring-2 focus:outline-none border-gray-300"
                            placeholder="Write Your Message"
                            id="message"
                                 
                                ></textarea>
                        </div>
                        <button onClick={() => alert("succesfully send messeage")}
                        className="bg-blue-500  w-full rounded-lg text-white p-2 hover:bg-blue-300">
                          Send Message
                        </button>
                    </div>
               </section>
               <section className="lg:w-[50%] m-2"
                 data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
                  <div>
                       <b className="text-[19.22px]">
                          Contact Information
                      </b>
                  </div>
                  <div className="flex gap-2 m-4">
                      <img className="h-8" src={map} alt="" />
                      <div >
                            <p>Address</p>
                            <p className="text-[#4B5563]">
                                123 Business Avenue, Suite 500
                                New York, NY 10001
                            </p>
                      </div>
                  </div>

                  <div className="flex gap-1 m-4">
                      <img className="h-7" src={phone} alt="" />
                      <div>
                            <p>Phone</p>
                            <h2 className="text-[#4B5563]">+1 (555) 123-4567</h2>
                      </div>
                  </div>

                  <div className="flex gap-5 m-4">
                      <img className="h-6" src={email} alt="" />
                      <div>
                            <p>Email</p>
                            <p className="text-[#4B5563]">
                               info@estatedev.com
                            </p>
                      </div>
                  </div>

                  <div className="flex gap-5 m-4">
                      <img className="h-5" src={time} alt="" />
                      <div>
                            <p>Working Hours</p>
                            <p className="text-[#4B5563]">
                                Mon - Fri: 9:00 AM - 6:00 PM <br />
                                Sat: 10:00 AM - 4:00 PM
                            </p>
                      </div>
                  </div>
                  <div>
                      <img className="w-[584px]" src={background} alt="background" />
                  </div>
               </section>
            </div>



           
  </form>


        

  )

}
export default From;