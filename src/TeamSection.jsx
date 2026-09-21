import React from "react";

// =====================================================
// Avatar component
// =====================================================

function Avatar({ name, image }) {
  const [imgError, setImgError] = React.useState(false);

  const initials = name
    .trim()
    .split(" ")
    .filter(
      (w) =>
        w.length > 0 &&
        w[0] === w[0].toUpperCase()
    )
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const colors = [
    "#e74c3c",
    "#3498db",
    "#2ecc71",
    "#f39c12",
    "#9b59b6",
    "#1abc9c",
    "#e67e22",
    "#e91e63",
    "#00bcd4",
    "#8bc34a",
  ];

  const colorIndex =
    name
      .split("")
      .reduce(
        (a, c) => a + c.charCodeAt(0),
        0
      ) % colors.length;

  const showImage = image && !imgError;

  return (
    <div className="team-avatar-wrapper">
      <div
        className="team-avatar"
        style={{
          backgroundColor: showImage ? "transparent" : colors[colorIndex],
        }}
      >
        {showImage ? (
          <img
            src={image}
            alt={name}
            className="team-avatar-img"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="team-avatar-initials">
            {initials}
          </span>
        )}
      </div>
    </div>
  );
}


// =====================================================
// Single member card
// =====================================================

function MemberCard({ name, role, image }) {
  return (
    <div className="team-card">
      <Avatar name={name} image={image} />

      <h3 className="team-card-name">
        {name}
      </h3>

      {role && (
        <p className="team-card-role">
          {role}
        </p>
      )}
    </div>
  );
}


// =====================================================
// Team Group
// =====================================================

function TeamGroup({ title, icon, members }) {
  return (
    <div className="team-group">

      <h2 className="team-group-title">

        {/* Show icon only when one is provided */}
        {icon && (
          <span className="team-group-icon">
            {icon}
          </span>
        )}

        {title}

      </h2>

      <div className="team-grid">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
          />
        ))}
      </div>

    </div>
  );
}


// =====================================================
// ALL TEAM DATA
// =====================================================

