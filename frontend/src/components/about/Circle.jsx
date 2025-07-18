import React from "react";

const Circle = ({ imgSrc, name, title }) => {
  return (
    <div>
      <div className="text-center">
        <img
          src={imgSrc}
          alt={name}
          style={{
            borderRadius: "50%",
            height: "250px",
            width: "250px",
            objectFit: "cover",
          }}
        />
        <h4 className="mt-3 text-muted">{name}</h4>
        <p className="mt-3 text-muted">{title}</p>
      </div>
    </div>
  );
};

export default Circle;
