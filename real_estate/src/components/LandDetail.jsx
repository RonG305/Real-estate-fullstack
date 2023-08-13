import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaCalendar, FaLandmark  } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const LandDetail = () => {

    const formStyles = "px-4 py-1 border rounded-md outline-none m-2"
    const divStyles = "p-3 mt-4 font-light border rounded-md"
    
    const [land, setLand] = useState({})
    const params = useParams()
   
    const fetchLand = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/lands/${params.id}/`);
          const data = await response.json()
            setLand(data);
            console.log(data)
        } catch (error) {
          console.log('Error occurred while fetching the data:', error);
        }
      };
      
      useEffect(() => {
        fetchLand();
      }, []);
    
        
    const baseUrl = 'http://localhost:8000';
    const landImage = baseUrl + land.land_image
    const landImageOne = baseUrl + land.landImage1
    const landImageTwo = baseUrl + land.landImage2
    const landImageThree = baseUrl + land.landImage3
    

    const imageStyles = " max-h-[70vh] w-full"
    
    
    return (
        <div className="mt-20 md:flex gap-8 md:w-[85%] m-auto">
            <div className="mt-4 md:w-1/2">
            <Splide
                    options={ {
                        rewind: true,
                        gap: '1rem',
                        arrows: true,
                        autoWidth: 20
                       
                    } }
                    aria-label="My Favorite Images">
                    <SplideSlide>
                        <img className={imageStyles} src={ landImage} alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className={imageStyles} src={ landImageOne} alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className={imageStyles} src={landImageTwo} alt="Image 3"/>
                    </SplideSlide>
                    <SplideSlide>
                        <img className={imageStyles} src={landImageThree} alt="Image 3"/>
                    </SplideSlide>
            </Splide>
            </div>
            
            <div className="md:w-1/2">
                <div className="flex flex-col gap-3 p-3 mt-4 border rounded-md ">
                    <h4 className="text-2xl font-extrabold text-blue-600 ">Pricing: ${land?.price}</h4>
                    <p>{land?.location}</p>
                    <span className="flex gap-4">
                        <p><FaLandmark size={25} />Title : {land?.land_title}</p>
                        <p><FaCalendar size={25} />Date Posted : { land?.date_created}</p>
                    </span>
                </div>

                <div className={divStyles}>
                    <p className="mb-4 text-xl text-blue-600">{ land?.land_category}</p>
                    <p className="text-sm font-light ">{ land?.description}</p>
                </div>

                <div className={divStyles}>
                    <p className="mb-4 text-2xl font-semibold text-blue-600">Property Overview</p>
                    <p>size of plot : {land?.land_size} sqr metres </p>
                    <p>County: {land?.county}</p>
                    <p>Category: { land?.land_category}</p>
                </div>

                <div className={divStyles}>
                    <p>BOOK FOR SITE TOUR</p>
                    <form action="" className="flex flex-col">
                        <input className={formStyles} type="text" placeholder="Name" />
                        <input className={formStyles} type="email" placeholder="Email address" />
                        <input className={formStyles} type="number" placeholder="Phone number" name="" />
                        <textarea className={formStyles} name="" id="" cols="30" rows="10"></textarea>
                        <input className="px-5 py-1 mt-8 font-bold text-white bg-blue-600 rounded-md" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LandDetail