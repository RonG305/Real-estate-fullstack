import { useState } from 'react'
import {MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown} from 'react-icons/md'

const FAQCard = ({ faq }) => {
    const {question, answer} = faq
    const [showMore, setShowMore] = useState(false)

    const handleShowMore = () => {
        setShowMore(!showMore)
    }

    return (
        <div onClick={handleShowMore} className='flex items-center justify-between px-4 py-2 mb-5 shadow-sm cursor-pointer rounded-xl bg-slate-100 duration-300'>
            <div>
                <h4 className="mb-3 text-lg font-bold">{ question}</h4>
                {showMore && <p className="font-light">{answer}</p>}
            </div>
            <div>
                {showMore ? <MdOutlineKeyboardArrowUp size={30}/> : <MdOutlineKeyboardArrowDown size={30} />}
              
            </div>

            
        </div>
    )
}

export default FAQCard