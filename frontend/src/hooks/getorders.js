import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useEffect, useState } from "react";

const usegetorders = () => {
    const { authUser } = useAuthContext()
    const [dataa, setdata] = useState([])
    const [idataa, setidata] = useState([])
    useEffect(() => {
        const getorders = async () => {
            try {
                const res = await fetch(`/order/get/${authUser._id}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    // body: JSON.stringify({ userid: authUser._id }),
                });

                const data = await res.json()

                setdata(data)


                if (data.error) {
                    throw new Error(data.error);
                }

            } catch (error) {
                toast.error(error.message);
            }

            return dataa
        }
        getorders()
    }, [])
    return dataa;
};


export default usegetorders;

