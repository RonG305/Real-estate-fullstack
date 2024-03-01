
const ServiceCard = ({ service }) => {
    const {title, description} = service

    const containerStyles = " my-8 text-center md:w-1/4 "
    const subContainerStyles = "bg-slate-200 flex flex-col items-center justify-center h-96 px-4 rounded-xl "
    const headerStyles = "my-5 text-xl font-bold text-blue-600"
    
    return (
        <div className={containerStyles}>
            <div className={subContainerStyles}>
                <div className=" w-20 h-20 rounded-full bg-orange-600"></div>
                 <h3 className={headerStyles}>{title}</h3>
                <p>{description}</p>
             
            </div>
            
        </div>
    )
}


export default ServiceCard