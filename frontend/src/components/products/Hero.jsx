export const Hero = () => {
  return (
    <>
      <div
        className="container d-flex flex-column align-items-center  border-bottom mt-5"
        style={{ paddingTop: "100px", paddingBottom: "100px" }}
      >
        <h1>Zerodha Products</h1>
        <h6 className="text-muted">
          Sleek, modern, and intuitive trading platforms
        </h6>
        <p className="p-4">
          Check out our {""}
          <a style={{ textDecoration: "none" }} href="#">
            investment offerings →
          </a>
        </p>
      </div>
    </>
  );
};
