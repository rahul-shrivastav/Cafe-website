import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";

const usepostorder = () => {
    const { authUser } = useAuthContext()

    const usepost = async (itemid, quantity) => {
        try {
            const res = await fetch(`/order/post/${authUser._id}/${itemid}/${quantity}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // body: JSON.stringify({ userid: authUser._id }),
            });

            const data = await res.json()

            if (data.error) {
                throw new Error(data.error);
            }
            console.log("order posted")

        } catch (error) {
            toast.error(error.message);
        }
    }

    return { usepost };
};


export default usepostorder;

