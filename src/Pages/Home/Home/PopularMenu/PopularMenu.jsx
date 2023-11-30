import { useEffect } from "react";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import { useState } from "react";

const PopularMenu = () => {
  const { menu, setMenu } = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="FROM OUR MENU"
      ></SectionTitle>
    </section>
  );
};

export default PopularMenu;
