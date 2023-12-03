import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Burger Shop | Menu </title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
    </div>
  );
};

export default Menu;
