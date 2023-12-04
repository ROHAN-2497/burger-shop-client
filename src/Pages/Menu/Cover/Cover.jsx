import Tilt from "react-parallax-tilt";
const Cover = ({ img, title }) => {
  return (
    <div>
      <Tilt>
        <div style={{ height: "700px", backgroundColor: "darkgreen" }}>
          <div
            className="hero h-[700px]"
            style={{
              backgroundImage: `url("${img}")`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                <p className="mb-5">Would you like to try a dish?</p>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
};

export default Cover;
