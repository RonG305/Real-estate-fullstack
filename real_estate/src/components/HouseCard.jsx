
import { AiFillStar, AiOutlineHeart} from 'react-icons/ai'
import {HiLocationMarker} from 'react-icons/hi'
import { FaShower, FaBed, FaTape, FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component';


const HouseCard = (props) => {
    const {id ,house_image, house_title, rating, location, sqr_feet, pricing_in_dollars, bedrooms, bathrooms, category} = props.house
    const [likes, setLikes] = useState(false)
    const [likeCount, setLikeCount] = useState(0)

    const baseUrl = 'http://localhost:8000';
    const houseImage = baseUrl + house_image




    const handleClick = () => {
        if (likes) {
            setLikeCount(likeCount + 1)
        }
        setLikes(!likes) 
    }

    const iconColor = 'fill-gray-700'
    const detailsStyles = ' font-light grid lg:grid-cols-2 md:flex-wrap '
    const paragraphStyle = 'flex gap-3 mb-2'



    
    return (  
        <Link to={`${id}`} className='relative w-full p-3 duration-300 border rounded-xl hover:scale-105'>
            <LazyLoadImage
                 src={houseImage} alt={house_title} className='object-cover w-full h-64 gap-4 rounded-xl house-image '
            />
            
            <p className='absolute px-5 py-1 bg-blue-300 rounded top-6 left-6'>{category}</p>
                <h3 className="my-3 text-2xl font-bold text-gray-600 ">$ {pricing_in_dollars}</h3>
                <p className='font-bold'>{location}</p>
                    <div className={detailsStyles}>
                        <p className={paragraphStyle}><HiLocationMarker size={25} className={iconColor}  />KIlimani Loudge NYC</p>
                        <p className={paragraphStyle}><FaTape size={25} className={iconColor}  />{sqr_feet} sqr feet</p>
                        <p className={paragraphStyle}><FaShower size={25} className={iconColor}  />{bathrooms} Bathrooms</p>
                        <p className={paragraphStyle}><FaBed size={25} className={iconColor} /> {bedrooms} Bedrooms</p>
                        <p className='flex gap-3'><AiFillStar className=' fill-yellow-400' size={25} />{rating} (1.2 Reviews)</p>

                        <p onClick={handleClick} className='cursor-pointer '>
                        {likes ? (<FaHeart className=' fill-red-600' />) : <AiOutlineHeart /> }
                        </p>
                        <button className=' bg-blue-400 rounded-md px-3 py-1 w-fit my-3 font-bold text-white'>request tour</button>
                           
                    </div>
            </Link>
    )
}


export default HouseCard