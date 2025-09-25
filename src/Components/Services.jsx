
import Development from "../assets/Development.png"
import Construction from "../assets/Construction.png"
import Design from "../assets/Design.png"
import Container from "../assets/Container.png"

const Services = () => {
    return  (
        <div className="mt-[90px]">
            <div className="text-center ">
                <h1 className="mb-[20px]  text-[35.3px] font-bold "
                   data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    Our Services
                </h1>
                <p className=" m-[20px] text-[16.59px] "
                  data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    Comprehensive real estate solutions from concept to completion, delivered with
                     expertise and precision.
                </p>
            </div>
            <div className="mt-30 grid grid-cols-2 lg:flex text-center lg:gap-3 lg:justify-around "
              data-aos="fade-left" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div className="shadow-lg px-10 py-10 rounded-lg">
                   <img className="block mx-auto" src={Development} alt="Corporate" />
                    <b className="text-[19.38px]">Property Development</b>
                    <p>End-to-end development <br />
                       services from land acquisition <br />
                       to project delivery.
                    </p>
                </div>
                <div className=" p-3 rounded-lg px-10 py-10 shadow-lg text-center  ">
                    <img className="block mx-auto"
                     src={Construction} alt="Corporate" />
                    <b className="text-[19.38px]">
                        Construction
                    </b>
                    <p>
                        Quality construction services <br />
                         with attention to detail and <br />
                           timely completion.
                    </p>
                </div>
                <div className="p-3 rounded-lg px-10 py-10 shadow-lg text-center ">
                    <img className="block mx-auto"
                     src={Design} alt="Logo" />
                    <b className="text-[19.38px]">Interior Design</b>
                    <p>
                        Innovative interior solutions <br />
                       that blend functionality with <br />
                       aesthetic appeal.
                    </p>
                </div>
                <div className="p-3 px-10 py-10 rounded-lg shadow-lg text-center  ">
                    <img className="block mx-auto"
                     src={Container} alt="Logo" />
                    <b className="text-[19.38px]">Project Management</b>
                    <p>
                        Professional project oversight <br />
                        ensuring quality, timeline, and <br />
                        budget adherence.
                    </p>
                </div>
            </div>
            
        </div>
        
    )
}
export default Services;
