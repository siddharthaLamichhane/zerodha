// import appstorebadge from "../../../src/assets/images/products/appstorebadge.svg";
// import googleplaybadge from "../../../src/assets/images/products/googleplaybadge.svg";
// import landing from "../../../src/assets/images/products/landing.svg";
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
      <RightSection />
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
      <RightSection />
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
      <RightSection />
      <Universe />
    </div>
  );
};

//  imageURL,
//   productName,
//   productDescription,
//   tryDemo,
//   learnMore,
//   googlePlay,
//   appStore,
