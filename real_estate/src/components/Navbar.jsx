
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'

const links = [
    {
        name: 'home',
        url: '/',
    },

    {
        name: 'about',
        url: 'about/',
    },

    {
        name: 'houses',
        url: 'houses/',
    },

    {
        name: 'lands',
        url: 'lands/'
    },

  



   
]

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav)
    }
    
    
    return (
        <div className = 'fixed top-0 z-40 flex items-center justify-between w-full h-20 px-6 bg-slate-300'>
            <div className='text-2xl text-blue-700 font-lobster'><Link to='/'>Best Homes</Link></div>

            <div >
                    <div  className=' hidden md:flex items-center gap-3 capitalize '>
                    {links.map((link, index) => 
                        <ul key={index}>
                            <li style={{color: 'blue'}}><Link to={link.url}>{link.name}</Link></li>
                        
                    </ul>
                    )}
                </div>
                
                {nav && <div  className='items-center gap-3 capitalize flex md:hidden  flex-col absolute top-20 mt-2 right-1 bg-slate-300 w-1/2 h-[100vh] p-5 rounded-xl'>
                    {links.map((link, index) => 
                        <ul key={index}>
                            <li style={{color: 'blue', fontSize: 20 }}><Link to={link.url}>{link.name}</Link></li>
                        
                    </ul>
                    )}
                </div> }

                   

                {nav ?
                    <FaTimes
                        onClick={handleClick}
                        size={30}
                        className='md:hidden'
                    />
                        
                    :
                    <FaBars
                        onClick={handleClick}
                        size={30}
                        className="md:hidden"
                    />
                        
                }
                
                
                
            </div>
            
          
            
        </div>
    )
}


export default Navbar