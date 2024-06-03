import { Link } from "react-router-dom";
import { useState } from "react";
// import usesignup from "../../hooks/useSignup.js";


const Signuppage = () => {
    const [inputs, setInputs] = useState({
        fullName: "",
        username: "",
        password: "",
        confirmPassword: "",
    });
    // const { loading, signup } = usesignup()

    const handleEvent = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // await signup(inputs);
    };

    return (
        <>

            <div className="flex landingimg  flex-col items-center justify-center mx-auto p-6 min-w-96">
                <div className="h-full w-2/6 bg-black rounded-md bg-clip-padding p-9 backdrop-filter backdrop-blur-lg bg-opacity-40">

                    <h1 className="text-5xl font-semibold text-center bluish p-3">
                        -SIGNUP-
                    </h1>
                    <div className="text-center">
                        <span className="text-white text-2xl text-center">To create account</span>
                    </div>

                    <form action="" className="flex p-6 flex-col items-center justify-center w-full">

                        <div className="p-4">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow btn-wide" placeholder="Full Name" value={inputs.fullName} name="fullName" onChange={handleEvent} />
                                {/* <input type="text" className="grow btn-wide" placeholder="Full Name" value={inputs.fullName} htmlFor="fullName" onChange={(e) => { setInputs({ ...inputs, fullName: e.target.value }) }} /> */}
                            </label>
                        </div>



                        <div className="p-4">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow btn-wide" placeholder="Username" name='username' value={inputs.username} onChange={handleEvent} />
                            </label>
                        </div>
                        <div className="p-4">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow btn-wide" placeholder="Password" name='password' value={inputs.password} onChange={handleEvent} />
                            </label>
                        </div>
                        <div className="p-4">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow btn-wide" placeholder="Confirm Password" name='confirmPassword' value={inputs.confirmPassword} onChange={handleEvent} />
                            </label>
                        </div>

                        <div>
                            <button className="btn btn-wide mt-7" onClick={handleSubmit}  >Signup</button>

                        </div>


                        <div className="text-white mt-7">
                            Already have an account ?
                            {/* <Link to={"/login"} className="bluish"> Login</Link> */}
                        </div>


                    </form>
                </div>


            </div>
        </>
    )
}

export default Signuppage;