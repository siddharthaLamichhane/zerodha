export const CreateTicket = () => {
  return (
    <>
      <div className="container ">
        <div className="bg-light p-5">
          <div className="d-flex justify-content-between align-items-center ">
            <h1>Support Portal</h1>
            <button className="btn btn-primary">
              {" "}
              <i class="fa fa-gg-circle" aria-hidden="true"></i> My Ticket
            </button>
          </div>
          <input
            className="border shadow p-3 mb-5 bg-white rounded form-control"
            type="text"
            placeholder="e.g. search something"
            style={{ marginTop: "50px" }}
          />
        </div>
        <div>
          <div>
            <h5>How do I withdraw funds from Zerodha?</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              You can withdraw funds via your linked bank account by logging
              into your Zerodha Console and requesting withdrawal under the
              funds section.
            </p>
          </div>
          <hr />
          <div>
            <h5>What are the brokerage charges for intraday trading?</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              For intraday trading, Zerodha charges a flat ₹20 or 0.03%
              (whichever is lower) per executed order.
            </p>
          </div>
          <hr />
          <div>
            <h5>How do I reset my account password?</h5>
            <p className="text-muted" style={{ fontSize: "0.9rem" }}>
              Click on the ‘Forgot Password’ link on the login page, and follow
              the instructions sent to your registered email.
            </p>
          </div>
        </div>

        {/* Contact Support Section */}
        <div
          className="col-12 col-md-5 p-4 bg-light border rounded shadow-sm"
          style={{ minHeight: "400px" }}
        >
          <h3 className="mb-4" style={{ fontWeight: "600" }}>
            Contact Support
          </h3>

          <p className="text-muted" style={{ fontSize: "0.9rem" }}>
            If you can’t find the answer you’re looking for, reach out to us:
          </p>

          <div className="mb-3">
            <label
              htmlFor="name"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Your full name"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="email"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              className="form-control"
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="issue"
              className="form-label"
              style={{ fontWeight: "500" }}
            >
              Describe your issue
            </label>
            <textarea
              id="issue"
              rows="4"
              className="form-control"
              placeholder="Please provide details"
            ></textarea>
          </div>

          <button
            className="btn btn-primary w-100"
            style={{ fontWeight: "600" }}
          >
            Submit Ticket
          </button>
        </div>
      </div>
    </>
  );
};
