import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const getallitems = () => {
    const [dataa, setdata] = useState([])
    useEffect(() => {
        const getitems = async () => {
            try {
                const res = await fetch("/items/all", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    // body: JSON.stringify({ username, password }),
                });

                const data = await res.json()
                setdata(data)



                if (data.error) {
                    throw new Error(data.error);
                }

            } catch (error) {
                toast.error(error.message);
            }
        }
        getitems()
    }, [])
    return dataa
};


export default getallitems;

