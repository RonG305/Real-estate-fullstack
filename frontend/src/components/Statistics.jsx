import { Link } from "react-router-dom"

const Statistics = () => {

    const image = '../../public/building.jpg'
    const header = 'With Us you can find your dream House'
    const description = 'We guarantee that the products we sell will make our customers happy because we are concerned about customer satisfaction'
    const happyCustomers = 243
    const happyCustomerDescription = 'Happy customer with our services'
    const numberOfProperties = 200
    const propertyDescription = 'Best Proprties we provide'
    const companies = 38
    const companiesDescription = 'companies affiliated with us'
    const buttonText = 'see More'

    const stylesForParagraph = "font-light"
    const stylesForHeader = " text-3xl md:text-5xl font-extrabold py-3 text-blue-600"
    const stylesSubHeader = " text-3xl font-bold py-3 text-blue-600"
    const btnStyles = ' md:px-5 py-2 text-white bg-blue-600 hover:bg-blue-800 rounded-xl w-44'




    return (
        <div className="md:flex w-[80%] m-auto gap-8 my-8  background">
            <div className="md:w-1/2">
                <img src={image} alt="luxurious building" />
            </div>
           
            <div className="md:w-1/2 bg-bg-image">
                <h1 className={stylesForHeader}>{header}</h1>
                <p className={stylesForParagraph}>{description}</p>

                <div className=" my-3">
                    <h2 className={stylesSubHeader}>{happyCustomers} K+</h2>
                    <p className={stylesForParagraph}> { happyCustomerDescription}</p>
                </div>

                <div className=" my-3">
                    <h2 className={stylesSubHeader}>{numberOfProperties} K+</h2>
                    <p className={stylesForParagraph}> { propertyDescription}</p>
                </div>

                <div className=" my-3">
                <h2 className={stylesSubHeader}>{companies} K+</h2>
                    <p className={stylesForParagraph}>{ companiesDescription}</p>
                </div>

                <button className={btnStyles}><Link to='houses/'>{ buttonText}</Link></button>

              
                
            </div>
        </div>
    )
}

export default Statistics