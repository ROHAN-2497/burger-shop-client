const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className="text-white flex  space-x-4 ">
        <img className="w-[118px] h-[104px]" src={image} alt="" />
      <div>
        <h3>{name}-------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;
