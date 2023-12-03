import MenuItem from "../../../Component/MenuItem/MenuItem";

const MenuCategory = ({ items }) => {
  return (
    <div>
      <div className="grid  md:grid-cols-2 gap-4 ">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex py-4 justify-center">
        <button className="btn  btn-warning  text-white">View full Menu</button>
      </div>
    </div>
  );
};

export default MenuCategory;
