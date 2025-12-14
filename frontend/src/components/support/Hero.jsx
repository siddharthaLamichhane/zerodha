export const Hero = () => {
  return (
    <section className="container-fluid" id="supportHero">
      {/* Top bar */}
      <div id="supportWrapper" className="mt-5 mb-5">
        <h3>Support Portal</h3>
        <a href="#">Track My Ticket</a>
      </div>

      {/* Main content */}
      <div className="row mt-5 mb-5 support-row">
        {/* Left column */}
        <div className="col-6 content-column">
          <h1 className="fs-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          </h1>

          <input type="text" placeholder="Eg. how do I activate F&O" />

          <div className="links">
            <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
            <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
            <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
            <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
          </div>
        </div>

        {/* Right column */}
        <div className="col-6 content-column">
          <h1 className="fs-3">Features</h1>

          <div className="links ">
            <a href="#">1.Lorem ipsum dolor sit amet consectetur.</a>
            <br />
            <a href="#">Lorem ipsum dolor sit amet consectetur.</a>
          </div>
        </div>
      </div>
    </section>
  );
};
