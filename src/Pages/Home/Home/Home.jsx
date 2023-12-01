import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Disclaimer from "../Disclaimer/Disclaimer";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Disclaimer/>
      <PopularItem/>
      <Featured/>
    </div>
  );
};

export default Home;
