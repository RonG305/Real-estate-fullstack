import { Link } from "react-router-dom"
import { useState } from "react"


const Login = () => {

    const formStyles = "border rounded-md px-4 py-2 outline-none gap-5 mr-4 mb-3" 
    const submitStyles = "px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800 font-bold cursor-pointer"
    const formHeader = " font-lobster font-extrabold text-blue-600 text-3xl text-center my-8"
    const accountStyles = " text-blue-600 font-bold text-xl py-8"

    const initialState = {
        username: '',
        password: ''
    }

    const [formData, setFormData] = useState(initialState)
    const handleOnchange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
        
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    const {username, password} = formData

    return (
        <div className=" w-96 h-[70vh] rounded-xl bg-slate-200 p-6 ">
            <h1 className={formHeader}>Login To Account</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    className={formStyles}
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={username}
                    onChange={handleOnchange}
                
                />
                <input
                    className={formStyles}
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleOnchange}
                />
                <input
                    className={submitStyles}
                    type="submit"
                
                />
                
            </form>
            
            <p>Dont Have an account ? <Link className={accountStyles} to='signup/'>Sign up</Link></p>
            
        </div>
    )
}

export default Login