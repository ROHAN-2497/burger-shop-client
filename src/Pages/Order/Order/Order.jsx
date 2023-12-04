import { useState } from "react";
import banner from "../../../assets/shop/order-banner2.jpg";
import Cover from "../../Menu/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../Hooks/useMenu";
import FoodCard from "../../../Component/FoodCard/FoodCard";
const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div > 
      <Cover img={banner} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>salad</Tab>
          <Tab>pizza</Tab>
          <Tab>soup</Tab>
          <Tab>dessert</Tab>
          <Tab>drink</Tab>
        </TabList>
        <TabPanel>
            <div className="grid md:grid-cols-3 gap-10  ">
                {
                    salads.map(item => <FoodCard
                    key={item._id}
                    item={item}
                    ></FoodCard>)
                }
            </div>
        </TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
        <TabPanel></TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
