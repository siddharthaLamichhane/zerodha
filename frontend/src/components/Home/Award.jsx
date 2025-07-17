import ecosystem from "../../../src/assets/images/ecosystem.png";
import presslogos from "../../../src/assets/images/presslogos.png";

export const Award = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row mb-5">
          <div className="col-5 ">
            <h2>Trust with confidence</h2>
            <div>
              <h3>Customer-first always</h3>
              <h4>
                That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
                crores of equity investments and contribute to 15% of daily
                retail exchange volumes in India.
              </h4>
              <h3>No spam or gimmicks</h3>
              <h4>
                No gimmicks, spam, "gamification", or annoying push
                notifications. High quality apps that you use at your pace, the
                way you like. Our philosophies.
              </h4>
            </div>
          </div>
          <div className="col-7">
            <img
              className="img-fluid w-75"
              src={ecosystem}
              alt="Ecosystem Image"
            ></img>
          </div>
        </div>
      </div>
      <div className="align-items: center">
        <img src={presslogos}></img>
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
