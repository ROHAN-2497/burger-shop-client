import { Helmet } from "react-helmet";
import useCart from "../../../Hooks/useCart";
import { FaTrash } from "react-icons/fa";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

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
      <SectionTitle
      subHeading={'my cart'}
      heading={'WANNA ADD MORE?'}
      ></SectionTitle>
      <div className="uppercase  flex gap-6 font-mono items-center h-20">
        <h3 className="text-3xl">Total Order : {cart.length}</h3>
        <h3 className="text-3xl">Total price : {total}</h3>
        <button className="btn btn-warning btn-sm">PAY</button>
      </div>
      <div className="overflow-x-auto bg-white text-black">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>item image</th>
              <th>item name</th>
              <th>price</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key="item._id">
                <td>{index + 1}</td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img className="rounded-full"
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>

                <td>
                  <button className="btn btn-ghost btn-sm h-10 bg-red-500 text-white"><FaTrash /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
