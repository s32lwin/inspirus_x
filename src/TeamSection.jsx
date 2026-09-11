import React from "react";

// Avatar component - generates initials-based avatars with red border
function Avatar({ name }) {
  const initials = name
    .split(" ")
    .filter((w) => w.length > 0 && w[0] === w[0].toUpperCase())
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const colors = [
    "#e74c3c", "#3498db", "#2ecc71", "#f39c12", "#9b59b6",
    "#1abc9c", "#e67e22", "#e91e63", "#00bcd4", "#8bc34a",
  ];
  const colorIndex =
    name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;

  return (
    <div className="team-avatar-wrapper">
      <div
        className="team-avatar"
        style={{ backgroundColor: colors[colorIndex] }}
      >
        <span className="team-avatar-initials">{initials}</span>
      </div>
    </div>
  );
}

// Single member card
function MemberCard({ name, role }) {
  return (
    <div className="team-card">
      <Avatar name={name} />
      <h3 className="team-card-name">{name}</h3>
      {role && <p className="team-card-role">{role}</p>}
    </div>
  );
}

// Section with heading + grid of members
function TeamGroup({ title, icon, members }) {
  return (
    <div className="team-group">
      <h2 className="team-group-title">
        <span className="team-group-icon">{icon}</span> {title}
      </h2>
      <div className="team-grid">
        {members.map((m, i) => (
          <MemberCard key={i} name={m.name} role={m.role} />
        ))}
      </div>
    </div>
  );
}

