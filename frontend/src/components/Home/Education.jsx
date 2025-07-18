import indexeducation from "../../assets/images/indexeducation.svg";
export const Education = () => {
  return (
    <>
      <div className="container d-flex pt-5">
        <div className="col-6 p-4">
          <img src={indexeducation}></img>
        </div>
        <div className="col-6 p-4">
          <h2>Free and open market education</h2>
          <p className="p-2 ">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <p className="p-2 ">
            <a href="#versity">
              Varsity <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </p>

          <p className="p-2 ">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <p className="p-2 ">
            <a href="#versity">
              Trading&Q&A <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
