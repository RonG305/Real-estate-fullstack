import FAQustions from "../components/FAQuestions"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import HouseCase from "../components/HouseCase"
import MainSearch from "../components/MainSearch"
import Partners from "../components/Partners"
import PopularDeals from "../components/PopularDeals"
import Services from "../components/Services"
import Statistics from "../components/Statistics"





const HomePage = () => {
    return (
        <>
            <Hero />
            {/* <Partners /> */}
            <Services />
            <MainSearch />
            <Statistics />
            <PopularDeals />
            <HouseCase />
            <FAQustions />
            <Footer />
        </>
    )
}

export default HomePage