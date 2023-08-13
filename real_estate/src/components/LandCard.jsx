
import { AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import { FaShower, FaBed, FaTape, FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import {Link} from 'react-router-dom'


const LandCard = (props) => {

    const { id, land_image, land_title, price, land_size, land_category, location, county } = props.land
    


    const iconColor = 'fill-gray-700'
    const detailsStyles = ' font-light grid lg:grid-cols-2 md:flex-wrap '
    const paragraphStyle = 'flex gap-3 mb-2'

    const baseUrl = 'http://localhost:8000';
    const landImage = baseUrl + land_image

    

    
    return (  
            <Link to={`${id}`} className='relative p-3 border rounded-xl w-full'>
            <img src={landImage} alt="image" className='gap-4 rounded-xl hover:blur-sm hover:scale-110 house-image max-h-64 w-full object-cover  ' />
            <p className='absolute px-5 py-1 bg-orange-600 rounded top-6 left-6'>{land_category}</p>
                <h3 className="my-3 text-2xl font-bold text-gray-600 ">$ {price}</h3>
                <p className='font-bold'>Location: {location}</p>
                    <div className={detailsStyles}>
                <p className={paragraphStyle}><HiLocationMarker size={25} className={iconColor} />{ land_title}</p>
                        <p className={paragraphStyle}><FaTape size={25} className={iconColor}  />{land_size} sqr metres</p>
                        <p className={paragraphStyle}>{land_category}</p>
                        <p className={paragraphStyle}>{county}</p>
                        <p className='flex gap-3'><AiFillStar className=' fill-yellow-400' size={25} />{2} (1.2 Reviews)</p>    
                    </div>
            </Link>
    )
}


export default LandCard