import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Disclaimer from "../Disclaimer/Disclaimer";
import Featured from "../Featured/Featured";
import PopularItem from "../PopularItem/PopularItem";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Burger Shop | Home </title>
      </Helmet>
      <Banner />
      <Category />
      <Disclaimer />
      <PopularItem />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
