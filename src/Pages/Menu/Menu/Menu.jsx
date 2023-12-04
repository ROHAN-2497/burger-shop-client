import { Helmet } from "react-helmet";
import Cover from "../Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import pizzasImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";
import dessertsImg from "../../../assets/menu/dessert-bg.jpeg";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Burger Shop | Menu </title>
      </Helmet>
      <Cover img={menuImg} title="Our Menu"></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading={"TODAY'S OFFER"}
      ></SectionTitle>
      {/* offered Items */}
      <MenuCategory items={offered}></MenuCategory>
      {/* desserts Items */}
      <MenuCategory
        items={desserts}
        title="desserts"
        img={dessertsImg}
      ></MenuCategory>
      {/* pizzas Items */}
      <MenuCategory
        items={pizzas}
        title="pizzas"
        img={pizzasImg}
      ></MenuCategory>
      {/* salads Items */}
      <MenuCategory
        items={salads}
        title="salads"
        img={saladsImg}
      ></MenuCategory>
      {/* soups items */}
      <MenuCategory items={soups} title="soups" img={soupsImg}></MenuCategory>
    </div>
  );
};

export default Menu;
