import React, { useState } from "react";
import { createPortal } from "react-dom";

const generalRulesData = {
  eligibility: "HSSC (11th & 12th) students can participate in ALL events EXCEPT Inspirathon. Undergraduate and Diploma students are eligible for all events.",
  teamPolicy: "Check individual event rules for mixed-team permissions. Where mixed teams are NOT allowed, all team members must strictly belong to the same institution.",
  contactPolicy: "Only Student Coordinator contact numbers are provided. Faculty contact numbers are NOT to be mentioned or contacted for event queries.",
  cappingPolicy: "Event capping (total team limits & per-college capping) is explicitly specified under each event's details. Once capping is reached, registrations will close.",
  offlineRegistration: "Events offering offline/spot registration require participants to report at least 30 minutes before event start. Spot entries depend strictly on slot availability.",
  registrationDeadline: "Registration End Date: To be announced.",
  prizeMoneyAndSchedule: "Prize Money, Date, Time & Venue banners are provided for each event (to be updated shortly).",
  rules: [
    "Participants must present a valid College/School ID card during reporting and registration.",
    "HSSC students are eligible for all events EXCEPT Inspirathon (24-Hour Hackathon).",
    "Mixed-college teams are permitted ONLY if explicitly stated under the specific event's rules.",
    "Only Student Coordinator numbers are listed for event queries; faculty contact numbers are strictly prohibited.",
    "Total participation limits and college capping rules are strictly enforced for each event.",
    "Offline/spot registrations (where applicable) are strictly subject to seat availability on a first-come, first-served basis.",
    "Decisions made by the event judges and organizing committee will be final and binding.",
    "Any form of plagiarism, malpractice, or misconduct will result in immediate team disqualification.",
    "Participants must report to the designated venue at least 30 minutes before their event start time.",
    "Organizers reserve the right to alter event schedules, timelines, or rules if necessary."
  ]
};

