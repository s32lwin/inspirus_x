import React, { useState } from "react";
import { createPortal } from "react-dom";

const competitions = [
  {
    number: "01",
    name: "Inspirathon",
    tag: "24 HOUR HACKATHON",
    description:
      "Build, innovate and solve real-world problems in an intense 24-hour offline hackathon.",
    rules: [
      "The competition is conducted offline for 24 hours.",
      "Each team must have exactly 3 members.",
      "Participants must bring their own laptops and required hardware.",
      "Problem statements will be provided at the venue.",
      "A maximum of 3 problem statements will be provided, with a limit of 4 teams per statement.",
      "Teams must submit their project report before the specified deadline.",
      "Participants must remain at the venue during the competition.",
      "The final project demonstration will consist of 5 minutes followed by 2 minutes of Q&A.",
      "Participants should carry the required presentation/demo equipment.",
      "Judge decisions will be final.",
    ],
  },
  {
    number: "02",
    name: "Code Clash",
    tag: "DEBUG • ALGORITHM • C++",
    description:
      "Put your programming and debugging skills to the test through a competitive coding challenge.",
    rules: [
      "Each team must have exactly 2 members.",
      "A maximum of 18 teams can participate.",
      "The competition uses C++.",
      "Participants should report at least 30 minutes before the event.",
      "Participants must carry their own stationery.",
      "Books, notes, phones, digital storage devices and external aids are prohibited.",
      "Web browsing, cheating, plagiarism and external code are prohibited.",
      "Participants must follow the instructions provided by the coordinators.",
      "Any violation of the rules may result in disqualification.",
      "The final decision of the organizers and judges will be binding.",
    ],
  },
  {
    number: "03",
    name: "Retrieval Sages",
    tag: "APTITUDE • LOGIC • C/C++",
    description:
      "Test your aptitude, logical reasoning and programming knowledge against other teams.",
    rules: [
      "Each team must have exactly 2 members.",
      "The competition focuses on C/C++, aptitude, logical reasoning and programming.",
      "A maximum of 20 teams can participate.",
      "Participants must report at least 30 minutes before the event.",
      "The competition will be conducted using paper-based material where specified.",
      "Web browsing and unauthorized external assistance are prohibited.",
      "Cheating or use of unauthorized resources may result in disqualification.",
      "Digital devices must be kept outside when instructed by the organizers.",
      "Foul or offensive language may result in disqualification.",
      "The decision of the organizers and judges will be final.",
    ],
  },
  {
    number: "04",
    name: "Technomorph",
    tag: "UI/UX • FIGMA • PROTOTYPING",
    description:
      "Transform ideas into responsive and interactive digital experiences using Figma.",
    rules: [
      "Participants may be from higher secondary, undergraduate or diploma programs.",
      "Each team can have a maximum of 2 members.",
      "Cross-institution participation is allowed.",
      "Participants should be familiar with Figma.",
      "Participants must use the permitted Figma environment.",
      "The submitted design should be responsive and interactive.",
      "Plugins may be used where permitted.",
      "AI tools are prohibited.",
      "All submitted work must be original and free from plagiarism.",
      "Participants must arrange their own laptop or use the provided college systems.",
    ],
  },
  {
    number: "05",
    name: "Reel It Feel It",
    tag: "CONTENT • REELS • CREATIVITY",
    description:
      "Create an engaging short-form reel that captures the spirit and energy of Inspirus.",
    rules: [
      "The reel should promote the spirit of Inspirus.",
      "The maximum duration is 1 minute.",
      "Each team can have 1 or 2 members.",
      "If there are 2 members, both must belong to the same institute.",
      "The reel must be in vertical 9:16 format.",
      "Plagiarism and direct copying of another creator's work are prohibited.",
      "Derogatory language, name-calling or offensive content is prohibited.",
      "Bots, fake accounts, paid likes and artificial engagement are prohibited.",
      "The submission must follow the specified social media posting requirements.",
      "Participants must follow the instructions given by the organizers.",
    ],
  },
  {
    number: "06",
    name: "Prompt Wars",
    tag: "AI • PROMPT ENGINEERING",
    description:
      "Compete through creative and effective prompt engineering using the AI tools specified for each round.",
    rules: [
      "Each team must consist of 2 members.",
      "Participation is limited according to the event capacity.",
      "Participants must use the systems provided by the organizers where instructed.",
      "Personal devices may not be permitted during the competition.",
      "Only the AI tools permitted for the respective round may be used.",
      "Participants must follow the time limits and instructions given for each round.",
      "Unauthorized AI tools or external assistance are prohibited.",
      "Unfair means may result in disqualification.",
      "Participants must follow the tool/model requirements specified by the organizers.",
      "The decision of the organizers will be final.",
    ],
  },
  {
    number: "07",
    name: "ExQuizite",
    tag: "QUIZ • KNOWLEDGE • TEAMWORK",
    description:
      "Challenge your knowledge across a wide range of topics in an offline team quiz.",
    rules: [
      "The competition is conducted offline.",
      "Each team must have 2 members.",
      "Participants must be undergraduate or diploma students.",
      "Both team members must belong to the same college.",
      "Registration is subject to the specified participation limits.",
      "The quiz covers a broad range of topics.",
      "Participants must follow the instructions provided by the quiz coordinators.",
      "Use of unauthorized external assistance is prohibited.",
      "Any form of cheating may result in disqualification.",
      "The decision of the quiz organizers will be final.",
    ],
  },
  {
    number: "08",
    name: "Blind Coding",
    tag: "C/C++ • LOGIC • CODING",
    description:
      "Test your programming ability without relying on visual access to your code.",
    rules: [
      "Each team must have 2 members from the same college.",
      "A maximum of 20 teams can participate.",
      "The competition uses C/C++ programming.",
      "Participants should use the specified coding environment.",
      "Cellphones, chits, pendrives, AI tools and digital assistants are prohibited.",
      "Paper and pen will be provided where required.",
      "Participants must report at least 30 minutes before the event.",
      "Participants may not leave the competition midway without permission.",
      "Offensive or inappropriate language may result in disqualification.",
      "Participants must follow the round-specific instructions announced by the organizers.",
    ],
  },
  {
    number: "09",
    name: "Veil of Secrets",
    tag: "MYSTERY • LOGIC • TEAMWORK",
    description:
      "Work together, uncover hidden clues and solve the mystery before time runs out.",
    rules: [
      "Each team must consist of 3 members.",
      "Participants must complete the online registration process.",
      "The team leader must submit the team registration only once.",
      "Duplicate registrations may result in disqualification.",
      "Only the team leader should communicate with the designated organizers where instructed.",
      "Participants must report at least 15 minutes before the event.",
      "Late arrival may result in reduced playing time.",
      "The competition consists of 2 rounds.",
      "Round-specific instructions will be provided before each round.",
      "Participants must not seek unauthorized external help.",
      "The decisions of the coordinators will be final.",
    ],
  },
  {
    number: "10",
    name: "Framed",
    tag: "PHOTOGRAPHY • STORY • CREATIVITY",
    description:
      "Capture a compelling moment and turn it into a photograph with a story.",
    rules: [
      "The competition is conducted online.",
      "Participation is individual.",
      "One image should be submitted as the competition entry.",
      "Accepted image formats include JPG, JPEG and PNG.",
      "Images may be captured using a mobile phone or DSLR.",
      "Drones are not permitted.",
      "The image must be captured and submitted within the specified time.",
      "Basic editing is allowed, while advanced manipulation is prohibited.",
      "AI-generated images and significant AI manipulation are prohibited.",
      "Copied images and images sourced from the internet are prohibited.",
      "Participants should preserve the image metadata.",
      "The caption should follow the specified word limit.",
      "Participants must respect privacy and obtain consent where required.",
      "Late submissions or invalid registrations may be disqualified.",
    ],
  },
];

