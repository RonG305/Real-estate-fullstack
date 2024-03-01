import Login from "../components/Login.jsx"
import Navbar from "../components/Navbar"

const LoginPage = () => {
    return (
        <div>
            <Navbar />
            <div className=" mt-20 flex items-center justify-center loginBackgroundImage">
                <Login />
            </div>
           
        </div>
    )
}

export default LoginPage