import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/MenuItem/MenuItem";

const PopularItem = () => {
  const [menu, setMenu] = useState([]);
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
        heading="from our menu"
      ></SectionTitle>
      <div className="grid  md:grid-cols-2 gap-4 ">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
     <div className="flex py-4 justify-center">
     <button className="btn  btn-warning  text-white">
        View full Menu
      </button>
     </div>
    </section>
  );
};

export default PopularItem;
