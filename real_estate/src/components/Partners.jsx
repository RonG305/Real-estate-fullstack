import { partners } from "../assets/partners"


const Partners = () => {

    const companyText = 'Companies we have partnered with'
    const comparyTextStyle = " font-extrabold md:text-5xl text-3xl text-center my-6 "
    const patnersStyles = "flex flex-wrap px-4 items-center gap-8"
    const containerStyles = " md:h-[50vh] flex flex-col items-center justify-center partnersImage " 

    return (
        <div className={containerStyles}>
            <h1 className={comparyTextStyle}>{ companyText}</h1>
            <div className={patnersStyles}>  
            {partners.map((partner) => 
                <img className=" w-40 rounded-md " key={partner.id} src={partner.logo} alt="logo" />
            )}
            </div>
        </div>
        
    )
}

export default Partners