function CompetitionModal({ competition, onClose }) {
  if (!competition) return null;

  const modal = (
    <div className="competition-modal-overlay" onClick={onClose}>
      <div
        className="competition-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="competition-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="modal-top-line">
          <span>EVENT FILE</span>
          <span>#{competition.number}</span>
        </div>

        <div className="competition-modal-number">
          {competition.number}
        </div>

        <div className="modal-status">
          <span className="status-dot" />
          EVENT INFORMATION
        </div>

        <h2>{competition.name}</h2>

        <p className="competition-modal-tag">{competition.tag}</p>

        <p className="competition-modal-description">
          {competition.description}
        </p>

        <div className="modal-divider" />

        <h3>GENERAL RULES & REGULATIONS</h3>

        <ul>
          {competition.rules.map((rule, index) => (
            <li key={index}>
              <span className="rule-number">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="competition-modal-done"
          onClick={onClose}
        >
          CLOSE FILE
        </button>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

function CompetitionCard({ competition, onInfo }) {
  const [style, setStyle] = useState({});

  const handleMouseMove = (event) => {
    const card = event.currentTarget;
    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * 8;
    const rotateX = ((y / rect.height) - 0.5) * -8;

    const moveX = ((x / rect.width) - 0.5) * 12;
    const moveY = ((y / rect.height) - 0.5) * 12;

    setStyle({
      transform: `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY}px, 0)`,
      "--mouse-x": `${x}px`,
      "--mouse-y": `${y}px`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(900px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)",
      "--mouse-x": "50%",
      "--mouse-y": "50%",
    });
  };

  return (
    <article
      className="competition-card"
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="competition-card-glow" />
      <div className="competition-card-scan" />

      <div className="competition-card-corners">
        <span className="corner top-left" />
        <span className="corner top-right" />
        <span className="corner bottom-left" />
        <span className="corner bottom-right" />
      </div>

      <div className="competition-card-header">
        <span className="competition-card-number">
          {competition.number}
        </span>

        <span className="competition-card-code">
          EVENT_{competition.number}
        </span>
      </div>

      <div className="competition-card-content">
        <div className="competition-card-index">
          <span>INSPIRUS</span>
          <span>2K26</span>
        </div>

        <h2 data-text={competition.name}>{competition.name}</h2>

        <div className="competition-card-tag">
          {competition.tag}
        </div>

        <p>{competition.description}</p>
      </div>

      <div className="competition-card-footer">
        <div className="card-system">
          <span className="system-dot" />
          <span>ONLINE</span>
        </div>

        <div className="competition-card-actions">
          <button
            type="button"
            className="competition-details"
            onClick={() => onInfo(competition)}
          >
            <span>INFO</span>
            <i className="ri-arrow-right-up-line" />
          </button>

          <button type="button" className="competition-register">
            <span>REGISTER</span>
            <i className="ri-arrow-right-line" />
          </button>
        </div>
      </div>
    </article>
  );
}

export default function CompetitionsSection() {
  const [selectedCompetition, setSelectedCompetition] = useState(null);

  return (
    <>
      <section id="competitions" className="competitions-section">
        <div className="competitions-background-grid" />

        <div className="competitions-header">
          <div className="competitions-eyebrow">
            <span className="eyebrow-line" />
            <span>INSPIRUS // 2K26</span>
            <span className="eyebrow-line" />
          </div>

          <h1 data-text="COMPETITIONS">COMPETITIONS</h1>

          <p className="competitions-subtitle">
            ENTER THE ARENA. BUILD. COMPETE. CREATE.
          </p>

          <div className="header-system-info">
            <span>SYSTEM STATUS: ONLINE</span>
            <span>10 EVENTS DETECTED</span>
          </div>
        </div>

        <div className="competitions-grid">
          {competitions.map((competition) => (
            <CompetitionCard
              key={competition.number}
              competition={competition}
              onInfo={setSelectedCompetition}
            />
          ))}
        </div>

        <div className="competitions-footer-line">
          <span>INSPIRUS_2K26</span>
          <span>END OF EVENT DATABASE</span>
        </div>
      </section>

      {selectedCompetition && (
        <CompetitionModal
          competition={selectedCompetition}
          onClose={() => setSelectedCompetition(null)}
        />
      )}
    </>
  );
}