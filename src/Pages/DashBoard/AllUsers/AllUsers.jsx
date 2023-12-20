import { Helmet } from "react-helmet";
import { FaTrash, FaUserShield } from "react-icons/fa";
import { useQuery } from "react-query";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/users");
    return res.json();
  });

  const handleDelete = () => {};
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
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-ghost btn-sm h-10 bg-slate-500 text-white"
                    >
                      <FaUserShield />
                    </button>
                  )}
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-sm h-10 bg-red-500 text-white"
                  >
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
