import { Link } from "react-router-dom";
import { useState } from "react";
import uselogin from '../hooks/useLogin.js';



const Loginpage = () => {
    const [username, setUsername] = useState('user1');
    const [password, setPassword] = useState('password1');

    const { loading, login } = uselogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        login(username, password);
    }
    return (
        <>

            <div className="landingimg h-screen w-screen flex  flex-col items-center justify-center">
                <div className="h-fit w-2/6 bg-black shadowed rounded-md bg-clip-padding p-9 backdrop-filter backdrop-blur-lg bg-opacity-70">

                    <h1 className="text-5xl font-semibold text-center bluish p-3">
                        -LOGIN-
                    </h1>
                    <div className="text-center">
                        <span className="text-white text-2xl text-center">To CafeIn</span>
                    </div>
                    <form action="" className="flex p-6 flex-col items-center justify-center w-full" onSubmit={handleSubmit}>
                        <div className="p-6">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg " viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                                <input type="text" className="grow btn-wide" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                            </label>
                        </div>
                        <div className="p-4">

                            <label className="input input-bordered flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                                <input type="password" className="grow btn-wide" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            </label>
                        </div>
                        <div>
                            <button className="btn btn-wide mt-7" type="submit">Login</button>

                        </div>
                        <div className="text-white mt-7">
                            Don't have an account ?
                            <Link to={"/signup"} className="text-amber-400"> Signup</Link>
                        </div>


                    </form>
                </div>


            </div>
        </>

    )
}

export default Loginpage;