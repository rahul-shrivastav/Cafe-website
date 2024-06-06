import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const getoneitem = (id) => {
    const [dataa, setdata] = useState([])
    useEffect(() => {
        const getitem = async () => {
            try {
                const res = await fetch(`/items/${id}`, {
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
        getitem()
    }, [])
    return dataa
};


export default getoneitem;

