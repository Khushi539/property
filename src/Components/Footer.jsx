import Logo from "../assets/Logo.png"
import facebook from "../assets/facebook.png"
import twitter from "../assets/twitter.png"
import insta from "../assets/insta.png"
import linkdin from "../assets/linkdin.png"
const Footer = () => {
    return (
      <footer>
        <div className="flex  p-10 lg:justify-between justify-around gap-3 bg-[#111827]"
         data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
              <div>
                    <img className="mb-4" 
                    src={Logo} alt="" />
                    <p className="mb-2 text-[#9CA3AF]">
                         Building exceptional properties and
                       <br />creating lasting value through
                       <br />innovation, quality, and dedication to
                       <br /> excellence.
                    </p>
                 <div className="flex  gap-2">
                     <img src={facebook} alt="" />
                     <img src={twitter} alt="" />
                      <img src={linkdin} alt="" />
                      <img src={insta} alt="" />
                 </div>
             </div>

             <div>
                 <b className="text-[17.86px] text-[#FFFFFF]">Quick Links</b>
                 <p className="text-[#9CA3AF] mt-4">
                    About Us <br />
                    Our Projects <br />
                    Services <br />
                    Careers <br />
                    News & Updates
                 </p>
             </div>

             <div>
                 <b className="text-[17.86px] text-[#FFFFFF]">Services</b>
                 <p className="text-[#9CA3AF] mt-4">
                   Property Development
                   Construction <br />
                   Interior Design <br />
                   Project Management <br />
                   Consultation
                 </p>
             </div>

             <div>
                 <b className="text-[17.86px] text-[#FFFFFF]">Newsletter</b>
                 <p className="text-[#9CA3AF] mt-4">
                   Subscribe to get updates on our latest <br />
                   projects and industry insights.
                 </p>
             </div>
        </div>
      </footer>
    )
}

export default Footer;
 