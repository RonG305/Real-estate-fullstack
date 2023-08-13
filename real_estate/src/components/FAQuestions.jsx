
import { faqs } from "../assets/faqs"
import FAQCard from "./FAQCard"


const FAQustions = () => {
    const faqList = faqs.map((faq, index) => 
        <FAQCard key={index} faq={faq} />
    )

    const headerStyles = " font-bold text-center text-2xl mb-8 text"
    return (
        <div className=" w-[80%] m-auto text-gray-700">
            <h3 className={headerStyles}>Frequently asked questions</h3>
            {faqList}
        </div>
    )
}

export default FAQustions