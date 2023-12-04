import MenuItem from "../../../Component/MenuItem/MenuItem";
import Cover from "../Cover/Cover";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="pt-10 pb-10">
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid  md:grid-cols-2 gap-4 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex py-4 mt-10 mb-10 justify-center">
        <button className="btn  btn-warning  text-white">
          Order your favourite Food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
