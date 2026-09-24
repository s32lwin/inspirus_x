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

  const showImage = image && !imgError;

  return (
    <div className="team-avatar-wrapper">
      <div className="team-avatar">
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

function MemberCard({ name, role, image, phone = "" }) {
  return (
    <div className="team-card">
      <Avatar name={name} image={image} />

      <h3 className="team-card-name">
        {name}
      </h3>

      {phone && (
        <a
          className="team-card-whatsapp"
          href={`https://wa.me/91${phone.replace(/\D/g, '').replace(/^91/, '')}`}
          target="_blank"
          rel="noreferrer"
          aria-label={`Contact ${name} on WhatsApp`}
        >
          <i className="ri-whatsapp-line" aria-hidden="true" />
        </a>
      )}

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

function TeamGroup({ title, members }) {
  return (
    <div className="team-group">

      <h2 className="team-group-title">
        {title}

      </h2>

      <div className="team-grid">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            name={member.name}
            role={member.role}
            image={member.image}
            phone={member.phone || ""}
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
        phone: "8080368628",
      },
      {
        name: "Vanessa Fernades",
        role: "Secretary",
        image: "/student images/Vanessa Fernandes_.webp",
        phone: "9623690833",
      },
      {
        name: "Basil Shaik Mohamad",
        role: "Treasurer",
        image: "/student images/basil.webp",
        phone: "7709594659",
      },
      {
        name: "Shrinivas Inamdar",
        role: "Member",
        image: "/student images/shrinivas.webp",
        phone: "7038823805",
      },
      {
        name: "Aryan Adelker",
        role: "Member",
        image: "/student images/Aryan Adelker.webp",
        phone: "8788217993",
      },
      {
        name: "Devanshi Rami",
        role: "Member",
        image: "/student images/Devanshi.webp",
        phone: "8806432239",
      },
      {
        name: "Debbie Fatima Mascarenhas",
        role: "Member",
        image: "/student images/Debbie Fatima Mascarenhas.webp",
        phone: "9209231065",
      },
      {
        name: "Parima Tendulkar",
        role: "Member",
        image: "/student images/Parima Tendulkar (TE coordinator).webp",
        phone: "9404930645",
      },
      {
        name: "Pavitra Pandurang Nayak",
        role: "Member",
        image: "/student images/Pavitra nayak.webp",
        phone: "9529231516",
      },
      {
        name: "Shreeshant Upadhye",
        role: "Member",
        image: "/student images/Shreeshant Upadhye.webp",
        phone: "8600852734",
      },
      {
        name: "Shanaia Martis",
        role: "Member",
        image: "/student images/Shanaia Martis.webp",
        phone: "9356966736",
      },
      {
        name: "Tanishq Kavlekar",
        role: "Member",
        image: "/student images/Tanishq Kavlekar.webp",
        phone: "9373843024",
      },
      {
        name: "Arnav Naik Dessai",
        role: "Member",
        image: "/student images/arnav.webp",
        phone: "9356738893",
      },
      {
        name: "Devanshu Yelurkar",
        role: "Member",
        image: "/student images/Devanshu Yelurkar.webp",
        phone: "9373814674",
      },
      {
        name: "Pranita Govekar",
        role: "Member",
        image: "/student images/pranita.webp",
        phone: "9284183785",
      },
      {
        name: "Prasanna Pednekar",
        role: "Member",
        image: "/student images/Prasanna Pednekar_.webp",
        phone: "9404427450",
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
        role: "Staff Incharge",
        image: "/faculty images/AmitSapkal_26.webp",
      },
      {
        name: "Shreeshant Upadhye",
        role: "Developer",
        image: "/student images/Shreeshant Upadhye.webp",
        phone: "8600852734",
      },
      {
        name: "Selwin Oliveira",
        role: "Developer",
        image: "/student images/selwin.webp",
        phone: "8080368628",
      },
      {
        name: "Tanishq Kavlekar",
        role: "Developer",
        image: "/student images/Tanishq Kavlekar.webp",
        phone: "9373843024",
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
        phone: " 8788165715",
      },
      {
        name: "Soham",
        role: "Lead Designer",
        image: "/student images/Soham_A.webp",
        phone: "7840974855",
      },
      {
        name: "Pranita Govekar",
        role: null,
        image: "/student images/pranita.webp",
        phone: "9284183785",
      },
      {
        name: "Meera Anthony",
        role: null,
        image: "/student images/Meera Antony.webp",
        phone: "7038796120",
      },
      {
        name: "Khushi",
        role: null,
        image: "/student images/khushi.webp",
        phone: "8766785936",
      },
      {
        name: "Shanaia Martis",
        role: "Social media head",
        image: "/student images/Shanaia Martis.webp",
        phone: "9356966736",
      },
      {
        name: "Aditya Bingekar",
        role: null,
        image: "/student images/aditya.webp",
        phone: "9356950853",
      },
      {
        name: "Arnav Naik Dessai",
        role: null,
        image: "/student images/arnav.webp",
        phone: "9356738893",
      },
      {
        name: "Rohan Singh",
        role: null,
        image: "/student images/rohan.webp",
        phone: "8830478073",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö INSPIRATHON
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
        role: "Staff Incharge",
        image: "/faculty images/AmitSapkal_26.webp",
      },
      {
        name: "Mr. Romeo D'Cruz",
        role: "Staff Incharge",
        image: "/faculty images/RomeoDaCruz.webp",
      },
      {
        name: "Mr. Antonio Nevis",
        role: "Staff Incharge",
        image: "/faculty images/AntonioNoronhaNeves.webp",
      },
      {
        name: "Reuel Luis",
        role: "Coordinator",
        image: "/student images/Reuel_Luis.webp",
        phone: "9359587415",
      },
      {
        name: "Analee Martins",
        role: "Coordinator",
        image: "/student images/Analee Martins SE.webp",
        phone: "8999294903",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö TECHNOMORPH
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
        phone: "9022656976",
      },
      {
        name: "Pranita Govekar",
        role: "Coordinator",
        image: "/student images/pranita.webp",
        phone: "9284183785",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö CODECLASH
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
        role: "Staff Incharge",
        image: "/faculty images/SandraMazarello.webp",
      },
      {
        name: "Shaun Fernades",
        role: "Coordinator",
        image: "/student images/Shaun.webp",
        phone: "9359936029",
      },
      {
        name: "Devanshu Yelurkar",
        role: "Coordinator",
        image: "/student images/Devanshu Yelurkar.webp",
        phone: "9373814674",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö EXQUIZITE
  // ===================================================

  {
    title: "Exquizite",
    icon: "\u{1F9E0}",

    members: [
      {
        name: "Prof. Sweta Morajkar",
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
        phone: "9373594972",
      },
      {
        name: "Ishika Sarwardekar",
        role: "Coordinator",
        image: "/student images/Ishika_.webp",
        phone: "9284196477",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö RETRIEVAL SAGES
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
        phone: "8806432239",
      },
      {
        name: "Mansi Mishra",
        role: "Coordinator",
        image: "/student images/Mansi Mishra SE.webp",
        phone: "7499842448",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö PROMPT WARS
  // ===================================================

  {
    title: "Prompt Wars",
    icon: "\u{1F916}",

    members: [
      {
        name: "Dr. Norman Dias",
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
        phone: "9356966736",
      },
      {
        name: "Aditya Bingekar",
        role: "Coordinator",
        image: "/student images/aditya.webp",
        phone: "9356950853",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö BLIND CODING
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
        image: "/student images/Parima Tendulkar (TE coordinator).webp",
        phone: "9404930645",
      },
      {
        name: "Meera Anthony",
        role: "Coordinator",
        image: "/student images/Meera Antony.webp",
        phone: "7038796120",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö FRAMED
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
        phone: "8788217993",
      },
      {
        name: "Arnav Dessai",
        role: "Coordinator",
        image: "/student images/arnav.webp",
        phone: "9356738893",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö VEIL OF SECRETS
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
        phone: "9209231065",
      },
      {
        name: "Amogh Tendulkarr",
        role: "Coordinator",
        image: "/student images/Amogh Ulhas Tendulkar_.webp",
        phone: "9923515005",
      },
    ],
  },


  // ===================================================
  // EVENT TEAM ÔÇö REEL IT FEEL IT
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
        phone: "9529231516",
      },
      {
        name: "Prasanna Pednekar",
        role: "Coordinator",
        image: "/student images/Prasanna Pednekar_.webp",
        phone: "9404427450",
      },
    ],
  },
];


// =====================================================
// EVENT HEADS
// =====================================================

const eventHeads = [
  {
    name: "Prof. Amey Shet Tilve",
    role: "Faculty Event Head",
    image: "/faculty images/amey.webp",
  },
  {
    name: "Tanishq Kavlekar",
    role: "Event Head",
    image: "/student images/Tanishq Kavlekar.webp",
    phone: "9373843024",
  },
  {
    name: "Shreeshant Upadhye",
    role: "Event Head",
    image: "/student images/Shreeshant Upadhye.webp",
    phone: "8600852734",
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

    </div>
  );
}


export default TeamSection;
