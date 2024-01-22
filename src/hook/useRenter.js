import { useContext } from "react";
import { AuthContext } from "../Pages/Provider/AuthProvider";
import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const {user, loading} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // use axios secure with react query
    const {data: isRenter, isLoading: isRenterLoading} = useQuery({
        queryKey: ['isRenter', user?.email],
        enabled: !loading && !!user?.email,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/renter/${user?.email}`);
            return res.data.renter;
        }
    })

    return [isRenter, isRenterLoading];
    
};

export default useAdmin;