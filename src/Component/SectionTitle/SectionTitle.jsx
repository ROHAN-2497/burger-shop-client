const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="mx-auto  md:w-4/12 text-center my-16">
      <p className="text-yellow-600 text-2xl mb-2">----{subHeading}----</p>
      <h3 className="text-4xl uppercase border-y-4 py-4  text-white">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
