import React from "react";

const SingleSide = ({ item }) => (
  <div>
    <div className="divider"></div>
    <a href={item.url} target="_blank" rel="noreferrer">
      <div className="side-item">
        <img
          src={item.urlToImage || "https://via.placeholder.com/60"}
          alt={item.title}
          className="side-img"
        />
        <div className="side-content">
          <h5 className="side-title">{item.title}</h5>
          <span style={{ fontSize: "12px", color: "#888" }}>
            {item.source.name}
          </span>
        </div>
      </div>
    </a>
  </div>
);

export default SingleSide;
