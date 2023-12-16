import { Helmet } from "react-helmet";
import { FaCalendar, FaHome, FaShoppingCart, FaWallet } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
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
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content uppercase">
          {/* Sidebar content here */}
          <li>
            <Link>
              <FaHome></FaHome> user home
            </Link>
          </li>
          <li>
            <Link>
              <FaCalendar></FaCalendar>reservation
            </Link>
          </li>
          <li>
            <Link>
              <FaWallet></FaWallet>payment history
            </Link>
          </li>
          <li>
            <Link>
              <FaShoppingCart></FaShoppingCart> My Cart
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
