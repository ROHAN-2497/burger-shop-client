const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div>
      <p className="text-yellow-500 ">----{subHeading}----</p>
      <h3 className="text-4xl uppercase border-y-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
