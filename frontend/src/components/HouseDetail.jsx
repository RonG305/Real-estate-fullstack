import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { FaShower, FaBed  } from 'react-icons/fa'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const HouseDeatil = () => {

    const formStyles = "px-4 py-1 border rounded-md outline-none m-2"
    const divStyles = "p-3 mt-4 font-light border rounded-md"

    const [formData, setFormData] = useState({
        'client_name': '',
        'client_id': '',
        'client_address': '',
        'email_address': '',
        'phone_number': '',
        'message': ''
    })
    
    const [house, setHouse] = useState({})
    const params = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await fetch('http://localhost:8000/api/client/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify(formData)
            })

            if (response.ok) {
                console.log('client created successifully')
            }

            else {
                console.log('Failed to create the client')
            }
        } catch (error) {
            console.log('An error occured while submitting the data')
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({
            ...formData,
            [name]: value
        })
    }



   
    const fetchHouse = async () => {
        try {
          const response = await fetch(`http://localhost:8000/api/houses/${params.id}/`);
          const data = await response.json()
            setHouse(data);
        } catch (error) {
          console.log('Error occurred while fetching the data:', error);
        }
      };
      
      useEffect(() => {
        fetchHouse();
      }, []);
    
    
    
      
    const baseUrl = 'http://localhost:8000';
    const houseImage = baseUrl + house.house_image
    const houseImageOne = baseUrl + house.houseImage1
    const houseImageTwo = baseUrl + house.houseImage2
    const houseImageThree = baseUrl + house.houseImage3

    const imageStyles = " h-[60vh] w-full object-cover"
      
    
    return (
        <div className="mt-20 md:flex gap-8 md:w-[85%] m-auto ">
            <div className="mt-4 md:w-1/2">
            <Splide
                    options={ {
                        rewind: true,
                        gap: '1rem',
                       
                    } }
                    aria-label="My Favorite Images">
                    <SplideSlide>
                        <img src={houseImage} alt="Image 1" className={ imageStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={houseImageOne} alt="Image 2" className={ imageStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={houseImageTwo} alt="Image 3" className={imageStyles} />
                    </SplideSlide>
                    <SplideSlide>
                        <img src={houseImageThree} alt="Image 3" className={ imageStyles} />
                    </SplideSlide>
            </Splide>
            </div>
            
            <div className="md:w-1/2">
                <div className="flex flex-col gap-3 p-3 mt-4 border rounded-md ">
                    <h4 className="text-2xl font-extrabold text-blue-600 ">Pricing: ${house?.pricing_in_dollars}</h4>
                    <p>{house?.location}</p>
                    <span className="flex gap-4">
                        <p><FaBed size={25} />{house?.bedrooms}</p>
                        <p><FaShower size={25} />{ house?.bathrooms}</p>
                    </span>
                </div>

                <div className={divStyles}>
                    <p className="mb-4 text-xl text-blue-600">{ house?.category}</p>
                    <p className="text-sm font-light ">{ house?.description}</p>
                </div>

                <div className={divStyles}>
                    <p className="mb-4 text-2xl font-semibold text-blue-600">Property Overview</p>
                    <p>Bedrooms : {house?.bedrooms}</p>
                    <p>Bathrooms: { house?.bathrooms}</p>
                </div>


                {/* Form */}

                <div className={divStyles}>
                    <p>BOOK FOR SITE TOUR</p>
                    <form action="" onSubmit={handleSubmit} className="flex flex-col">
                        <input
                            onChange={handleInputChange}
                            name="client_name"
                            value={formData.client_name}
                            className={formStyles}
                            type="text"
                            placeholder="Enter Full Name"
                        />

                        <input
                            onChange={handleInputChange}
                            name="client_address"
                            value={formData.client_address}
                            className={formStyles}
                            type="text"
                            placeholder="address"
                        />

                        <input
                            onChange={handleInputChange}
                            name="email_address"
                            value={formData.email_address}
                            className={formStyles}
                            type="email"
                            placeholder="Email address"
                        
                        />

                        <input
                            onChange={handleInputChange}
                            name="client_id"
                            value={formData.client_id}
                            className={formStyles}
                            type="text"
                            placeholder="National ID"
                           
                        />          
                        <input
                            onChange={handleInputChange}
                            name="phone_number"
                            value={formData.phone_number}
                            className={formStyles}
                            type="text"
                            placeholder="Phone number"
                           
                        />
                        <textarea
                            onChange={handleInputChange}
                            name="message"
                            value={formData.message}
                            className={formStyles}
                            id="" cols="30" rows="10"
                            placeholder="Write your message here...">
                            
                            </textarea>
                        <input className="px-5 py-1 mt-8 font-bold text-white bg-blue-600 rounded-md cursor-pointer" type="submit" value="Send message" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default HouseDeatil