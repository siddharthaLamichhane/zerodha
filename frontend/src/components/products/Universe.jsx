// import zerodhafundhouse from "../../../src/assets/images/products/";
import dittologo from "../../../src/assets/images/universal/dittologo.png";
import sensibulllogo from "../../../src/assets/images/universal/sensibulllogo.svg";
import smallcaselogo from "../../../src/assets/images/universal/smallcaselogo.png";
import streaklogo from "../../../src/assets/images/universal/streaklogo.png";
// import tijori from "../../../src/assets/images/products/tijori.svg";

export const Universe = () => {
  const imageStyle = {
    width: "120px",
    height: "120px",
    objectFit: "contain",
  };

  const partners = [
    // { img: zerodhafundhouse, alt: "Zerodha Fund House" },
    { img: sensibulllogo, alt: "Sensibull" },
    // { img: tijori, alt: "Tijori" },
    { img: smallcaselogo, alt: "Smallcase 1" },
    { img: streaklogo, alt: "Streak" },
    { img: dittologo, alt: "Ditto" },
  ];

  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h1 className="fw-bold mb-5">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row">
        {partners.map((partner, index) => (
          <div className="col-md-4 col-sm-6 mb-4 text-center" key={index}>
            <img
              src={partner.img}
              alt={partner.alt}
              style={imageStyle}
              className="mb-3"
            />
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              corporis velit ab corrupti, veniam modi iure tenetur reprehenderit
              soluta beatae!
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
