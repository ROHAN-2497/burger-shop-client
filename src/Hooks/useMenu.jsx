import { useEffect } from "react";
import { useState } from "react";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    fetch("https://burger-shop-server-nu.vercel.app/menu")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return [menu, loading];
};

export default useMenu;
