import { Helmet } from "react-helmet";
import {
  FaAddressBook,
  FaCalendar,
  FaHome,
  FaMoneyBill,
  FaShoppingBag,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdMenu } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import useCart from "../Hooks/useCart";

const DashBoard = () => {
  const [cart] = useCart();
  return (
    <div className="drawer lg:drawer-open">
      <Helmet>
        <title>Burger Shop || DashBoard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-[#D1A054] uppercase">
          <li>
            <NavLink to="/dashboard/userhome">
              <FaHome></FaHome> user home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar></FaCalendar>reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/history">
              <FaWallet></FaWallet>payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/mycart">
              <FaShoppingCart></FaShoppingCart> My Cart
              <span className="badge">{cart?.length || 0}</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
              <FaMoneyBill></FaMoneyBill> add reivew
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
              <FaAddressBook></FaAddressBook> my booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salads">
              <MdMenu /> Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaShoppingBag></FaShoppingBag> Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <IoIosContact /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
