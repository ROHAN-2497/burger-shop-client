import banner1 from "../../../assets/Total Image/hero-bg.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={banner1} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
