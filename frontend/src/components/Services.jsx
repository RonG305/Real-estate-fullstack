import { services } from "../assets/services"
import ServiceCard from "./ServiceCard"

const Services = () => {

    const servicesList = services.map((service) => 
        <ServiceCard key={service.id} service={service} />
    )
    return (
        <div className="w-[80%] m-auto md:h-[60vh] servicesImage ">
            <div className="h-full">
                <h1 className=" font-extrabold md:text-5xl text-center text-3xl my-3">Our services</h1>
                <p className=" text-center">We provide best and satisfying services to our clients </p>
                <div className="md:flex gap-5 items-center justify-between">
                    {servicesList}
                </div>
            </div>
           
        </div>
    )
}

export default Services