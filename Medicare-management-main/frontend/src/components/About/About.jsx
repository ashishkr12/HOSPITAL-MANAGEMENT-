import React from 'react';
import aboutImg from '../../assets/images/about.png'
import aboutCardImg from '../../assets/images/about-card.png'
import { Link } from 'react-router-dom';


const About = () => {
  return <section> 
     <div className='container'>
         <div className='flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row '>
               
               {/* ========= about img========= */}
               <div className='relative w-3/4 lg:w-1/2 xl:w-[770px] z-10 order-2 lg:order-1 '>
                  <img src={aboutImg} alt="aboutImg" />
                  <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right[-7%] lg:right-[22%] ">
                    <img src={aboutCardImg} alt="aboutCardImg" />
                  </div>
               </div>

               {/* ========== about content ========= */}
               <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2">
                 <h2 className='heading'>Proud to be one of the nations best</h2>
                 <p className='text__para mt-[30px]'>For 3+ years in a row, Indian News & World Report has recognised us as one of the best public hospitals in the Nation and #1 in New Delhi. Our main aim is to provide best medical services and world-class care for everyone. Our health system offers unmatched expert health care. From the lab to the clinic.<br/>We provide services 24*7 we have specialist doctor in every field from child care to Cancer specialist we have 15+ offline hospitals we also provide online appointment booking system user can pay in online mode using stripe payment gateway.  </p>
                 
                 <Link to='/'>
                    <button className='btn'>Learn More</button>
                 </Link>
               </div>
         </div>
     </div>
  </section>
};

export default About;