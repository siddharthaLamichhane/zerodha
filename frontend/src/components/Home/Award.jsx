import ecosystem from "../../assets/images/ecosystem.png";
import presslogos from "../../assets/images/presslogos.png";

export const Award = () => {
  return (
    <>
      <div className="container mb-5 p-5">
        <div className="row mb-5 p-5">
          <div className="col-5  p-5">
            <h2>Trust with confidence</h2>
            <div>
              <h3>Customer-first always</h3>
              <p>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </p>
              <h3>No spam or gimmicks</h3>
              <p>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </p>
            </div>
          </div>
          <div className="col-7">
            <img
              className="img-fluid w-75"
              src={ecosystem}
              alt="Ecosystem Image"
            ></img>
            <div className="d-flex gap-3">
              <a href="#explore" className="btn btn-primary">
                Explore Our Products <i className="fas fa-arrow-right ms-2"></i>
              </a>
              <a href="#kite" className="btn btn-outline-secondary">
                Try Kite <i className="fas fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src={presslogos} alt="Press Logos" />
      </div>
    </>
  );
};
//   <div className="row">
//           <h1>Trust with confidence</h1>
//         </div>
//         <div className="col-3">
//           <img src={ecosystem} alt="Ecosystem Image"></img>
//         </div>
