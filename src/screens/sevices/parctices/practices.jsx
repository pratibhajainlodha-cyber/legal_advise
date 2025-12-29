import React from "react";


const practiceAreas = [
  {
    icon: "🏦",
    title: "Banking and Finance",
    description: "Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut",
  },
  {
    icon: "👨‍👩‍👧",
    title: "Family Law",
    description: "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate",
  },
  {
    icon: "💼",
    title: "Business Law",
    description: "Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit",
  },
  {
    icon: "🏠",
    title: "Real Estate",
    description: "Massa sagittis lectus montes vel sit. Faucibus odio in ut massa in integer ultrice",
  },
  {
    icon: "⚖️",
    title: "Civil Law",
    description: "Faucibus odio in ut massa in integer ultrices lacus est. Tempus ultrices placerat tellus",
  },
  {
    icon: "📑",
    title: "Corporate Law",
    description: "Tempus ultrices placerat tellus morbi. Varius quisque odio mauris lectus consequat sed",
  },
  {
    icon: "🔰",
    title: "Criminal Law",
    description: "Potenti porta mauris nec vulputate. Massa sagittis lectus montes vel sit",
  },
  {
    icon: "🪪",
    title: "Immigration Law",
    description: "Pretium purus feugiat volutpat pellentesque. Potenti porta mauris nec vulputate",
  },
  {
    icon: "🌐",
    title: "International Law",
    description: "Varius quisque odio mauris lectus consequat sed. Pretium purus feugiat volut",
  },
];

const PracticeAreas = () => {
  return (

    <section className="partices-sec">
  <div className="container">
    <div className="fixed-icon">
      <span>
        <i className="fa fa-arrow-up" id="fixed-i"></i>
      </span>
    </div>

    <section className="practice-areas">
      <h2>Practice Areas</h2>
      <p>
        Varius quisque odio mauris lectus consequat sed retitum purus feugiat volutpat pell
      </p>

      <div className="gridd">
        {practiceAreas.map((area, index) => (
          <div className="card" key={index}>
            <div className="icon">{area.icon}</div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <a href="/">Read More →</a>
          </div>
        ))}
      </div>
    </section>
  </div>
</section>

  );
};

export default PracticeAreas;
