export const Hero = () => {
  return (
    <div className="container">
      {/* Hero Headline Section */}
      <div
        className="d-flex flex-column text-center"
        style={{
          alignItems: "center",
          paddingTop: "100px",
          paddingBottom: "150px",
          fontSize: "1.6rem",
          lineHeight: "1.4",
          fontWeight: "400",
        }}
      >
        <h2 style={{ fontWeight: "400" }}>
          We pioneered the discount broking model in India.
        </h2>
        <h2 style={{ fontWeight: "400" }}>
          Now, we are breaking ground with our technology.
        </h2>
      </div>

      {/* Divider */}
      <hr className="m-0" />

      {/* Info Section */}
      <div
        className="row text-muted"
        style={{
          fontSize: "19px", // Slightly larger font
          lineHeight: "1.8",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div
          className="col-md-6"
          style={{ paddingLeft: "150px", paddingRight: "30px" }} // More left padding
        >
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div
          className="col-md-6"
          style={{ paddingRight: "150px", paddingLeft: "30px" }} // More right padding
        >
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>
          <p>
            <a href="#" className="text-decoration-none ">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>
          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our blog or see what the media is saying about
            us or learn more about our business and product philosophies.
          </p>
        </div>
      </div>
    </div>
  );
};
