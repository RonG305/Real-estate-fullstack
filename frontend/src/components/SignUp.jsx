import { useState } from "react"
import { Link } from "react-router-dom"

const SignUp = () => {

    const formStyles = "border rounded-md px-4 py-2 outline-none gap-5 mr-4 mb-3" 
    const submitStyles = "px-8 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-800 font-bold cursor-pointer"
    const formHeader = " font-lobster font-extrabold text-blue-600 text-3xl text-center my-8"
    const accountStyles = " text-blue-600 font-bold text-xl py-8"

    const initialState = {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password1: '',
        password2: ''
    }

    const [formData, setFormData] = useState(initialState)
    const { username, firstName, lastName, email, password1, password2 } = formData
    
    const handleOnChange = (e) => {
        const { name, value } = e.target
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }

    return (
        <div className=" w-96 h-[70vh] rounded-xl bg-slate-200 p-6 ">
            <h1 className={formHeader}>SignUp To Account</h1>
            <form action="" onSubmit={handleSubmit}>
                <input
                    className={formStyles}
                    type="text"
                    placeholder="Enter user name"
                    name="username"
                    value={username}
                    onChange={handleOnChange}
                
                />
                <input
                    className={formStyles}
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    value={firstName}
                    onChange={handleOnChange}
                />
                <input
                    className={formStyles}
                    type="text"
                    placeholder="Last Name"
                    name="lastName"
                    value={lastName}
                    onChange={handleOnChange}
                
                />
                <input
                    className={formStyles}
                    type="email"
                    placeholder="Enter E-mail"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                
                />
                <input
                    className={formStyles}
                    type="password"
                    placeholder=" password"
                    name="password1"
                    value={password1}
                    onChange={handleOnChange}
                />
                <input
                    className={formStyles}
                    type="password"
                    placeholder="Re-enter Password"
                    name="password2"
                    value={password2}
                    onChange={handleOnChange}
                />
                <input
                    className={submitStyles}
                    type="submit"
                    value='Register' />
            </form>

            <p>Have an Account ? <Link className={accountStyles} to='login/'>Login</Link></p>
            
        </div>
    )
}

export default SignUp