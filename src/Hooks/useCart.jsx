import { useContext } from "react";
import { useQuery } from "react-query";
import { AuthContext } from "../Providers/AuthProvider";
const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://burger-shop-server-nu.vercel.app/carts?email=${user.email}`,
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      return res.json();
    },
  });
  return [cart, refetch];
};
export default useCart;
