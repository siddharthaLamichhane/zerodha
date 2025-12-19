import nithinkamath from "../../../src/assets/images/nithinkamath.jpg";
import Circle from "./Circle.jsx";
export const Team = () => {
  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center text-muted"
        style={{ height: "50px" }}
      >
        <h1 style={{ fontSize: "24px" }}>People</h1>
      </div>
      {/* Main Content */}
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Image + Name */}
          <div className="col-md-6 d-flex justify-content-center">
            <div className="text-center">
              <img
                src={nithinkamath}
                alt="Nithin Kamath"
                style={{
                  borderRadius: "50%",
                  height: "250px",
                  width: "250px",
                  objectFit: "cover",
                }}
              />
              <h4 className="mt-3 text-muted">Nithin Kamath</h4>
              <hp className="mt-3 text-muted">Founder, CEO</hp>
            </div>
          </div>

          {/* Text or Other Content */}
          <div className="col-md-6">
            <div
              className="text-muted  justify-content-start"
              style={{ paddingRight: "150px", fontSize: "16px" }}
            >
              <p>
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p>
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p>Playing basketball is his zen.</p>
            </div>
            <div>
              <p>Connect on</p>
              <a href="#">Homepage </a>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "30px" }}
        className="d-flex gap-5 m-3  flex-wrap"
      >
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
        <Circle
          imgSrc={nithinkamath}
          name="Nithin Kamath"
          title="Founder, CEO"
        />
      </div>
    </div>
  );
};
