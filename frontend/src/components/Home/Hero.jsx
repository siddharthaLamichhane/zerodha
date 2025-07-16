import heroSection from "../../../src/assets/images/heroSection.png";
export const Hero = () => {
  return (
    <>
      <div className="container p-5">
        <div className="row text-center">
          <img src={heroSection} alt="Home Hero" className="mb-5"></img>
          <h1 className="mt-5">Invest in everything</h1>
          <p>
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more.
          </p>
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
};
