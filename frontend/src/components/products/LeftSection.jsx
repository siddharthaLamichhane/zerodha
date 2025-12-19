import appstorebadge from "../../../src/assets/images/products/appstorebadge.svg";
import googleplaybadge from "../../../src/assets/images/products/googleplaybadge.svg";
// import landing from "../../../src/assets/images/products/landing.svg";
// import productscoin from "../../../src/assets/images/products/productscoin.png";
// import productsconsole from "../../../src/assets/images/products/productsconsole.png";
// import productskite from "../../../src/assets/images/products/productskite.png";
// import tijori from "../../../src/assets/images/products/tijori.svg";
// import varsityproducts from "../../../src/assets/images/products/varsityproducts.png";
// import zerodhafundhouse from "../../../src/assets/images/products/zerodhafundhouse.png";

export const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
  arrowIcon,
}) => {
  return (
    <>
      <div className="container ">
        <div className="row">
          <div className="col d-flex ">
            <div className="col-6 p-5  ">
              <img src={imageURL} />
            </div>
            <div className="col-6 p-5 mt-5 " style={{ marginLeft: "50px" }}>
              <h1>{productName}</h1>
              <p
                style={{
                  paddingRight: "180px",
                  fontSize: "16px",
                }}
              >
                {productDescription}
              </p>
              <div className="mt-3 mb-3">
                {tryDemo?.trim() && (
                  <a style={{ textDecoration: "none" }} href={tryDemo}>
                    {tryDemo}
                    {arrowIcon}
                  </a>
                )}
                {learnMore?.trim() && (
                  <a
                    href={learnMore}
                    style={{ marginLeft: "50px", textDecoration: "none" }}
                  >
                    {learnMore}
                    {arrowIcon}
                  </a>
                )}
              </div>
              <div className="mt-3 gap-4">
                <a href={googlePlay}>
                  <img src={googleplaybadge} />
                </a>
                <a href={appStore}>
                  <img src={appstorebadge} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
