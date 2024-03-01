import { FaRegStar} from 'react-icons/fa'
import {HiLocationMarker} from 'react-icons/hi'
import { mainSearch } from '../assets/mainSearch'


const MainSearch = () => {

    const containerStyles = " w-[80%] m-auto md:h-[80vh]"
    const subContainerStyles = "flex items-center justify-center flex-col py-5"
    const header = 'Most Searched Locations'
    const headerStyles = " text-3xl md:text-5xl font-extrabold text-center my-8"
    const headerDescription = "Very strategic location | has very adequate Facilities | suitable for families with modern home look"

    return (
        <div className={containerStyles}>
            <div className={subContainerStyles}>
                <h1 className={headerStyles}>{ header}</h1>
                <p>{ headerDescription}</p>
            </div>
            <div className="md:flex items-center justify-between gap-5 my-5 ">
                {mainSearch.map((item) => 
                    
                    <div key={item.id} className='md:w-1/3'>
                        <img src={item.image} alt="" className=' mb-3' />
                        <h3 className='flex items-center gap-3 font-bold '><HiLocationMarker className=' fill-blue-600' />{item.location}</h3>
                        <p>{ item.places}+ places</p>
                        <p className='flex items-center gap-3 mb-3'><FaRegStar className=' fill-yellow-600' />{ item.rating} (1.2 Reviews)</p>
                    </div>
                    
                )}
                
                
            </div>
        </div>
    )
}

export default MainSearch