const competitions = [
  {
    number: "01",
    name: "Inspirathon",
    tag: "24 HOUR HACKATHON",
    tagline: "Assemble. Innovate. Inspire.",
    description:
      "Join forces in an intense 24-hour offline hackathon where creativity and technical skills are your ultimate tools to solve real-world challenges.",
    registerLink: "https://forms.gle/s1Dw2q6awuEGfeALA",
    eligibility: "Undergraduate & Diploma students only. (HSSC students are NOT eligible for Inspirathon).",
    teamPolicy: "Each team must have exactly 3 members. Mixed teams from different institutions are ALLOWED.",
    cappingInfo: "Maximum 12 teams total (Limit of 4 teams per problem statement). Capping: Limit of 2 teams per college.",
    offlineReg: "Online pre-registration mandatory. Offline/spot registration is NOT available for Inspirathon.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Main Campus Lab",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Amey Shet Tilve", role: "Faculty In-Charge", image: "/faculty images/amey.webp" },
      { name: "Prof. Janhavi Naik", role: "Faculty In-Charge", image: "/faculty images/Janhavi.webp" },
      { name: "Mr. Amit Sapkal", role: "Faculty In-Charge", image: "/faculty images/AmitSapkal_26.webp" },
      { name: "Mr. Romeo D'Cruz", role: "Faculty In-Charge", image: "/faculty images/RomeoDaCruz.webp" },
      { name: "Mr. Antonio Nevis", role: "Faculty In-Charge", image: "/faculty images/AntonioNoronhaNeves.webp" }
    ],
    coordinators: [
      {
        name: "Reuel Luis",
        role: "Student Coordinator",
        image: "/student images/Reuel_Luis.webp",
        phone: "+91 9359587415"
      },
      {
        name: "Analee Martins",
        role: "Student Coordinator",
        image: "/student images/Analee Martins SE.webp",
        phone: "+91 9373843024"
      }
    ],
    judgingCriteria: [
      "AI Engineering and Application of AI (30%)",
      "Architecture and Execution (25%)",
      "Innovation and Solution to Problem (25%)",
      "UI/UX (10%)",
      "Feasibility (10%)"
    ],
    rules: [
      "The competition is conducted offline for 24 hours.",
      "Each team must have exactly 3 members.",
      "HSSC students are NOT eligible for Inspirathon.",
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
    tagline: "Debug. Optimize. Dominate.",
    description:
      "Put your programming and debugging speed to the ultimate test in a high-stakes competitive C++ coding arena.",
    registerLink: "https://forms.gle/wBXZ9woAfVauFNCcA",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Each team must have exactly 2 members. Both members MUST belong to the same college (Mixed teams NOT allowed).",
    cappingInfo: "Maximum 18 teams total. Capping: Maximum 2 teams per college.",
    offlineReg: "Spot/Offline registration available at venue desk 30 minutes prior to event start, subject to remaining slot availability.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Computer Lab",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Siya Khandeparkar", role: "Faculty In-Charge", image: "/faculty images/Siya.webp" },
      { name: "Mrs. Sandra Mazarello", role: "Faculty In-Charge", image: "/faculty images/SandraMazarello.webp" }
    ],
    coordinators: [
      {
        name: "Shaun Fernandes",
        role: "Student Coordinator",
        image: "/student images/Shaun.webp",
        phone: "+91 9359936029"
      },
      {
        name: "Devanshu Yelurkar",
        role: "Student Coordinator",
        image: "/student images/Devanshu Yelurkar.webp",
        phone: "+91 9373814674"
      }
    ],
    judgingCriteria: [
      "Round 1 Evaluation: Syntax & Logic error resolution (25 Points split by code difficulty). Top 3 fastest submitters earn +5, +4, +3 Speed Bonus points.",
      "Round 2 Interlinked Evaluation: C++ Blind Coding challenge (25 Points) + 5 'Minute to Win It' mini-game victories (20 Points). Top 3 fastest submitters earn +5, +4, +3 Speed Bonus points.",
      "Round 3 Final Showdown: 10 C++ coding problems worth 5 Points each (50 Points total).",
      "Tie Resolution Hierarchy: 1) Submission Timestamp, 2) Algorithmic Big-O Time/Space Complexity, 3) Single Host Benchmarking execution speed against hidden stress tests."
    ],
    rules: [
      "Each team must have exactly 2 members from the same college (Mixed teams not allowed).",
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
    tagline: "Reason. Analyze. Conquer.",
    description:
      "Solve complex aptitude puzzles, logical riddles, and technical problem statements to prove your mental dexterity.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeOprlwAWLU87d7i_CD4sJ_EFNTtzkHMIDqAXfUYJaz9_TKpQ/viewform?usp=sharing&ouid=103062752765685690684",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Each team must have exactly 2 members from the same institution (Mixed teams NOT allowed).",
    cappingInfo: "Maximum 20 teams total. No per-college capping applied unless slots exceed.",
    offlineReg: "Offline spot registration permitted up to 15 minutes before round commencement if slot capacity permits.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Seminar Hall",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Manisha Fal Dessai", role: "Faculty In-Charge", image: "/faculty images/Manisha.webp" },
      { name: "Prof. Karishma Tuenkar", role: "Faculty In-Charge", image: "/faculty images/Karishma.webp" }
    ],
    coordinators: [
      {
        name: "Devanshi Rami",
        role: "Student Coordinator",
        image: "/student images/Devanshi.webp",
        phone: "+91 88064 32239"
      },
      {
        name: "Mansi Mishra",
        role: "Student Coordinator",
        image: "/student images/Mansi Mishra SE.webp",
        phone: "+91 74998 42448"
      }
    ],
    judgingCriteria: [
      "Logic Accuracy: Evaluate whether the solution produces correct results for given problems, handles required cases, and follows the stated logic without errors.",
      "Execution Time Assessment: The time taken by the team to complete each task, giving appropriate consideration to speed while maintaining accuracy and completeness.",
      "Code Implementation: Evaluate the structure, readability, efficiency, and organization of the code, including whether the implementation is practical and avoids unnecessary complexity.",
      "Problem-Solving: Assess the clarity of the team's approach, logical reasoning, understanding of the problem, and ability to develop an effective solution."
    ],
    rules: [
      "Each team must have exactly 2 members from the same college.",
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
    tagline: "Design. Prototype. Transform.",
    description:
      "Transform abstract ideas into intuitive, responsive, and visually stunning digital user experiences using Figma.",
    registerLink: "https://forms.gle/yHwCf5HrzWfE9KYu8",
    eligibility: "HSSC, Higher Secondary, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Maximum 2 members per team. Cross-institution / mixed teams are ALLOWED.",
    cappingInfo: "Maximum 25 teams total. No per-college capping.",
    offlineReg: "Online registration preferred. Offline spot registration available at venue subject to lab system availability.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Design Studio Lab",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Mithil Parab", role: "Faculty In-Charge", image: "/faculty images/Mithil_parab.webp" },
      { name: "Prof. Duval Gomes", role: "Faculty In-Charge", image: "/faculty images/duval.webp" }
    ],
    coordinators: [
      {
        name: "Rushank Natekar",
        role: "Student Coordinator",
        image: "/student images/rushank.webp",
        phone: "+91 9022656976"
      },
      {
        name: "Pranita Govekar",
        role: "Student Coordinator",
        image: "/student images/pranita.webp",
        phone: "+91 9284183785"
      }
    ],
    judgingCriteria: [
      "Usability & Practicality",
      "Navigation & Interactive Prototype Flow",
      "Visual Design and Consistency",
      "Creativity and Originality",
      "Relevance to the Problem Statement",
      "Presentation & Communication",
      "Technical Feasibility",
      "Overall Design Impact"
    ],
    rules: [
      "Participants may be from higher secondary (HSSC), undergraduate or diploma programs.",
      "Each team can have a maximum of 2 members.",
      "Cross-institution / mixed team participation is allowed.",
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
    tagline: "Capture. Edit. Create.",
    description:
      "Unleash your short-form video production creativity to capture the electric energy and spirit of Inspirus 2K26.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScT7qaA62gVwQdWf-ER806uSqBltC3dgt90T8pbpu6xKEoZyA/viewform",
    eligibility: "Open to High School / HSSC, College & Degree College students from professional and non-professional institutions.",
    teamPolicy: "1 or 2 official participants per team. If 2 members, both MUST belong to the same institute (Mixed teams NOT allowed). Additional non-registered people may appear in the reel.",
    cappingInfo: "2 to 3 teams per college/institute.",
    offlineReg: "Online entry submission. Participants post reel on Instagram and collaborate with @inspirus.reels.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: Submission Deadline 5th October 2026 | Time: 11:59 PM | Mode: Online",
    registrationDeadline: "5th October 2026 at 11:59 PM",
    facultyCoordinators: [
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge", image: "/faculty images/Floyd.webp" }
    ],
    coordinators: [
      {
        name: "Pavitra Nayak",
        role: "Student Coordinator",
        image: "/student images/Pavitra nayak.webp",
        phone: "+91 9529231516"
      },
      {
        name: "Prasanna Pednekar",
        role: "Student Coordinator",
        image: "/student images/Prasanna Pednekar_.webp",
        phone: "+91 9404427450"
      }
    ],
    judgingCriteria: [
      "Creativity & Innovation – 20 points",
      "Relevance to Theme – 15 points",
      "Technical Quality (Editing, Audio & Visuals) – 15 points",
      "Originality – 15 points",
      "Presentation & Aesthetics – 10 points",
      "Clarity of Message – 10 points",
      "Engagement – 10 points",
      "Impact – 5 points"
    ],
    rules: [
      "Participants can take inspiration from existing trends online, but copying or plagiarizing content is strictly prohibited and may lead to disqualification.",
      "Any derogatory remarks, name-calling, or regional slang targeting any person or community are strictly prohibited.",
      "The use of offensive or inappropriate language, gestures, or actions will lead to immediate disqualification.",
      "The video must not exceed 1 minute.",
      "Each team can submit only one reel. Multiple entries from the same team will lead to disqualification.",
      "The reel must be made in vertical format (9:16 aspect ratio preferred).",
      "Each team can have 1 or 2 official participants. If there are 2, both must be from the same institute. Additional people may appear in the reel, but they will not be considered official team members.",
      "Participants may use commonly used social media platforms such as Instagram, Facebook, X (Twitter), LinkedIn, WhatsApp, and Snapchat.",
      "THEME: 'Promote the INSPIRUS Event in Your Own Creative Way'.",
      "PROCEDURE: After successful registration, participants must post their reel on their Instagram account (after adding the entry details template).",
      "PROCEDURE: Post the reel on Instagram, add @inspirus.reels as a collaborator, and include the entry number and participant name in the caption along with #inspirus2k26 and tag @inspirusx.",
      "SUBMISSION DEADLINE: 5th October 2026 at 11:59 PM (Mode: Online)."
    ],
  },
  {
    number: "06",
    name: "Prompt Wars",
    tag: "AI • PROMPT ENGINEERING",
    tagline: "Prompt. Engineer. Excel.",
    description:
      "Craft masterclass generative AI prompts under time pressure to unlock round-specific AI outputs.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSet3O1lWiFE2OxOAG9GdA64zEa9axSZhxNmuk2pg5D7-sT4zA/viewform?usp=publish-editor",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Each team must consist of 2 members. Mixed-college teams are ALLOWED.",
    cappingInfo: "Maximum 20 teams total (limited by system capacity). No per-college capping.",
    offlineReg: "Spot registration permitted at venue 30 minutes before event if seats remain available.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: AI & ML Lab",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Norman Dias", role: "Faculty In-Charge", image: "/faculty images/Norman.webp" },
      { name: "Prof. Amey Kerkar", role: "Faculty In-Charge", image: "/faculty images/Amey_Kerkar.webp" }
    ],
    coordinators: [
      {
        name: "Shanaia Martis",
        role: "Student Coordinator",
        image: "/student images/Shanaia Martis.webp",
        phone: "+91 9356966736"
      },
      {
        name: "Aditya Bingekar",
        role: "Student Coordinator",
        image: "/student images/aditya.webp",
        phone: "+91 9356950853"
      }
    ],
    judgingCriteria: [
      "Round 1 (Prompt IQ): Elimination MCQ Quiz testing fundamental AI knowledge & Prompt Engineering (20–25 questions, 20 mins).",
      "Round 2 Task 1 (Movie Maker - 30 Marks): Prompt Quality & Structure (8), Creativity & Originality (7), Adherence to Requirements (6), Quality of Final Output (5), Effective Use of AI (4).",
      "Round 2 Task 2 (Image Generator - 30 Marks): Prompt Quality & Specificity (8), Accuracy & Requirement Fulfilment (8), Visual Quality (6), Creativity (5), Effective Prompt Optimization (3).",
      "Round 2 Task 3 (Guess My Prompt - 40 Marks): Similarity to Target Output (15), Prompt Construction (10), Iteration & Improvement (8), Attention to Detail (4), Efficiency Within Allowed Attempts (3).",
      "Round 3 (One-Prompt Website - 100 Marks): Requirement Fulfilment (25), Prompt Quality & Structure (20), Functionality (20), UI/UX & Visual Design (15), Creativity & Originality (10), Technical Quality (5), Effective Use of the Single Prompt (5)."
    ],
    rules: [
      "Each team must consist of 2 participants.",
      "Only the first 20 teams to register for the event will be eligible to participate.",
      "Participants must use only the computer systems provided by the college throughout the competition.",
      "Use of personal laptops, mobile phones, tablets, or any other personal devices is strictly prohibited.",
      "Participants may use only the AI tools specifically permitted for each round.",
      "Participants must follow the time limits and instructions provided by the organizers.",
      "Any use of unauthorized AI tools, external assistance, personal devices, or other unfair means may result in disqualification.",
      "All teams must follow the same tool, model, and generation settings wherever specified to ensure fair evaluation.",
      "All task details and instructions will be announced on the spot by the organizers.",
      "Round 1 will eliminate 10 teams, with the remaining teams qualifying for Round 2 based on their performance.",
      "Round 2 will eliminate 5 teams, with the top 5 teams qualifying for Round 3.",
      "The organizers' decision regarding evaluation and elimination will be final.",
    ],
  },
  {
    number: "07",
    name: "ExQuizite",
    tag: "QUIZ • KNOWLEDGE • TEAMWORK",
    tagline: "Think. Answer. Triumph.",
    description:
      "Battle through intense rounds of general knowledge, tech trivia, and speed-buzzers in an offline team quiz.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfeS-w4UhS4nMvHKKFlaxuhF5x-600lsq93KE76veEQid8FCA/viewform?usp=publish-editor",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Each team must have 2 members. Both members MUST belong to the same college (Mixed teams NOT allowed).",
    cappingInfo: "Maximum 30 teams total. Capping: Maximum 3 teams per college.",
    offlineReg: "Offline spot registration available at registration desk until 20 minutes before quiz commencement.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Auditorium",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Sweta Rane", role: "Faculty In-Charge", image: "/faculty images/Sweta.webp" },
      { name: "Prof. Christina Barretto", role: "Faculty In-Charge", image: "/faculty images/Christina.webp" }
    ],
    coordinators: [
      {
        name: "Vedhant Sawant",
        role: "Student Coordinator",
        image: "/student images/vedhant_.webp",
        phone: "+91 9373594972"
      },
      {
        name: "Ishika Sarwardekar",
        role: "Student Coordinator",
        image: "/student images/Ishika_.webp",
        phone: "+91 9284196477"
      }
    ],
    judgingCriteria: [
      "Preliminary Rounds: Point-based quiz evaluation across Preliminary Round 1 (top 20 advance) and Preliminary Round 2 (top 5 advance).",
      "Main Rounds: Point-based scoring across 5 Main Rounds to determine top 2 winning teams.",
      "Tie-Breaker Hierarchy: 1) Special Tie-Breaker Round questions, 2) Random selection procedure by organizers if unresolved."
    ],
    rules: [
      "The competition is conducted offline.",
      "Each team must have 2 members from the same college (Mixed teams not allowed).",
      "Participants may be HSSC, undergraduate or diploma students.",
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
    name: "Code Beyond Sight",
    tag: "C/C++ • BLIND CODING • MONITOR OFF",
    tagline: "Type Blind. Code Pure. Master Logic.",
    description:
      "Challenge your mental mapping and syntax accuracy by writing C/C++ code completely blind with monitor screens turned off.",
    registerLink: "https://docs.google.com/forms/d/1xjlQdqf8DKt7OQNqwnZRKZPhk4lXNauxUPFDIkvYz-g/edit",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "1 or 2 members per team from the same college (Mixed teams NOT allowed).",
    cappingInfo: "Maximum 20 teams total. Capping: Maximum 2 teams per college.",
    offlineReg: "Offline spot registration available at venue 30 minutes prior to event start, subject to slot availability.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Main Computer Lab",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Dr. Amrita Naik", role: "Faculty In-Charge", image: "/faculty images/Amrita_Naik.webp" },
      { name: "Prof. Vidhya Naik", role: "Faculty In-Charge" }
    ],
    coordinators: [
      {
        name: "Parima Tendulkar",
        role: "Student Coordinator",
        image: "/student images/Parima Tendulkar (TE coordinator).jpg",
        phone: "+91 9404930645"
      },
      {
        name: "Meera Anthony",
        role: "Student Coordinator",
        image: "/student images/Meera Antony.webp",
        phone: "+91 7038796120"
      }
    ],
    judgingCriteria: [
      "Functional Logic, Syntactic Correctness, and Code Execution under blind coding monitor blackout conditions.",
      "Point Allocation: Point values announced by coordinators immediately prior to each round.",
      "Tie-Breaker Hierarchy: 1) Completion Time, 2) Code Cleanliness, 3) Output Correctness."
    ],
    rules: [
      "BLIND CODING REQUIREMENT: The monitor screen will be TURNED OFF during the main coding phase. Code must be typed blind without visual display.",
      "Teams are provided a fixed time limit to review the problem statement on paper before monitors are turned off.",
      "No looking at adjacent monitors, using visual reflection aids, or attempting to preview the screen during blind typing.",
      "Code compilation and error diagnostics will only be executed AFTER the monitor is turned back on at submission time.",
      "Each team must have 1 or 2 members from the same college (Mixed teams not allowed).",
      "A maximum of 20 teams can participate.",
      "The competition uses C/C++ programming environment.",
      "Cellphones, chits, pendrives, AI tools and external digital devices are strictly prohibited.",
      "Paper and pen will be provided for logic design prior to monitor blackout.",
      "Participants must report at least 30 minutes before the event.",
      "Violation of blind coding rules or monitor tampering will result in immediate disqualification.",
      "The decision of event coordinators and judges will be final."
    ],
  },
  {
    number: "09",
    name: "Veil of Secrets",
    tag: "MYSTERY • LOGIC • TEAMWORK",
    tagline: "Uncover. Decipher. Escape.",
    description:
      "Step into a mysterious sequence of encrypted clues, secret codes, and physical logic puzzles to unlock the truth.",
    registerLink: "https://forms.gle/cDJRV8aHxJZU7U1b9",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Each team must consist of 3 members. Mixed-college teams are ALLOWED.",
    cappingInfo: "Maximum 16 teams total. Capping: Maximum 2 teams per college.",
    offlineReg: "Online registration mandatory. No spot/offline registration available for Veil of Secrets.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: To be announced | Venue: Campus Mystery Arena",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Merwyn D'Souza", role: "Faculty In-Charge", image: "/faculty images/Marwyn_Dsouza.webp" },
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge", image: "/faculty images/Floyd.webp" }
    ],
    coordinators: [
      {
        name: "Debbie Mascarenhas",
        role: "Student Coordinator",
        image: "/student images/Debbie Fatima Mascarenhas.webp",
        phone: "+91 98765 43226"
      },
      {
        name: "Amogh Tendulkar",
        role: "Student Coordinator",
        image: "/student images/Amogh Ulhas Tendulkar_.webp",
        phone: "+91 98765 43227"
      }
    ],
    judgingCriteria: [
      "Round 1 (Logical Puzzles): Maximum puzzle scores and minimum completion time (top 8–9 teams advance).",
      "Round 2 (Treasure Hunt & Escape Room): Speed in retrieving clues (first-come, first-served) and time management inside the 10–12 minute escape room.",
      "Overall Judgment: Total accumulated scores and completion timestamps."
    ],
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
    tagline: "Focus. Capture. Tell Your Story.",
    description:
      "Frame the world through your lens and tell a compelling narrative through a single high-impact photograph.",
    registerLink: "https://forms.gle/99FPnMgKB2m1QDz46",
    eligibility: "HSSC, Undergraduate & Diploma students are eligible.",
    teamPolicy: "Individual participation only (1 member).",
    cappingInfo: "No team capping. Open to all registered individual entries.",
    offlineReg: "Online submission only. No spot/offline registration.",
    prizeMoney: "To be announced",
    dateTimeVenue: "Date: To be announced | Time: Online Submission | Venue: Campus Grounds / Online",
    registrationDeadline: "To be announced",
    facultyCoordinators: [
      { name: "Prof. Duval Gomes", role: "Faculty In-Charge", image: "/faculty images/duval.webp" }
    ],
    coordinators: [
      {
        name: "Aryan Adelkar",
        role: "Student Coordinator",
        image: "/student images/Aryan Adelker.webp",
        phone: "+91 8788217993"
      },
      {
        name: "Arnav Dessai",
        role: "Student Coordinator",
        image: "/student images/arnav.webp",
        phone: "+91 9356738893"
      }
    ],
    judgingCriteria: [
      "Creativity & Originality",
      "Portrayal of Topic",
      "Narrative Depth (Story within the photograph)",
      "Aesthetic Appeal & Visual Impact"
    ],
    rules: [
      "The competition is conducted offline.",
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

function GeneralRulesModal({ onClose }) {
  const modal = (
    <div className="competition-modal-overlay" onClick={onClose}>
      <div
        className="competition-modal general-rules-modal"
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
          <span>INSPIRUS 2K26</span>
          <span>FESTIVAL REGULATIONS</span>
        </div>

        <div className="modal-status">
          <span className="status-dot" />
          GENERAL RULES & ELIGIBILITY GUIDELINES
        </div>

        <h2>GENERAL RULES</h2>
        <p className="competition-modal-tag">INSPIRUS 2K26 OFFICIAL POLICY</p>

        <div className="modal-divider" />

        <div className="modal-banners-container">
          <div className="modal-banner highlight-banner">
            <div className="banner-header">
              <i className="ri-user-star-line" />
              <span>ELIGIBILITY CRITERIA</span>
            </div>
            <p>{generalRulesData.eligibility}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-team-line" />
              <span>TEAM COMPOSITION & MIXED TEAMS</span>
            </div>
            <p>{generalRulesData.teamPolicy}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-phone-find-line" />
              <span>CONTACT POLICY</span>
            </div>
            <p>{generalRulesData.contactPolicy}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-bar-chart-box-line" />
              <span>TOTAL TEAMS & CAPPING POLICY</span>
            </div>
            <p>{generalRulesData.cappingPolicy}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-edit-box-line" />
              <span>OFFLINE / SPOT REGISTRATION</span>
            </div>
            <p>{generalRulesData.offlineRegistration}</p>
          </div>

          <div className="modal-banner-grid">
            <div className="modal-banner compact-banner">
              <div className="banner-header">
                <i className="ri-trophy-line" />
                <span>PRIZE MONEY</span>
              </div>
              <p>To be announced</p>
            </div>
            <div className="modal-banner compact-banner">
              <div className="banner-header">
                <i className="ri-calendar-event-line" />
                <span>REGISTRATION DEADLINE</span>
              </div>
              <p>{generalRulesData.registrationDeadline}</p>
            </div>
          </div>
        </div>

        <div className="modal-divider" />

        <h3>CODE OF CONDUCT & REGULATION LIST</h3>

        <ul>
          {generalRulesData.rules.map((rule, index) => (
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
          CLOSE GENERAL RULES
        </button>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

function CoordinatorAvatar({ name, image }) {
  const [imgError, setImgError] = useState(false);

  const initials = name
    .trim()
    .split(" ")
    .filter((w) => w.length > 0)
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  const colors = [
    "#9b59b6", "#3498db", "#2ecc71", "#e67e22", "#e74c3c", "#1abc9c", "#8e44ad"
  ];
  const colorIndex = name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % colors.length;

  return (
    <div className="coordinator-avatar-frame">
      {!imgError && image ? (
        <img
          src={image}
          alt={name}
          className="coordinator-avatar-img"
          onError={() => setImgError(true)}
        />
      ) : (
        <div
          className="coordinator-avatar-initials"
          style={{ backgroundColor: colors[colorIndex] }}
        >
          {initials}
        </div>
      )}
    </div>
  );
}

function EventLogoFrame({ logo, name }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="event-logo-container">
      {logo && !imgError ? (
        <img
          src={logo}
          alt={`${name} Logo`}
          className="event-logo-img"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="event-logo-placeholder">
          <div className="logo-placeholder-corners">
            <span className="corner top-left" />
            <span className="corner top-right" />
            <span className="corner bottom-left" />
            <span className="corner bottom-right" />
          </div>
          <i className="ri-shield-flash-line" />
          <span className="logo-placeholder-title">{name.toUpperCase()}</span>
          <span className="logo-placeholder-sub">[ LOGO SPACE ]</span>
        </div>
      )}
    </div>
  );
}

function EventDetailPage({ competition, onBack }) {
  if (!competition) return null;

  const pageView = (
    <div className="event-detail-page">
      {/* TOP NAVIGATION BAR */}
      <header className="event-detail-nav">
        <div className="nav-left">
          <button type="button" className="event-back-btn" onClick={onBack}>
            <i className="ri-arrow-left-line" />
            <span>BACK TO COMPETITIONS</span>
          </button>
          <div className="event-brand">
            <span className="brand-dot" />
            <span>INSPIRUS 2K26 // EVENT_{competition.number}</span>
          </div>
        </div>

        <button
          type="button"
          className="event-header-register"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          <span>REGISTER NOW</span>
          <i className="ri-external-link-line" />
        </button>
      </header>

      {/* HERO SECTION (MATCHES SCREENSHOT REFERENCE) */}
      <div className="event-hero-section">
        <div className="event-hero-container">
          <div className="event-hero-content">
            <div className="event-hero-badge">
              <span className="badge-pulse" />
              <span>{competition.tag}</span>
            </div>

            <h1 className="event-hero-title">{competition.name}</h1>

            <h2 className="event-hero-tagline">{competition.tagline}</h2>

            <p className="event-hero-description">{competition.description}</p>

            <div className="hero-cta-group">
              <button
                type="button"
                className="hero-register-btn"
                onClick={() => window.open(competition.registerLink, '_blank')}
              >
                <span>REGISTER FOR {competition.name.toUpperCase()}</span>
                <i className="ri-arrow-right-line" />
              </button>
            </div>
          </div>

          <div className="event-hero-graphic-col">
            <EventLogoFrame logo={competition.logo} name={competition.name} />
          </div>
        </div>
      </div>

      {/* MAIN DETAILS CONTENT CONTAINER */}
      <div className="event-detail-body">
        {/* FACULTY COORDINATORS SECTION */}
        {competition.facultyCoordinators && competition.facultyCoordinators.length > 0 && (
          <section className="event-coordinators-section">
            <div className="section-title-wrap">
              <i className="ri-user-star-fill" />
              <h3>FACULTY COORDINATORS</h3>
            </div>

            <div className="coordinators-grid">
              {competition.facultyCoordinators.map((faculty, idx) => (
                <div key={idx} className="coordinator-card faculty-card">
                  <CoordinatorAvatar name={faculty.name} image={faculty.image} />
                  <div className="coordinator-info">
                    <h4>{faculty.name}</h4>
                    <span className="coordinator-role faculty-role">{faculty.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* STUDENT COORDINATORS SECTION WITH IMAGES */}
        <section className="event-coordinators-section">
          <div className="section-title-wrap">
            <i className="ri-team-fill" />
            <h3>STUDENT COORDINATORS</h3>
          </div>

          <div className="coordinators-grid">
            {competition.coordinators.map((coord, idx) => (
              <div key={idx} className="coordinator-card">
                <CoordinatorAvatar name={coord.name} image={coord.image} />
                <div className="coordinator-info">
                  <h4>{coord.name}</h4>
                  <span className="coordinator-role">{coord.role}</span>
                  <a href={`tel:${coord.phone}`} className="coordinator-phone">
                    <i className="ri-phone-line" />
                    <span>{coord.phone}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SPECIFICATIONS BANNERS GRID */}
        <section className="event-banners-section">
          <div className="section-title-wrap">
            <i className="ri-shield-star-line" />
            <h3>EVENT SPECIFICATIONS</h3>
          </div>

          <div className="modal-banners-container">
            <div className="modal-banner highlight-banner">
              <div className="banner-header">
                <i className="ri-user-check-line" />
                <span>ELIGIBILITY CRITERIA</span>
              </div>
              <p>{competition.eligibility}</p>
            </div>

            <div className="modal-banner">
              <div className="banner-header">
                <i className="ri-group-line" />
                <span>TEAM COMPOSITION & CAPPING</span>
              </div>
              <p><strong>Team Policy:</strong> {competition.teamPolicy}</p>
              <p className="banner-subtext"><strong>Capacity & Capping:</strong> {competition.cappingInfo}</p>
            </div>

            <div className="modal-banner">
              <div className="banner-header">
                <i className="ri-user-add-line" />
                <span>OFFLINE REGISTRATION CRITERIA</span>
              </div>
              <p>{competition.offlineReg}</p>
            </div>

            <div className="modal-banner-grid">
              <div className="modal-banner compact-banner">
                <div className="banner-header">
                  <i className="ri-trophy-line" />
                  <span>PRIZE MONEY</span>
                </div>
                <p>{competition.prizeMoney}</p>
              </div>

              <div className="modal-banner compact-banner">
                <div className="banner-header">
                  <i className="ri-time-line" />
                  <span>DATE, TIME & VENUE</span>
                </div>
                <p>{competition.dateTimeVenue}</p>
              </div>
            </div>

            <div className="modal-banner-grid">
              <div className="modal-banner compact-banner">
                <div className="banner-header">
                  <i className="ri-calendar-close-line" />
                  <span>REGISTRATION END DATE</span>
                </div>
                <p>{competition.registrationDeadline}</p>
              </div>

              <div className="modal-banner compact-banner">
                <div className="banner-header">
                  <i className="ri-contacts-line" />
                  <span>STUDENT COORDINATORS NOTICE</span>
                </div>
                <p>Contact designated student coordinators listed above for event queries.</p>
              </div>
            </div>
          </div>
        </section>

        {/* JUDGING CRITERIA */}
        {competition.judgingCriteria && competition.judgingCriteria.length > 0 && (
          <section className="event-rules-section judging-criteria-section">
            <div className="section-title-wrap">
              <i className="ri-award-line" style={{ color: "#c98aff" }} />
              <h3>JUDGING CRITERIA</h3>
            </div>

            <ul className="event-rules-list">
              {competition.judgingCriteria.map((criterion, index) => (
                <li key={index} className="event-rule-item">
                  <span className="rule-badge" style={{ color: "#c98aff", display: "flex", alignItems: "center", paddingTop: "2px" }}>
                    <i className="ri-award-fill" style={{ fontSize: "18px" }} />
                  </span>
                  <span className="rule-text">{criterion}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* RULES & REGULATIONS */}
        <section className="event-rules-section">
          <div className="section-title-wrap">
            <i className="ri-file-list-3-line" />
            <h3>RULES & REGULATIONS</h3>
          </div>

          <ul className="event-rules-list">
            {competition.rules.map((rule, index) => (
              <li key={index} className="event-rule-item">
                <span className="rule-badge">{(index + 1).toString().padStart(2, "0")}</span>
                <span className="rule-text">{rule}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* FOOTER ACTIONS */}
        <div className="event-detail-footer">
          <button
            type="button"
            className="footer-register-btn"
            onClick={() => window.open(competition.registerLink, '_blank')}
          >
            <span>REGISTER NOW FOR {competition.name.toUpperCase()}</span>
            <i className="ri-external-link-line" />
          </button>

          <button type="button" className="footer-back-btn" onClick={onBack}>
            <span>BACK TO ALL COMPETITIONS</span>
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(pageView, document.body);
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

          <button type="button" className="competition-register" onClick={() => window.open(competition.registerLink, '_blank')}>
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
  const [showGeneralRules, setShowGeneralRules] = useState(false);

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

          <div className="general-rules-action">
            <button
              type="button"
              className="general-rules-btn"
              onClick={() => setShowGeneralRules(true)}
            >
              <i className="ri-file-text-line" />
              <span>GENERAL RULES</span>
            </button>
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

      {showGeneralRules && (
        <GeneralRulesModal onClose={() => setShowGeneralRules(false)} />
      )}

      {selectedCompetition && (
        <EventDetailPage
          competition={selectedCompetition}
          onBack={() => setSelectedCompetition(null)}
        />
      )}
    </>
  );
}
