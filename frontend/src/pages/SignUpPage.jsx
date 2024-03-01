
import Navbar from "../components/Navbar"
import SignUp from "../components/SignUp.jsx"

const SignUpPage = () => {
    return (
        <div>
            <Navbar />
            <div className=" mt-20 flex items-center justify-center loginBackgroundImage">
                <SignUp />
            </div>
           
        </div>
    )
}

export default SignUpPage