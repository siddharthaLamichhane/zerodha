import pricingeq from "../../assets/images/pricingeq.svg";
import othertrades from "../../assets/images/othertrades.svg";

export const Pricing = () => {
  return (
    <div className="container my-5 m-5">
      <div className="row align-items-center">
        {/* Left Text Section */}
        <div className="col-md-5" >
          <h1>Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <p >
            <a href="#pricing">
              See Pricing <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </p>
        </div>

        {/* Right Image Section */}
        <div className="col-md-7">
          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <img
              src={pricingeq}
              alt="Pricing Eq"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
            <img
              src={pricingeq}
              alt="Pricing Eq 2"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
            <img
              src={othertrades}
              alt="Other Trades"
              className="img-fluid"
              style={{ maxWidth: "150px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
