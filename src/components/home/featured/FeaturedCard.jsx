import React, { useState } from "react";
import { featured } from "../../data/Data";

const FeaturedCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleIconClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <div className="content grid5 mtop">
        {featured.map((item, index) => (
          <div
            className={`box ${activeIndex === index ? "active" : ""}`}
            key={index}
            onClick={() => handleIconClick(index)}
          >
            <img src={item.cover} alt={item.name} />
            <h4>{item.name}</h4>
            {activeIndex === index && <label>{item.total}</label>}
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedCard;
