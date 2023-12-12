
const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const handleAddtoCart = item =>{
    console.log(item)
  }

  return (
    <div className="card card-compact w-full ">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="bg-slate-900 text-white absolute right-10 top-0 mr-2 px-4 rounded-xl mt-2">
          {price}
        </p>{" "}
      </figure>
      <div className="card-body flex  px-2 items-center">
        <h2 className="card-title">{name}</h2>
        <p className="py-4">{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() =>handleAddtoCart(item)} className="btn btn-outline border-0 border-b-4 btn-white text-white">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
