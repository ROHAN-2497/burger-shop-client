import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  console.log(cart);
  const total = cart.reduce((sum, item) => item.price + sum, 0);
  return (
    <div>
      <Helmet>
        {" "}
        <title>Burger Shop || My Cart</title>
      </Helmet>
      <div className="uppercase flex">
        <h3 className="text-3xl">Total Length : {cart.length}</h3>
        <h3 className="text-3xl">Total price : {total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
    </div>
  );
};

export default MyCart;
