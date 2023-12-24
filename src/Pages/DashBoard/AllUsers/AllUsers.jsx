import { Helmet } from "react-helmet";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { useQuery } from "react-query";
import Swal from "sweetalert2";

const AllUsers = () => {
  const { data: users = [] } = useQuery(["users"], async () => {
    const res = await fetch("https://burger-shop-server-nu.vercel.app/users");
    return res.json();
  });
  const handleMakeAdmin = (user) => {
    fetch(`https://burger-shop-server-nu.vercel.app/users/admin/${user._id}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${user.name} is Admin Now`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="bg-white text-black p-8">
      <Helmet>
        {" "}
        <title>Burger Shop || All Users</title>
      </Helmet>
      <h3 className="text-3xl font-semibold ">Totall Users : {users.length}</h3>
      <div>
        <table className="table">
          <thead>
            <tr className="uppercase">
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th> role</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.role === "admin" ? (
                    "admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-ghost btn-sm h-10 bg-slate-500 text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button className="btn btn-ghost btn-sm h-10 bg-red-500 text-white">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
