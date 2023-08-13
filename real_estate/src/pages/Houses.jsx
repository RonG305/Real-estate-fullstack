
import HouseCard from "../components/HouseCard"
import SearchHouses from "../components/SearchHouses"
import { FaHome, FaChair, FaTree, FaWarehouse, FaUtensilSpoon } from "react-icons/fa"
import { AiFillHome } from "react-icons/ai"
import { useEffect, useState } from "react"



const Houses = () => {
    const iconColors = 'fill-gray-700'
    const textStyles = 'text-gray-700 font-light'


    const [houseList, setHouseList] = useState([])
   
    const fetchFromApi = async () => {
        try {
          const response = await fetch('http://localhost:8000/api/houses/');
          const data = await response.json()
            setHouseList(data);
            console.log(data)
        } catch (error) {
          console.log('Error occurred while fetching the data:', error);
        }
      };
      
      useEffect(() => {
        fetchFromApi();
      }, []);
        
    return (
        <div className="mt-24 ">

            <div className="flex items-center justify-center ">
                <SearchHouses />
            </div>
                <div className="flex items-center justify-center mt-5 overflow-x-auto ">
                    <ul className="flex items-center justify-center gap-8 ">
                        <li className={textStyles}><FaHome size={30} className={iconColors} />Apartments</li>
                        <li className={textStyles}><AiFillHome size={30}  className={iconColors}  />Mansions</li>
                        <li className={textStyles}><FaChair size={30}  className={iconColors}  />Furniture</li>
                        <li className={textStyles}><FaTree size={30}  className={iconColors}  />Land</li>
                        <li className={textStyles}><FaUtensilSpoon size={30}  className={iconColors}  />Hotels</li>
                        <li className={textStyles}><FaWarehouse size={30}  className={iconColors}  />WareHouses</li>
                     
                    </ul>
            </div>
                
                 <div className="flex flex-wrap gap-5 md:mx-8 my-8 lg:grid lg:grid-cols-4 md:grid md:grid-cols-3 ">
                 {houseList.map((house, index) => 
                     
                     <HouseCard
                         key={index}
                         house={house}
                     />
                 )}
             </div>
           
            
            
        </div>
    )
}

export default Houses