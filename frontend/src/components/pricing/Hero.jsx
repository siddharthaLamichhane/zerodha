import zero from "../../../src/assets/imagesP/1.svg";
import twenty from "../../../src/assets/imagesP/20.svg";

export const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="p-5 text-center ">
          <h2 className="pt-5">Charges</h2>
          <h5
            className=" mt-4"
            style={{ paddingBottom: "150px", color: "#cccccc" }}
          >
            List of all charges and taxes
          </h5>
        </div>

        <div className="row text-center p-5">
          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src={twenty}
              alt="Free equity delivery"
              style={{ width: "300px", marginBottom: "20px" }}
            />
            <h1 style={{ fontSize: "1.5rem" }}>Free equity delivery</h1>
            <p className="text-muted px-3">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src={zero}
              alt="Intraday and F&O trades"
              style={{ width: "300px", marginBottom: "20px" }}
            />
            <h1 style={{ fontSize: "1.5rem" }}>Intraday and F&O trades</h1>
            <p className="text-muted px-3">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>

          <div className="col-md-4 d-flex flex-column align-items-center">
            <img
              src={twenty}
              alt="Free direct MF"
              style={{ width: "300px", marginBottom: "20px" }}
            />
            <h1 style={{ fontSize: "1.5rem" }}>Free direct MF</h1>
            <p className="text-muted px-3">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
