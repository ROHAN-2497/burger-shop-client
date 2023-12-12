import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, recipe, image, price } = item;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleAddtoCart = (item) => {
    console.log(item);
    if (user) {
      fetch("http://localhost:5000/carts")
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "your item add to cart.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } else {
      Swal.fire({
        title: "Are you sure?",
        text: "Please Login to Order the Food",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Login Now",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

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
          <button
            onClick={() => handleAddtoCart(item)}
            className="btn btn-outline border-0 border-b-4 btn-white text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
