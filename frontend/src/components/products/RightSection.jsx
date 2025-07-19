export const RightSection = ({
  imageURL,
  productName,
  productDescription,
  learnMore,
  arrowIcon,
}) => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-5 p-5">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "600",
            }}
          >
            {productName}
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.6",
              paddingRight: "220px",
              marginTop: "20px",
            }}
          >
            {productDescription}
          </p>
          <div className="mt-4 d-flex gap-4">
            {learnMore?.trim() && (
              <>
                <a
                  href={learnMore}
                  style={{
                    textDecoration: "none",
                    color: "#007bff",
                    fontWeight: "500",
                  }}
                >
                  {learnMore} {arrowIcon}
                </a>
              </>
            )}
          </div>
        </div>

        {/* Image Column */}
        <div className="col-7 text-center ">
          <img
            src={imageURL}
            alt="Product Visual"
            style={{
              maxWidth: "100%",
              height: "auto",
              paddingRight: "120px",
            }}
          />
        </div>
      </div>
     
    </div>
  );
};
