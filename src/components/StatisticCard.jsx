import React from "react";

const StatisticCard = ({ title, description, Icon, style }) => {
  return (
    <div className="card" style={style}>
      <div className="icon">
        <Icon size={32} color="#fff" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default StatisticCard;