const teamData = [

  // ===================================================
  // LEADERSHIP
  // ===================================================

  {
    title: "Don Bosco College of Engineering",
    icon: "\u{1F3DB}\u{FE0F}",

    members: [
      {
        name: "Fr. Wilfred Fernandes",
        role: "Director",
        image: "/faculty images/Fr-Wilfred-Fernandes.webp",
      },
      {
        name: "Dr. Neena Panandikar",
        role: "Principal, Patron",
        image: "/faculty images/neena.webp",
      },
      {
        name: "Dr. Gaurang S. Patkar",
        role: "HOD, Convenor",
        image: "/faculty images/Gaurang_Patkar.webp",
      },
    ],
  },


  // ===================================================
  // FACULTY COORDINATORS
  // ===================================================

  {
    title: "Faculty Coordinators",
    icon: "\u{1F468}\u{200D}\u{1F3EB}",

    members: [
      {
        name: "Prof. Amey Shet Tilve",
        role: "Inspirus Coordinator",
        image: "/faculty images/amey.webp",
      },
      {
        name: "Prof. Merwyn D'Souza",
        role: "C-CODES Coordinator",
        image: "/faculty images/Marwyn_Dsouza.webp",
      },
    ],
  },


  // ===================================================
  // C-CODES COUNCIL
  // ===================================================

  {
    title: "C-CODES Council",
    icon: "\u{1F91D}",

    members: [
      {
        name: "Selwin Oliveira",
        role: "Chairman",
        image: "/student images/selwin.webp",
      },
      {
        name: "Vanessa Fernades",
        role: "Secretary",
        image: "/student images/Vanessa Fernandes_.webp",
      },
      {
        name: "Basil Shaik Mohamad",
        role: "Treasurer",
        image: "/student images/basil.webp",
      },
      {
        name: "Shrinivas Inamdar",
        role: "Member",
        image: "/student images/shrinivas.webp",
      },
      {
        name: "Aryan Adelker",
        role: "Member",
        image: "/student images/Aryan Adelker.webp",
      },
      {
        name: "Devanshi Rami",
        role: "Member",
        image: "/student images/Devanshi.webp",
      },
      {
        name: "Debbie Fatima Mascarenhas",
        role: "Member",
        image: "/student images/Debbie Fatima Mascarenhas.webp",
      },
      {
        name: "Parima Tendulkar",
        role: "Member",
        image: "/student images/Parima Tendulkar (TE coordinator).jpg",
      },
      {
        name: "Pavitra Pandurang Nayak",
        role: "Member",
        image: "/student images/Pavitra nayak.webp",
      },
      {
        name: "Shreeshant Upadhye",
        role: "Member",
        image: "/student images/Shreeshant Upadhye.webp",
      },
      {
        name: "Shanaia Martis",
        role: "Member",
        image: "/student images/Shanaia Martis.webp",
      },
      {
        name: "Tanishq Kavlekar",
        role: "Member",
        image: "/student images/Tanishq Kavlekar.webp",
      },
      {
        name: "Arnav Naik Dessai",
        role: "Member",
        image: "/student images/arnav.webp",
      },
      {
        name: "Devanshu Yelurkar",
        role: "Member",
        image: "/student images/Devanshu Yelurkar.webp",
      },
      {
        name: "Pranita Govekar",
        role: "Member",
        image: "/student images/pranita.webp",
      },
      {
        name: "Prasanna Pednekar",
        role: "Member",
        image: "/student images/Prasanna Pednekar_.webp",
      },
    ],
  },


  // ===================================================
  // WEBSITE TEAM
  // ===================================================

  {
    title: "Website Team",
    icon: "\u{1F4BB}",

    members: [
      {
        name: "Prof. Janhavi Naik",
        role: "Faculty In-Charge",
        image: "/faculty images/Janhavi.webp",
      },
      {
        name: "Mr. Amit Sapkal",
        role: "Faculty In-Charge",
        image: "/faculty images/AmitSapkal_26.webp",
      },
      {
        name: "Shreeshant Upadaye",
        role: "Developer",
        image: "/student images/Shreeshant Upadhye.webp",
      },
      {
        name: "Selwin Oliveira",
        role: "Developer",
        image: "/student images/selwin.webp",
      }

    ],
  },


  // ===================================================
  // DESIGN & SOCIAL MEDIA
  // ===================================================

  {
    title: "Design & Social Media",
    icon: "\u{1F3A8}",

    members: [
      {
        name: "Dilkush",
        role: "Lead Designer",
        image: "/student images/Dilkush_talekar.webp",
      },
      {
        name: "Soham",
        role: "Lead Designer",
        image: "/student images/Soham_A.webp",
      },
      {
        name: "Pranita Govekar",
        role: null,
        image: "/student images/pranita.webp",
      },
      {
        name: "Meera Anthony",
        role: null,
        image: "/student images/Meera Antony.webp",
      },
      {
        name: "Khushi",
        role: null,
        image: "/student images/khushi.webp",
      },
      {
        name: "Shanaia Martis",
        role: "Social media head",
        image: "/student images/Shanaia Martis.webp"
      },
      {
        name: "Aditya Bingekar",
        role: null,
        image: "/student images/aditya.webp"
      },
      {
        name: "Arnav Naik Dessai",
        role: null,
        image: "/student images/arnav.webp"
      },
      {
        name: "Rohan Singh",
        role: null,
        image: "/student images/rohan.webp"
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — INSPIRATHON
  // ===================================================

  {
    title: "Inspirathon",
    icon: "\u{1F4A1}",

    members: [
      {
        name: "Prof. Amey Shet Tilve",
        role: "Faculty In-Charge",
        image: "/faculty images/amey.webp",
      },
      {
        name: "Prof. Janhavi Naik",
        role: "Faculty In-Charge",
        image: "/faculty images/Janhavi.webp",
      },
      {
        name: "Mr. Amit Sapkal",
        role: "Faculty In-Charge",
        image: "/faculty images/AmitSapkal_26.webp",
      },
      {
        name: "Mr. Romeo D'Cruz",
        role: "Faculty In-Charge",
        image: "/faculty images/RomeoDaCruz.webp",
      },
      {
        name: "Mr. Antonio Nevis",
        role: "Faculty In-Charge",
        image: "/faculty images/AntonioNoronhaNeves.webp",
      },
      {
        name: "Reuel Luis",
        role: "Coordinator",
        image: "/student images/Reuel_Luis.webp",
      },
      {
        name: "Analee Martis",
        role: "Coordinator",
        image: "/student images/Analee Martins SE.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — TECHNOMORPH
  // ===================================================

  {
    title: "Technomorph",
    icon: "\u{2699}\u{FE0F}",

    members: [
      {
        name: "Prof. Mithil Parab",
        role: "Faculty In-Charge",
        image: "/faculty images/Mithil_parab.webp",
      },
      {
        name: "Prof. Duval Gomes",
        role: "Faculty In-Charge",
        image: "/faculty images/duval.webp"
      },
      {
        name: "Rushank Natekar",
        role: "Coordinator",
        image: "/student images/rushank.webp",
      },
      {
        name: "Pranita Govekar",
        role: "Coordinator",
        image: "/student images/pranita.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — CODECLASH
  // ===================================================

  {
    title: "CodeClash",
    icon: "\u{2694}\u{FE0F}",

    members: [
      {
        name: "Prof. Siya Khandeparkar",
        role: "Faculty In-Charge",
        image: "/faculty images/Siya.webp",
      },
      {
        name: "Mrs. Sandra Mazarello",
        role: "Faculty In-Charge",
        image: "/faculty images/SandraMazarello.webp",
      },
      {
        name: "Shaun Fernades",
        role: "Coordinator",
        image: "/student images/Shaun.webp",
      },
      {
        name: "Devanshu Yelurkar",
        role: "Coordinator",
        image: "/student images/Devanshu Yelurkar.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — EXQUIZITE
  // ===================================================

  {
    title: "Exquizite",
    icon: "\u{1F9E0}",

    members: [
      {
        name: "Prof. Sweta Rane",
        role: "Faculty In-Charge",
        image: "/faculty images/Sweta.webp",
      },
      {
        name: "Prof. Christina Barretto",
        role: "Faculty In-Charge",
        image: "/faculty images/Christina.webp",
      },
      {
        name: "Vedhant Sawant",
        role: "Coordinator",
        image: "/student images/vedhant_.webp",
      },
      {
        name: "Ishika Sarwardekar",
        role: "Coordinator",
        image: "/student images/Ishika_.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — RETRIEVAL SAGES
  // ===================================================

  {
    title: "Retrieval Sages",
    icon: "\u{1F4DA}",

    members: [
      {
        name: "Prof. Manisha Fal Dessai",
        role: "Faculty In-Charge",
        image: "/faculty images/Manisha.webp",
      },
      {
        name: "Prof. Karishma Tuenkar",
        role: "Faculty In-Charge",
        image: "/faculty images/Karishma.webp",
      },
      {
        name: "Devanshi Rami",
        role: "Coordinator",
        image: "/student images/Devanshi.webp",
      },
      {
        name: "Mansi Mishra",
        role: "Coordinator",
        image: "/student images/Mansi Mishra SE.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — PROMPT WARS
  // ===================================================

  {
    title: "Prompt Wars",
    icon: "\u{1F916}",

    members: [
      {
        name: "Prof. Norman Dias",
        role: "Faculty In-Charge",
        image: "/faculty images/Norman.webp",
      },
      {
        name: "Prof. Amey Kerkar",
        role: "Faculty In-Charge",
        image: "/faculty images/Amey_Kerkar.webp",
      },
      {
        name: "Shanaia Martis",
        role: "Coordinator",
        image: "/student images/Shanaia Martis.webp",
      },
      {
        name: "Aditya Bingekar",
        role: "Coordinator",
        image: "/student images/aditya.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — BLIND CODING
  // ===================================================

  {
    title: "Blind Coding",
    icon: "\u{1F575}\u{FE0F}",

    members: [
      {
        name: "Dr. Amrita Naik",
        role: "Faculty In-Charge",
        image: "/faculty images/Amrita_Naik.webp",
      },
      {
        name: "Prof. Vidhya Naik",
        role: "Faculty In-Charge",
      },
      {
        name: "Parima Tendulkar",
        role: "Coordinator",
        image: "/student images/Parima Tendulkar (TE coordinator).jpg",
      },
      {
        name: "Meera Anthony",
        role: "Coordinator",
        image: "/student images/Meera Antony.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — FRAMED
  // ===================================================

  {
    title: "Framed",
    icon: "\u{1F4F8}",

    members: [
      {
        name: "Prof. Duval Gomes",
        role: "Faculty In-Charge",
        image: "/faculty images/duval.webp"
      },
      {
        name: "Aryan Adelkar",
        role: "Coordinator",
        image: "/student images/Aryan Adelker.webp",
      },
      {
        name: "Arnav Dessai",
        role: "Coordinator",
        image: "/student images/arnav.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — VEIL OF SECRETS
  // ===================================================

  {
    title: "Veil of Secrets",
    icon: "\u{1F3AD}",

    members: [
      {
        name: "Prof. Merwyn D'Souza",
        role: "Faculty In-Charge",
        image: "/faculty images/Marwyn_Dsouza.webp",
      },
      {
        name: "Prof. Floyd Fernandes",
        role: "Faculty In-Charge",
        image: "/faculty images/Floyd.webp",
      },
      {
        name: "Debbie Mascarenhas",
        role: "Coordinator",
        image: "/student images/Debbie Fatima Mascarenhas.webp",
      },
      {
        name: "Amogh Tendulkarr",
        role: "Coordinator",
        image: "/student images/Amogh Ulhas Tendulkar_.webp",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM — REEL IT FEEL IT
  // ===================================================

  {
    title: "Reel It Feel It",
    icon: "\u{1F3AC}",

    members: [
      {
        name: "Prof. Floyd Fernandes",
        role: "Faculty In-Charge",
        image: "/faculty images/Floyd.webp",
      },
      {
        name: "Pavitra Nayak",
        role: "Coordinator",
        image: "/student images/Pavitra nayak.webp",
      },
      {
        name: "Prasanna Pednekar",
        role: "Coordinator",
        image: "/student images/Prasanna Pednekar_.webp",
      },
    ],
  },
];


// =====================================================
// EVENT HEADS
// =====================================================

const eventHeads = [
  {
    name: "Shreeshant Upadye",
    role: "Event Head",
    image: "/student images/Shreeshant Upadhye.webp",
  },
  {
    name: "Tanishq Kavlekar",
    role: "Event Head",
    image: "/student images/Tanishq Kavlekar.webp",
  },
];


// =====================================================
// MAIN TEAM SECTION
// =====================================================

function TeamSection() {
  return (
    <div className="team-section">

      {/* MAIN HEADER */}

      <div className="team-header">

        <h1 className="team-main-title">
          Meet the Team
        </h1>

        <p className="team-subtitle">
          Don Bosco College of Engineering
        </p>

        <div className="team-divider"></div>

      </div>


      {/* LEADERSHIP / FACULTY / COUNCIL / WEBSITE / DESIGN */}

      {teamData
        .slice(0, 5)
        .map((group, index) => (
          <TeamGroup
            key={index}
            title={group.title}
            icon={group.icon}
            members={group.members}
          />
        ))}


      {/* EVENT TEAMS HEADER */}

      <div className="team-event-header">

        <h2 className="team-event-title">
          Event Teams
        </h2>

        <div className="team-divider"></div>

      </div>


      {/* EVENT HEADS — BEFORE INSPIRATHON */}

      <TeamGroup
        title="Event Heads"
        members={eventHeads}
      />


      {/* EVENT TEAMS */}

      {teamData
        .slice(5)
        .map((group, index) => (
          <TeamGroup
            key={index + 5}
            title={group.title}
            icon={group.icon}
            members={group.members}
          />
        ))}


      {/* FOOTER */}

      <div className="team-footer">

        <p className="team-footer-text font-[Helvetica_Now_Display]">
          Inspirus-9 &mdash; Don Bosco College of Engineering, Fatorda, Goa
        </p>

      </div>

    </div>
  );
}


export default TeamSection;