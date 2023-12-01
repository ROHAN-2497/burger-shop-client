import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import pic1 from "../../../assets/home/featured.jpg";
import '../Featured/Featured.css'
const Featured = () => {
  return (
    <div className="featured text-white pt-8 my-20">
      <SectionTitle
        subHeading="Check it out"
        heading="from our menu"
      ></SectionTitle>
      <div className="  md:flex justify-center items-center space-x-4 pt-12 pb-20 px-36 ">
        <div>
          <img src={pic1} alt="" />
        </div>
        <div className="md:ml-10">
          <p>
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur
          </p>
          <button className="btn btn-outline border-0 border-b-4 btn-black text-white">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
