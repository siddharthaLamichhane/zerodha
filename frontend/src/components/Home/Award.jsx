import ecosystem from "../../../src/assets/images/ecosystem.png";

export const Award = () => {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-4">
            <h1>Trust with confidence</h1>
          </div>
          <div className="col-7">
            <img className="w-76 " src={ecosystem} alt="Ecosystem Image"></img>
          </div>
        </div>
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
