import React from "react";
import { FiAward, FiBarChart2, FiSettings } from "react-icons/fi";
import StatisticCard from "../components/StatisticCard"; 
import "../styles/AdvanceStatistics.css"; 

const AdvanceStatistics = () => {
  const cards = [
    {
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.",
      Icon: FiAward,
      style: { marginTop: "0" },
    },
    {
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
      Icon: FiBarChart2,
      style: { marginTop: "2rem" },
    },
    {
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links. supercharging audience engagement.",
      Icon: FiSettings,
      style: { marginTop: "4rem" },
    },
  ];

  return (
    <section className="statistics">
      <h2>Advanced Statistics</h2>
      <p>
        Track how your links are performing across the web with our advanced statistics dashboard.
      </p>

      <div className="cards">
        <div className="line-prop"></div>
        {cards.map((card, index) => (
          <StatisticCard key={index} {...card} />
        ))}
      </div>
    </section>
  );
};

export default AdvanceStatistics;
