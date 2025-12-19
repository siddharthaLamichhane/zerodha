// import appstorebadge from "../../../src/assets/images/products/appstorebadge.svg";
// import googleplaybadge from "../../../src/assets/images/products/googleplaybadge.svg";
// import landing from "../../../src/assets/images/products/";
import productscoin from "../../../src/assets/images/products/productscoin.png";
// import productsconsole from "../../../src/assets/images/products/products-console.png";
import productskite from "../../../src/assets/images/products/productskite.png";
// import tijori from "../../../src/assets/images/products/tijori.svg";
import varsityproducts from "../../../src/assets/images/products/varsityproducts.png";
// import zerodhafundhouse from "../../../src/assets/images/products/zerodhafundhouse.png";

import { Hero } from "./Hero.jsx";
import { LeftSection } from "./Leftsection.jsx";
import { RightSection } from "./Rightsection.jsx";
import { Universe } from "./Universe.jsx";
export const ProductPage = () => {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL={productskite}
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo "
        learnMore="Learn More "
        googlePlay=""
        appStore=""
        arrowIcon={
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        }
      />
      <RightSection
        imageURL={productskite}
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations.."
        tryDemo="Try Demo "
        learnMore="Learn More "
        arrowIcon={
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        }
      />
      <LeftSection
        imageURL={productscoin}
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
        arrowIcon={
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        }
      />
      <RightSection
        imageURL={productscoin}
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        tryDemo="Try Demo "
        learnMore="Kite Connect "
        arrowIcon={
          <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
        }
      />
      <LeftSection
        imageURL={varsityproducts}
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=" "
        learnMore=""
        googlePlay=""
        appStore=""
        arrowIcon=""
      />
      <div className="text-center my-4">
        <p className="mb-0">
          Want to know more about our technology stack? Check out the{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            Zerodha.tech
          </a>{" "}
          blog.
        </p>
      </div>
      <Universe />
    </div>
  );
};
