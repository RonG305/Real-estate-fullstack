import { lazy } from 'react'
import { FaShower, FaBed, FaTape } from 'react-icons/fa'
import { HiLocationMarker } from 'react-icons/hi'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const PopularDeals = () => {
    const iconColor = 'fill-blue-600'
    const detailsStyles = ' font-light grid grid-cols-2 '
    const paragraphStyle = 'flex gap-3'

    const poplarDeals = [
        {
            image: '../../mansion1.jpg',
            price: '4.6 million',
            location: 'Kilimani',
            locationdetail: 'Kilimani lodge NYC',
            sqr_feet: '234 sqr fee',
            birthrooms: '2 Bathrooms',
            bedrooms: '4 Bedrooms'
        },

        {
            image: '../../mansion4.jpg',  
            price: '3.8 million',
            location: 'KIleleshwa',
            locationdetail: 'Kileleshwa lodge',
            sqr_feet: '200sqr fee',
            birthrooms: '3 Bathrooms',
            bedrooms: '4 Bedrooms'
        },
          
        {
            image: '../../mansion8.jpg',  
            price: '4.8 million',
            location: 'Runda',
            locationdetail: 'Runda expo Flats',
            sqr_feet: '230 sqr fee',
            birthrooms: '4 Bathrooms',
            bedrooms: '6 Bedrooms'
        },  
    ]
    return (
        <div className=" w-[80%] m-auto  md:h-auto">
            <h1 className=" text-3xl md:text-5xl  font-extrabold my-8">Popular Deals for You</h1>
            <div className="md:flex gap-8 md:1/3 mb-5">

                {poplarDeals.map((deal, index) =>
                <div key={index} className=' mb-5'>
                     <img src={deal.image} alt="best deals" />
                     <h3 className=" text-blue-600 font-bold my-3 text-2xl ">{deal.price}</h3>
                     <p className='font-bold'>{deal.location}</p>
                     <div className={detailsStyles}>
                            <p className={paragraphStyle}><HiLocationMarker size={25} className={iconColor} />{ deal.locationdetail}</p>
                            <p className={paragraphStyle}><FaTape size={25} className={iconColor} />{ deal.sqr_feet}</p>
                            <p className={paragraphStyle}><FaShower size={25} className={iconColor} />{ deal.birthrooms}</p>
                            <p className={paragraphStyle}><FaBed size={25} className={iconColor} /> { deal.bedrooms}</p>
                     </div>
                 </div>
                )}
                
            </div>

        </div>
    )
}

export default PopularDeals