import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";

const Category = () => {
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper  mb-24"
    >
      <SwiperSlide>
        <img src={slide1} alt="" />
        <h3 className="uppercase text-4xl  -mt-20 left-16 absolute text-white">
          salads
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide2} alt="" />
        <h3 className="uppercase text-4xl  -mt-20 left-16 absolute text-white">
          pizzas
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide3} alt="" />
        <h3 className="uppercase text-4xl  -mt-20 left-16 absolute text-white">
          soups
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide4} alt="" />
        <h3 className="uppercase text-4xl  -mt-20 left-16 absolute text-white">
          deserts
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src={slide5} alt="" />
        <h3 className="uppercase text-4xl  -mt-20 left-16 absolute text-white">
          salads
        </h3>
      </SwiperSlide>
    </Swiper>
  );
};

export default Category;

{
  /* <Swiper
slidesPerView={4}
spaceBetween={50}
pagination={{
  clickable: true,
}}
modules={[Pagination]}
className="mySwiper"
>
<SwiperSlide>
  <div className="relative w-full">
    <img src={slide1} alt="" />
    <h3 className="text-white bottom-10 left-16 absolute  text-4xl  uppercase">
      salads{" "}
    </h3>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full">
    <img src={slide2} alt="" />
    <h3 className="text-white bottom-10 left-16 absolute  text-4xl  uppercase">
      soups{" "}
    </h3>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full">
    <img src={slide3} alt="" />
    <h3 className="text-white bottom-10 left-16 absolute  text-4xl  uppercase">
      pizzas{" "}
    </h3>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full">
    <img src={slide4} alt="" />
    <h3 className="text-white bottom-10 left-16 absolute  text-4xl  uppercase">
      deserts{" "}
    </h3>
  </div>
</SwiperSlide>
<SwiperSlide>
  <div className="relative w-full">
    <img src={slide5} alt="" />
    <h3 className="text-white bottom-10  absolute  text-4xl  uppercase">
      salads{" "}
    </h3>
  </div>
</SwiperSlide>
</Swiper> */
}