// All team data
const teamData = [
  {
    title: "Don Bosco College of Engineering",
    icon: "\u{1F3DB}\u{FE0F}",
    members: [
      { name: "Fr. Wilfred Fernandes", role: "Director" },
      { name: "Dr. Neena Panandikar", role: "Principal, Patron" },
      { name: "Dr. Gaurang S. Patkar", role: "HOD, Convenor" },
    ],
  },
  {
    title: "Faculty Coordinators",
    icon: "\u{1F468}\u{200D}\u{1F3EB}",
    members: [
      { name: "Prof. Amey Shet Tilve", role: "Inspirus Coordinator" },
      { name: "Prof. Merwyn D'Souza", role: "C-CODES Coordinator" },
    ],
  },
  {
    title: "C-CODES Council",
    icon: "\u{1F91D}",
    members: [
      { name: "Shrinivas Inamdar", role: "Chairman" },
      { name: "Juveriya Shaikh", role: "Secretary" },
      { name: "Sydney Dourado", role: "Treasurer" },
      { name: "Thushar Jithendra", role: "Member" },
      { name: "Narendra Naik", role: "Member" },
      { name: "Rosanne Rebelo", role: "Member" },
      { name: "Aman Painginkar", role: "Member" },
      { name: "Hayden Fernandes", role: "Member" },
      { name: "Elrich Colaco", role: "Member" },
      { name: "Shreeshant Upadhye", role: "Member" },
      { name: "Rushank Natekar", role: "Member" },
      { name: "Reuel Luis", role: "Member" },
      { name: "Basil Shaikh", role: "Member" },
      { name: "Aryan Adelker", role: "Member" },
      { name: "P Jayesh Naidu", role: "Member" },
      { name: "Adarsh Maurya", role: "Member" },
    ],
  },
  {
    title: "Website Team",
    icon: "\u{1F4BB}",
    members: [
      { name: "Prof. Janhavi Naik", role: "Faculty In-Charge" },
      { name: "Mr. Amit Sapkal", role: "Faculty In-Charge" },
      { name: "Swapnil Naik", role: "Developer" },
      { name: "Pranav Gauns Dessai", role: "Developer" },
      { name: "Shivasharanappa Biradar", role: "Developer" },
      { name: "Atharv Batule", role: "Developer" },
    ],
  },
  {
    title: "Design & Social Media",
    icon: "\u{1F3A8}",
    members: [
      { name: "Narendra Naik", role: "Lead Designer" },
      { name: "Selwin Oliveria", role: null },
      { name: "Thushar Jithendran", role: null },
      { name: "Basil Mohammed", role: null },
      { name: "Shrinivas Inamdar", role: null },
      { name: "Lancelen Mascarenhas", role: null },
    ],
  },
  {
    title: "Inspirathon",
    icon: "\u{1F4A1}",
    members: [
      { name: "Prof. Amey Shet Tilve", role: "Faculty In-Charge" },
      { name: "Prof. Janhavi Naik", role: "Faculty In-Charge" },
      { name: "Mr. Amit Sapkal", role: "Faculty In-Charge" },
      { name: "Mr. Romeo D'Cruz", role: "Faculty In-Charge" },
      { name: "Mr. Antonio Nevis", role: "Faculty In-Charge" },
      { name: "Aman Painginkar", role: "Coordinator" },
      { name: "Vedant Sawant", role: "Coordinator" },
    ],
  },
  {
    title: "Technomorph",
    icon: "\u{2699}\u{FE0F}",
    members: [
      { name: "Prof. Mithil Parab", role: "Faculty In-Charge" },
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge" },
      { name: "Thushar Jithendra", role: "Coordinator" },
      { name: "Basil Shaikh", role: "Coordinator" },
    ],
  },
  {
    title: "CodeClash",
    icon: "\u{2694}\u{FE0F}",
    members: [
      { name: "Prof. Siya Khandeparkar", role: "Faculty In-Charge" },
      { name: "Mrs. Sandra Mazarello", role: "Faculty In-Charge" },
      { name: "Kshitij Patil", role: "Coordinator" },
      { name: "Shaun Fernandes", role: "Coordinator" },
    ],
  },
  {
    title: "Exquizite",
    icon: "\u{1F9E0}",
    members: [
      { name: "Prof. Sweta Rane", role: "Faculty In-Charge" },
      { name: "Prof. Christina Barretto", role: "Faculty In-Charge" },
      { name: "Sandeep Sawant", role: "Coordinator" },
      { name: "Megha Gobre", role: "Coordinator" },
    ],
  },
  {
    title: "Retrieval Sages",
    icon: "\u{1F4DA}",
    members: [
      { name: "Prof. Manisha Fal Dessai", role: "Faculty In-Charge" },
      { name: "Prof. Karishma Tuenkar", role: "Faculty In-Charge" },
      { name: "Atharv Batule", role: "Coordinator" },
      { name: "Shreeshant Upadhye", role: "Coordinator" },
    ],
  },
  {
    title: "Framed",
    icon: "\u{1F4F8}",
    members: [
      { name: "Dr. Norman Dias", role: "Faculty In-Charge" },
      { name: "Luke Fernandes", role: "Coordinator" },
      { name: "Nirat Nayak", role: "Coordinator" },
    ],
  },
  {
    title: "Cubix",
    icon: "\u{1F9CA}",
    members: [
      { name: "Dr. Amrita Naik", role: "Faculty In-Charge" },
      { name: "Prof. Viosha Cruz", role: "Faculty In-Charge" },
      { name: "Cynora Rodriges", role: "Coordinator" },
      { name: "Sujay Haldankar", role: "Coordinator" },
    ],
  },
  {
    title: "Veil of Secrets",
    icon: "\u{1F3AD}",
    members: [
      { name: "Prof. Amey Kerkar", role: "Faculty In-Charge" },
      { name: "Prof. Merwyn D'Souza", role: "Faculty In-Charge" },
      { name: "Diya Shanbhag", role: "Coordinator" },
      { name: "Aryan Adelkar", role: "Coordinator" },
    ],
  },
  {
    title: "Reel It Feel It",
    icon: "\u{1F3AC}",
    members: [
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge" },
      { name: "Marco Goes", role: "Coordinator" },
      { name: "Sneha Nazare", role: "Coordinator" },
    ],
  },
];

function TeamSection() {
  return (
    <div className="team-section">
      <div className="team-header">
        <h1 className="team-main-title">Meet the Team</h1>
        <p className="team-subtitle">Don Bosco College of Engineering</p>
        <div className="team-divider"></div>
      </div>

      {/* Leadership, Faculty, Council, Website, Design */}
      {teamData.slice(0, 5).map((group, i) => (
        <TeamGroup
          key={i}
          title={group.title}
          icon={group.icon}
          members={group.members}
        />
      ))}

      {/* Event Teams header */}
      <div className="team-event-header">
        <h2 className="team-event-title">Event Teams</h2>
        <div className="team-divider"></div>
      </div>

      {teamData.slice(5).map((group, i) => (
        <TeamGroup
          key={i + 5}
          title={group.title}
          icon={group.icon}
          members={group.members}
        />
      ))}

      {/* Footer */}
      <div className="team-footer">
        <p className="team-footer-text font-[Helvetica_Now_Display]">
          Inspirus-9 &mdash; Don Bosco College of Engineering, Fatorda, Goa
        </p>
      </div>
    </div>
  );
}

export default TeamSection;
