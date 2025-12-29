import React, { useState } from "react";

const teamMembers = [
  {
    id: 30072,
    name: "Adv.Khushal Mal Lodha",
    title: "Founder Partner",
    img: "imgs.png",
    link: "/Home/team?Artid=30072#layout",
    description: "Rawan is an aspiring litigation attorney in Jordan, with a strong academic foundation in private law and a growing focus on courtroom advocacy. She is a member of the Jordanian Bar Association, holding a Bachelor of Laws (LLB) from Al-Balqa Applied University, and a Master of Laws (LLM) in Private Law from Middle East University"
  },
  {
    id: 30071,
    name: "Adv. Sai Kiran",
    title: "Founder Partner",
    img: "rajan2.png",
    link: "/Home/team?Artid=30071#layout",
    description: "Specializes in litigation and dispute resolution."
  },
];

const Team = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleOpen = (member) => {
    setSelectedMember(member);
  };

  const handleClose = () => {
    setSelectedMember(null);
  };

  return (
    <section className="team-section" id="about">
      <h2 style={{ textAlign: "center" }}>LAWYERS</h2>
      <p style={{ textAlign: "center" }}>
        Through the expertise of our lawyers team, we are sure to offer our
        clients efficient and timely services. We are committed to providing our
        clients in Jordan with the best lawsuit results possible.
      </p>

      <div className="team-grid">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-card">
            <figure className="team-image">
              <img
                src={member.img}
                alt={member.name}
                width="150"
                height="150"
              />
            </figure>

            <div className="team-content">
              <p className="team-info">
                <span
                  className="team-name"
                  style={{ cursor: "pointer", color: "blue" }}
                  onClick={() => handleOpen(member)}
                >
                  {member.name}
                </span>
                <br />
                <em className="team-title">{member.title}</em>
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* ✅ Popup Modal */}
      {selectedMember && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}>
              ✖
            </button>
            <h2>{selectedMember.name}</h2>
            <p><em>{selectedMember.title}</em></p>
            <img
              src={selectedMember.img}
              alt={selectedMember.name}
              width="200"
              height="200"
            />
            <p style={{ marginTop: "15px" }}>{selectedMember.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Team;
