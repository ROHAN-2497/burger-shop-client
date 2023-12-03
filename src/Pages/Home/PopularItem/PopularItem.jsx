import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../../Component/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";

const PopularItem = () => {
  const [menu] = useMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");
  return (
    <section>
      <SectionTitle
        subHeading="Check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="grid  md:grid-cols-2 gap-4 ">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex py-4 justify-center">
        <button className="btn  btn-warning  text-white">View full Menu</button>
      </div>
    </section>
  );
};

export default PopularItem;
