import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Disclaimer from "../Disclaimer/Disclaimer";
import PopularItem from "../PopularItem/PopularItem";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Disclaimer/>
      <PopularItem/>
    </div>
  );
};

export default Home;
