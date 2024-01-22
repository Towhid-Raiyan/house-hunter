import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useStudent = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // use axios secure with react query
    const {data: isOwner, isLoading: isOwnerLoading} = useQuery({
        queryKey: ['isOwner', user?.email],
        enabled: !loading && !!user?.email ,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/owner/${user?.email}`);
            // console.log(res.data.owner);
            return res.data.owner;
        }
    })

    return [isOwner, isOwnerLoading];
};

export default useStudent;