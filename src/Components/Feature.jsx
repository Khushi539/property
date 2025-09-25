import apartment from "../assets/apartment.jpg";
import house from "../assets/house.jpg";
import villa from "../assets/villa.jpg";
import space from "../assets/space.jpg";
import apartments from "../assets/apartments.jpg"
import green from "../assets/green.jpg";
import plot from "../assets/plot.jpg";
import laxury from "../assets/laxury.jpg"
import dream from "../assets/dream.jpg"

const Feature = () => {
   return (
       <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 m-10">
          <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={apartment} alt="" />
               <b className="">City Apartment</b>
               <p className="mt-4">
                  Managed 75+ apartment listings across major cities, connecting genuine buyers and sellers in record time.
              </p>
          </div>

          <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={house} alt="" />
               <b>Affordable House</b>
               <p className="mt-4">
                  Supported 60+ buyers in securing budget-friendly homes with safe documentation and fair pricing.
              </p>
          </div>

          <div className="shadow shadow-gray-300 m-4 p-4 text-center"
            data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={villa} alt="" />
               <b>Villa Sales</b>
               <p className="mt-4">
                  Successfully closed multiple high-value villa deals in prime locations, ensuring satisfaction for both buyers and sellers.
              </p>
          </div>
           
           <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={space} alt="" />
               <b>Commercial Spaces</b>
               <p className="mt-4">
                  Facilitated the sale and rental of 25+ commercial shops and offices, helping businesses expand easily.
              </p>
          </div>

            <div className="shadow shadow-gray-300 m-4 p-4 text-center"
              data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={dream} alt="" />
               <b>Dream Home</b>
               <p className="mt-4">
                  Managed 75+ apartment listings across major cities, connecting genuine buyers and sellers in record time.
              </p>
          </div>
          
           <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={apartments} alt="" />
               <b>Rental Property</b>
               <p className="mt-4">
                  Connected landlords and tenants for 100+ rental properties, ensuring smooth agreements and hassle-free living.
              </p>
          </div>

           <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={plot} alt="" />
               <b>Land & Plot</b>
               <p className="mt-4">
                  Helped clients buy and sell 50+ residential and commercial plots with clear documentation and fast approvals.
              </p>
          </div>

           <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={laxury} alt="" />
               <b>Luxury Apartment</b>
               <p className="mt-4">
                  Closed successful deals for luxury apartments in top locations, offering buyers premium lifestyle homes.
              </p>
          </div>

           <div className="shadow shadow-gray-300 m-4 p-4 text-center"
             data-aos="fade-up" data-aos-duration="2000">
               <img className="h-90 w-full mb-4" src={green} alt="" />
               <b>Green Living Home</b>
               <p className="mt-4">
                  Promoted eco-friendly housing projects, enabling families to own sustainable homes with modern facilities.
              </p>
          </div>

      </div>
   )
}

export default Feature;