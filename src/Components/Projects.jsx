import { Link } from "react-router-dom";
import Skyline from "../assets/Skyline.png"
import Corporate from "../assets/Corporate.png"
import Garden from "../assets/Garden.png"

const Projects = () => {
    return (
        <div className="mb-[40px]">
            <div className="text-center">
                <h1 className=" text-[40px] font-bold text-[#111827]"
                 data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    Featured Projects
                </h1>
                <p className="text-[16px] text-black-1000 mb-5"
                 data-aos="fade-up" data-aos-duration="2000" data-aos-easing="ease-in-out">
                    Discover our portfolio of exceptional developments that showcase innovation,
                    quality, and attention to detail.
                </p>
            </div>
            <div className="lg:flex gap-4 m-5"
              data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
                <div className=" rounded-lg shadow-lg p-5 text-center">
                    <img className="h-[192px] w-full mb-4" data-aos="zoom-in" 
                     src={Skyline} alt="Skyline Residences" />
                    <b className="text-19.69px">
                        Skyline Residences
                    </b>
                     <p className="text-14.88px mt-3"> 
                        Downtown Manhattan
                    </p>
                     <p className="text-15px">Luxury high-rise apartments featuring
                       panoramic city views and premium amenities.
                    </p>
                    
                </div>
                <div className=" rounded-lg p-5 shadow-lg text-center">
                    <img className="h-[192px] w-full mb-4"
                     src={Corporate} alt="Corporate Towers" />
                    <b>Corporate Towers</b>
                    <p className="mt-3">Business District</p>
                    <p>Modern office spaces designed for productivity
                       and collaboration in the heart of the city.
                    </p>
                </div>
                <div className=" rounded-lg p-5 shadow-lg text-center ">
                    <img className="h-[192px] w-full mb-4"
                     src={Garden} alt="Garden Villas" />
                    <b>Garden Villas</b>
                    <p className="mt-3">Suburban Area</p>
                    <p>Elegant villas surrounded by lush gardens,
                       offering tranquility and comfort for families.
                    </p>
                </div>
            </div>
             <Link to="/feature">
                   <button 
                           className="block mt-[40px] bg-[#2563EB] text-[#FFFFFF]  mx-auto rounded-xl pt-[12px] pr-[32px] pb-[12px] pl-[32px] hover:bg-blue-400"
                           data-aos= "fade-up" data-aos-duration="2000" >
                         View All Projects
                    </button>
             </Link>
        </div>
    )
}
export default Projects;
