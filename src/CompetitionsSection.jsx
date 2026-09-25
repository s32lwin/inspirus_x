import React, { useState, useEffect, useCallback, useRef } from "react";
import { createPortal } from "react-dom";

const generalRulesData = {
  eligibility: "HSSC (11th & 12th), Undergraduate, and Diploma students from recognized institutions are eligible to participate (with specific eligibility criteria defined per event).",
  teamPolicy: "Inter-college / mixed-institution teams are permitted ONLY where explicitly stated in the respective event rules (e.g., Inspirathon, Technomorph, etc.). Where mixed teams are not allowed, all members must belong to the same institution.",
  contactPolicy: "For queries and assistance, contact the respective Student Coordinators listed for each event. Faculty in-charge members are NOT to be contacted directly for event queries.",
  cappingPolicy: "Event registrations operate on a strict First-Come, First-Served (FCFS) basis. Once the maximum team limit or per-college capping is reached, registrations will immediately close.",
  offlineRegistration: "Spot/Offline registrations (where offered) require reporting at least 30 minutes before the scheduled start and are strictly subject to remaining slot availability.",
  registrationDeadline: "Online registrations close on 10th October 2026 on or before 5:00 PM (Except Inspirathon & Reel It Feel It - refer to respective event rules).",
  prizeMoneyAndSchedule: "Prizes include cash awards and official merit certificates for winners. All eligible participants receive official participation e-certificates.",
  rules: [
    "Registration is free of cost for all events. All teams should register online on our website on or before 5:00 PM, 10th October 2026 (Except Inspirathon & Reel It Feel It - refer to respective event rules).",
    "Registrations for all events are accepted on a strict First-Come, First-Served (FCFS) basis until event capacity is reached.",
    "Participants must upload clear images of their valid institutional ID cards during online registration and must carry original physical ID cards on the day of the event.",
    "For online submission events (such as Reel It Feel It and Framed), submissions must strictly adhere to the communicated deadlines and format criteria.",
    "Students pursuing HSSC (11th & 12th), Undergraduate, and Diploma programmes from professional and non-professional institutions are eligible as per individual event rules.",
    "Mixed-college teams are permitted ONLY if explicitly stated under the specific event rules (e.g., Inspirathon, Technomorph, etc.). Where mixed teams are not permitted, all team members must strictly belong to the same college/institution.",
    "Participants must report to their designated labs/venues at least 30 minutes before the scheduled start time.",
    "Use of unauthorized external aids, web browsing, AI tools (unless explicitly permitted), cheating, or plagiarized code/designs will result in immediate disqualification.",
    "All electronic devices, smartwatches, and unauthorized gadgets must be stored outside venues where restricted by coordinators.",
    "All online submissions should be made before the deadline; teams with late submissions will not be entertained.",
    "Clarifications or disputes of any kind must be raised with the respective event student coordinators before the commencement of the round.",
    "The decisions of the judges, event coordinators, and faculty in-charge are final and binding on all participants.",
    "Winners will be provided an official disbursement form to fill out their bank details for prize money transfer.",
    "Winners are requested to attend the Grand Valedictory Function (16th October 2026 at 3:30 PM) at the College Auditorium to receive trophies and certificates.",
    "All participants (except winners) will receive official participation e-certificates following the conclusion of the festival.",
    "The organizing committee reserves the right to alter event schedules, venues, or rules if necessary due to operational requirements."
  ]
};

const competitions = [
  {
    number: "01",
    slug: "inspirathon",
    category: "technical",
    name: "Inspirathon",
    tag: "24 HOUR HACKATHON",
    tagline: "Assemble. Innovate. Inspire.",
    description:
      "Join forces in an intense 24-hour coding marathon where creativity, AI engineering, and technical skills are your ultimate superpowers to build transformative software solutions.",
    registerLink: "https://forms.gle/s1Dw2q6awuEGfeALA",
    eligibility: "Students from Undergraduate, Diploma, professional, and non-professional institutions. All team members must be current students with a valid institute ID. Cross college teams are allowed.",
    teamPolicy: "3 Members compulsorily per team. Cross college teams are allowed (teams with members from different colleges).",
    cappingInfo: "Capped at 12 teams total (3 problem statements × 4 teams = 12 teams). Preliminary elimination round on 5th Oct if registrations are high by 1st Oct deadline.",
    prizeMoney: "₹3,000 each prize money for individual winner in each problem statement (3 Winners Total) + Official Merit Certificates",
    dateTimeVenue: "Date: 15 & 16 October 2026 | Timing: 15th October 09:00 AM to 16th October 01:00 PM (24 Hours Hackathon with Judgment) | Mode: Offline | Venue: Auditorium (2nd Floor)",
    registrationDeadline: "1st October 2026 at 5:00 PM",
    facultyCoordinators: [
      { name: "Prof. Amey Shet Tilve", role: "Faculty In-Charge", image: "faculty images/amey.webp" },
      { name: "Prof. Janhavi Naik", role: "Faculty In-Charge", image: "faculty images/Janhavi.webp" },
      { name: "Mr. Amit Sapkal", role: "Staff Incharge", image: "faculty images/AmitSapkal_26.webp" },
      { name: "Mr. Romeo D'Cruz", role: "Staff Incharge", image: "faculty images/RomeoDaCruz.webp" },
      { name: "Mr. Antonio Nevis", role: "Staff Incharge", image: "faculty images/AntonioNoronhaNeves.webp" }
    ],
    coordinators: [
      {
        name: "Reuel Luis",
        role: "Student Coordinator",
        image: "student images/Reuel_Luis.webp",
        phone: "+91 9359587415"
      },
      {
        name: "Analee Martins",
        role: "Student Coordinator",
        image: "student images/Analee Martins SE.webp",
        phone: "+91 8999294903"
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
      {
        main: "General Rules & Competition Format",
        sub: [
          "Online registrations will close on the 1st of October at 5:00 PM.",
          "Teams can use any programming language or software of their choice.",
          "Teams have to carry their own laptops/hardware.",
          "Problem statements will NOT be released online; instead, they will be given to teams on the day of the hackathon (15th of October), at the competition venue itself at 9:30 AM. Details of how the problem statement is to be chosen will be informed at the venue.",
          "There will be a total of 3 problem statements. One problem statement can be chosen by a maximum of 4 teams (3 problem statements × 4 teams = 12 teams total). There will be 3 winners, one for each problem statement (₹3,000 prize money each).",
          "Teams have to report at the venue strictly by 9:00 AM on 15th October.",
          "Wi-Fi access and power points/Extensions will be made available at the venue.",
          "The Hackathon will commence at 09:00 AM on 15th October and will run through 16th October, concluding at 01:00 PM with project presentations and final judgment. The teams are free to take breaks in between.",
          "The teams will not be provided with any additional accommodation.",
          "Teams are not allowed to leave the venue until the end of the hackathon.",
          "Mid-Challenge Tasks: During the 24-hour hackathon, surprise mini-tasks or checkpoints will be announced. Teams must complete these within the given time to win extra points for final evaluation.",
          "All team members must be current students with a valid institute ID. 3 members per team compulsorily. Cross college teams are allowed (teams with members from different colleges)."
        ]
      },
      {
        main: "Round Details & Capping Selection",
        sub: [
          "If the number of registered teams is HIGH by the registration deadline on 1st October, a preliminary elimination round will be held on the 5th of October to decide the final 12 teams. The results will be declared on 6th of October. Further details regarding the preliminary round will be given later.",
          "If the number of registered teams is LOW by the registration deadline, the preliminary round will NOT be conducted, and the first 12 teams registered on first come first serve basis will compete for the 24 hour hackathon on 15th October.",
          "The final team list will be acknowledged via the official WhatsApp group."
        ]
      },
      {
        main: "Refreshments & Logistics",
        sub: [
          "Day 1: Dinner provided at the venue.",
          "Day 2: Breakfast provided in the morning.",
          "All refreshments are to be consumed strictly in the Pantry Area on the 1st floor of the college building."
        ]
      },
      {
        main: "Presentation & Judging Guidelines",
        sub: [
          "After the duration of the hackathon is over, participants have to be ready with their final demo/presentation of their apps/websites in all manners to present to the judges. No extra time will be given for the same.",
          "Each team will have 5 minutes to present their solution to the judges, followed by a 2-minute Q&A session.",
          "Presentations and demos will be shown on a projector connected to your system (through HDMI).",
          "In case of discrepancy, decisions made by the judges will be final."
        ]
      }
    ]
  },
  {
    number: "02",
    slug: "code-clash",
    category: "technical",
    name: "Code Clash",
    tag: "DEBUG • ALGORITHM • C++",
    tagline: "Where coders collide like titans.",
    description:
      "Face off in a coding battle fiercer than titans where logic, C++ mastery, rapid debugging, and algorithmic problem-solving under pressure are your ultimate weapons.",
    registerLink: "https://forms.gle/wBXZ9woAfVauFNCcA",
    eligibility: "Undergraduate and Diploma Students from professional and non-professional institutions.",
    teamPolicy: "Exactly 2 participants per team. Each team will be provided with one computer. Both team members may collaborate and discuss within round rules.",
    cappingInfo: "Strictly capped at 18 teams (first-come, first-served basis). Any number of teams per college may register until the cap is reached.",
    offlineReg: "Spot/Offline registration available at venue desk 30 minutes prior to event start, subject to slot availability.",
    prizeMoney: "1st Place: ₹2,000 + Certificate | 2nd Place: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 15 October 2026 | Time: 12:00 PM to 04:00 PM | Mode: Offline | Venue: C2, C3 Lab (2nd Floor)",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 18 confirmed teams)",
    facultyCoordinators: [
      { name: "Prof. Siya Khandeparkar", role: "Faculty In-Charge", image: "faculty images/Siya.webp" },
      { name: "Mrs. Sandra Mazarello", role: "Staff Incharge", image: "faculty images/SandraMazarello.webp" }
    ],
    coordinators: [
      {
        name: "Shaun Fernandes",
        role: "Student Coordinator",
        image: "student images/Shaun.webp",
        phone: "+91 9359936029"
      },
      {
        name: "Devanshu Yelurkar",
        role: "Student Coordinator",
        image: "student images/Devanshu Yelurkar.webp",
        phone: "+91 9373814674"
      }
    ],
    rules: [
      {
        main: "General Event Information & Integrity Policy",
        sub: [
          "Team Structure: Exactly 2 participants per team.",
          "Capacity Cap: Strictly capped at 18 teams (first-come, first-served basis). Any number of teams per college may register until the cap is reached.",
          "Registration: Online registrations close on 10th October 2026 at 5:00 PM (or upon 18 confirmed teams).",
          "Prerequisites: Proficiency in C++, debugging fundamentals, and algorithmic problem solving.",
          "Reporting Time: All teams must report to the designated lab 30 minutes prior to event commencement.",
          "Allowed Materials: Participants must bring their own stationery. Paper for rough work will be provided on-site. Books, physical reference notes, digital storage devices, mobile phones or external aids are strictly prohibited during the competition.",
          "Integrity Policy: Web access is strictly prohibited. Any cheating, plagiarizing, or using external code results in immediate disqualification.",
          "Each team will be provided with one computer for the competition. Both team members may collaborate and discuss the problem, logic, and approach while working within the rules of each round.",
          "Authority: Final decisions rest entirely with the Inspirus Student Coordinators and Faculty Coordinators."
        ]
      },
      {
        main: "Round 1: Solve the Errors (30 Minutes)",
        sub: [
          "Task: Identify, analyze, and patch syntax and logic errors in two C++ programs.",
          "Submission Limit: Each team is allowed a maximum of 3 evaluation attempts. Your 3rd attempt is final.",
          "Volunteer Evaluation: Thoroughly test your code and confirm your output matches the expected requirements on your own screen before calling a volunteer over to judge your attempt.",
          "Scoring: 25 Points. Marks are split between the two programs based on their difficulty and complexity level.",
          "Speed Boost: The top 3 fastest teams to submit fully corrected solutions with correct output for both codes earn bonus points: 1st Place (+5 Points), 2nd Place (+4 Points), 3rd Place (+3 Points).",
          "Advancement: Top 12 teams qualify for Round 2."
        ]
      },
      {
        main: "Round 2: Coding & Mini-Games (45 Minutes)",
        sub: [
          "The Coder: Solves a C++ challenge under blind coding conditions featuring a surprise mechanic that will be revealed during the competition day (25 points).",
          "The Player: Competes in 5 'Minute to Win it' style challenges (4 points per game won; 20 points).",
          "Interlinked Advantage: Each mini game victory grants the Coder an advantage during the blind coding challenge.",
          "Speed Boost: The top 3 fastest teams to complete and submit their C++ code with a correct solution and output earn bonus points: 1st Place (+5 Points), 2nd Place (+4 Points), 3rd Place (+3 Points).",
          "Advancement: Top 6 teams qualify for Round 3."
        ]
      },
      {
        main: "Round 3: Coding Showdown (55 Minutes)",
        sub: [
          "Task: Both team members solve 10 C++ coding problems worth 5 marks each (50 marks total).",
          "Winner: Team with the highest accumulated score across all rounds."
        ]
      },
      {
        main: "Tie Breaker Rules",
        sub: [
          "If a tie occurs for qualifying slots in any round or for overall leaderboard placement, a Sudden Death Coding Challenge will be conducted under the following resolution hierarchy:",
          "1. Submission Timestamp: The first team to submit a fully correct solution wins.",
          "2. Algorithmic Efficiency: If timestamps match, the solution with superior Big-O time and space complexity wins.",
          "3. Single Host Benchmarking: If algorithmic complexity is identical, solutions will be executed back-to-back on a single designated organizer PC against hidden stress test inputs to determine runtime speed."
        ]
      }
    ]
  },
  {
    number: "03",
    slug: "retrieval-sages",
    category: "technical",
    name: "Retrieval Sages",
    tag: "APTITUDE • LOGIC • C/C++",
    tagline: "Decode the galaxy’s greatest secrets.",
    description:
      "Retrieval Sages is a multi-round team competition that challenges participants to quickly retrieve knowledge, think logically, and apply their programming skills under pressure. Each round tests a different skill, from aptitude and programming fundamentals to logical reasoning and advanced problem-solving, with eliminations after every round.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSeOprlwAWLU87d7i_CD4sJ_EFNTtzkHMIDqAXfUYJaz9_TKpQ/viewform?usp=sharing&ouid=103062752765685690684",
    eligibility: "Students pursuing Undergraduate or Diploma programmes from both professional and non-professional institutions. Participants must register as a team of exactly two members.",
    teamPolicy: "Each team must consist of exactly 2 participants. Each team must nominate one Team Leader during registration.",
    cappingInfo: "A maximum of 20 teams will be accepted on a First Come, First Served basis.",
    offlineReg: "Offline spot registration available 30 minutes before event begins if slots remain available.",
    prizeMoney: "1st Place: ₹2,000 + Certificate | 2nd Place: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 16 October 2026 | Time: 09:30 AM to 01:00 PM | Mode: Offline | Venue: C1, C2 Lab (DBCE)",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 20 confirmed teams)",
    facultyCoordinators: [
      { name: "Prof. Manisha Fal Dessai", role: "Faculty In-Charge", image: "faculty images/Manisha.webp" },
      { name: "Prof. Karishma Tuenkar", role: "Faculty In-Charge", image: "faculty images/Karishma.webp" }
    ],
    coordinators: [
      {
        name: "Devanshi Rami",
        role: "Student Coordinator",
        image: "student images/Devanshi.webp",
        phone: "+91 88064 32239"
      },
      {
        name: "Mansi Mishra",
        role: "Student Coordinator",
        image: "student images/Mansi Mishra SE.webp",
        phone: "+91 74998 42448"
      }
    ],
    judgingCriteria: [
      "Logic Accuracy: Evaluate whether the solution produces correct results for given problems, handles required cases, and follows stated logic without errors.",
      "Execution Time: Assess the time taken by the team to complete each task, giving appropriate consideration to speed while maintaining accuracy and completeness.",
      "Code Implementation: Evaluate structure, readability, efficiency, and organization of the code, avoiding unnecessary complexity.",
      "Problem-Solving: Assess clarity of approach, logical reasoning, understanding of the problem, and ability to develop an effective solution."
    ],
    rules: [
      {
        main: "General Rules and Regulations",
        sub: [
          "Each team must consist of exactly 2 participants.",
          "Each team must nominate one Team Leader during registration.",
          "Participants should have a basic understanding of aptitude, logical reasoning, data structures, algorithms, and C/C++ programming, with later rounds requiring more advanced problem-solving skills.",
          "A maximum of 20 teams will be accepted on a First Come, First Served basis.",
          "Teams must report to the designated venue 30 minutes before the event begins for registration and verification.",
          "Only paper will be provided by the organizers. Participants must bring their own writing materials such as pen or pencil.",
          "Participants must follow the instructions given by the organizers before and during each round.",
          "The competition consists of four major rounds, with eliminations taking place after each round.",
          "The official time recorded by the organizers will be considered wherever speed is part of the evaluation.",
          "Internet access is strictly prohibited during the competition.",
          "The use of external code, previously prepared solutions, online resources, notes, or any other material that provides an unfair advantage is strictly prohibited.",
          "All electronic and digital devices, including mobile phones, smart watches, tablets, and other personal electronic devices, must be kept outside the competition venue unless specifically permitted by the organizers.",
          "Any attempt to communicate with participants outside the team during a round, where communication is not permitted, will be treated as a violation of the rules.",
          "Any form of cheating or malpractice will result in immediate disqualification of the team.",
          "Participants are expected to maintain proper discipline and sportsmanship throughout the competition.",
          "Use of foul, vulgar, abusive, or offensive language towards participants, volunteers, organizers, or faculty members will lead to immediate disqualification.",
          "Once a solution is officially submitted, participants must follow the submission rules of that particular round. Resubmission or modification will not be permitted where the round rules specifically prohibit it.",
          "The decision of the Inspirus Coordinator and Faculty Coordinator regarding rule interpretation, disputes, tie-breakers, and final results will be considered final.",
          "Further instructions regarding individual rounds will be communicated by the organizers before the respective round begins."
        ]
      },
      {
        main: "Round 1: THE UNSCRAMBLE (30 Points — 30 Minutes)",
        sub: [
          "Task: Complete a preliminary test consisting of 30 questions covering Data Structures, Algorithms, and Basic Logical Aptitude.",
          "Duration: 30 Minutes.",
          "Scoring: 30 Points.",
          "Negative Marking: There is no negative marking. Unanswered questions receive 0 points.",
          "Evaluation: Teams are evaluated based on the correctness and speed of their answers.",
          "Tie-Breaker: Star questions will be used as tie-breakers when teams have the same score and submission time.",
          "Advancement: Teams will be shortlisted based on their performance for the next round."
        ]
      },
      {
        main: "Round 2-4",
        sub: [
          "Detailed rules for Rounds 2 to 4 will be announced by the coordinators on the spot.",
          "Participants are required to follow the instructions given by the coordinators.",
          "Any clarifications or rule-related decisions made by the coordinators on the spot will be final."
        ]
      },
      {
        main: "Tie-Breaker Rules",
        sub: [
          "If a tie occurs between teams under the applicable round rules, a Tie-Breaker Challenge will be conducted:",
          "1. Submission Time: The team that successfully completes the challenge first will be given preference.",
          "2. Tie-Breaker Challenge: If the teams remain tied, they will compete in a short logical/problem-solving challenge prepared by the organizers.",
          "3. Final Decision: The final decision regarding the tie-breaker and competition results will rest with the Inspirus Coordinator and Faculty Coordinator."
        ]
      }
    ]
  },
  {
    number: "04",
    slug: "technomorph",
    category: "technical",
    name: "Technomorph",
    tag: "UI/UX • FIGMA • PROTOTYPING",
    tagline: "Evolve like Iron Man’s armor.",
    description:
      "Create sleek and smart designs like Iron Man upgrades his suit, build apps and responsive websites that look amazing and work smoothly using Figma.",
    registerLink: "https://forms.gle/yHwCf5HrzWfE9KYu8",
    eligibility: "Open to Higher Secondary, Undergraduate, and Diploma students from professional and non-professional institutions.",
    teamPolicy: "A maximum of 2 members is allowed per team. Participants in the same team do not need to be from the same institution (Inter-institution teams are allowed and welcome).",
    cappingInfo: "Participation is limited to a maximum of 20 teams on a first-come, first-serve basis. There is no restriction on the number of teams from a single institution.",
    offlineReg: "Online registration preferred. Spot registration subject to available lab PCs.",
    prizeMoney: "1st: ₹2,000 + Certificate | 2nd: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 15 October 2026 | Time: 10:00 AM to 04:00 PM | Mode: Offline | Venue: C4, C9 Lab",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 20 confirmed teams)",
    facultyCoordinators: [
      { name: "Prof. Mithil Parab", role: "Faculty In-Charge", image: "faculty images/Mithil_parab.webp" },
      { name: "Prof. Duval Gomes", role: "Faculty In-Charge", image: "faculty images/duval.webp" }
    ],
    coordinators: [
      {
        name: "Rushank Natekar",
        role: "Student Coordinator",
        image: "student images/rushank.webp",
        phone: "+91 9022656976"
      },
      {
        name: "Pranita Govekar",
        role: "Student Coordinator",
        image: "student images/pranita.webp",
        phone: "+91 9284183785"
      }
    ],
    rules: [
      {
        main: "Prerequisites & Registration",
        sub: [
          "Eligibility: Open to Higher Secondary, Undergraduate, and Diploma students from professional and non-professional institutions.",
          "Prerequisites: A general familiarity with Figma is required.",
          "Team Composition: A maximum of 2 members is allowed per team. Participants in the same team do not need to be from the same institution.",
          "Registration: Registration will be conducted through an online form on a first-come, first-serve basis.",
          "The registration form will close at 5:00 PM on 10th October 2026, or earlier if the maximum number of 20 teams is reached.",
          "After successfully submitting the registration form, participants will receive a confirmation email on their registered email address.",
          "There is no restriction on the number of teams from a single institution. Inter-institution teams are allowed and are welcome."
        ]
      },
      {
        main: "Competition Flow",
        sub: [
          "Problem Statement Allocation: Problem statements will be revealed online at 9:00 AM on the event day. Teams must report to the designated Lab by 9:30 AM for the random draw to be assigned their final problem statement. Once a problem statement is picked, it cannot be changed.",
          "Design Phase: Participants will have 3.5 hours (10:00 AM to 1:30 PM) to complete their designs. The project's Figma link must be shared with the coordinators at the beginning of the event with 'view only' access.",
          "Presentation Phase: Judging and presentations will begin at the designated afternoon slot. Each team will have 5 minutes to present their design, covering their problem statement, design process, and a prototype demonstration. Using PowerPoint is optional."
        ]
      },
      {
        main: "Technical & Design Requirements",
        sub: [
          "Participants are required to use the free version of Figma.",
          "The design should be responsive.",
          "Submissions must include interactive prototypes and clear wireframes.",
          "The use of Figma plugins is permitted; however, the use of AI is strictly prohibited.",
          "All designs must be original. Teams found engaging in any form of plagiarism will be disqualified.",
          "Participants must use college PCs.",
          "Submission Details: Share the final Figma file with coordinators with 'view only' access before the deadline."
        ]
      },
      {
        main: "Judging Criteria",
        sub: [
          "Usability",
          "Navigation",
          "Visual Design and Consistency",
          "Creativity and Originality",
          "Relevance to the Problem Statement",
          "Presentation",
          "Feasibility",
          "Overall Impact"
        ]
      }
    ]
  },
  {
    number: "05",
    slug: "reel-it-feel-it",
    category: "non-technical",
    name: "Reel It Feel It",
    tag: "CONTENT • REEL MAKING • CREATIVITY",
    tagline: "Promote the INSPIRUS Event in Your Own Creative Way",
    description:
      "Promote the INSPIRUS Event in your own creative way! Take inspiration from existing trends, create engaging vertical reels, and showcase your storytelling and editing skills.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLScT7qaA62gVwQdWf-ER806uSqBltC3dgt90T8pbpu6xKEoZyA/viewform",
    eligibility: "The competition is open to College Students, Degree College Students, Professional Institutions, and Non-Professional Institutions.",
    teamPolicy: "2–3 teams per college/institute. Each team must have 1–2 official participants. If a team has 2 official participants, both must belong to the same institute. More people may appear in the reel, but only the registered 1–2 people will be considered official participants/team members.",
    cappingInfo: "2–3 teams per college/institute. Open participation across registered institutions.",
    offlineReg: "Online entry submission. Participants post reel on Instagram and collaborate with @inspirus.reels by 8th October 2026, 11:59 PM.",
    prizeMoney: "1st Place: ₹2,000 + Certificate | 2nd Place: ₹1,000 + Certificate",
    dateTimeVenue: "Reel Submission Deadline: 8th October 2026 at 11:59 PM | Mode: Online | Platform: Instagram (@inspirus.reels)",
    registrationDeadline: "6th October 2026 at 05:00 PM",
    facultyCoordinators: [
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge", image: "faculty images/Floyd.webp" }
    ],
    coordinators: [
      {
        name: "Pavitra Nayak",
        role: "Student Coordinator",
        image: "student images/Pavitra nayak.webp",
        phone: "+91 9529231516"
      },
      {
        name: "Prasanna Pednekar",
        role: "Student Coordinator",
        image: "student images/Prasanna Pednekar_.webp",
        phone: "+91 9404427450"
      }
    ],
    rules: [
      {
        main: "Important Deadlines & General Rules",
        sub: [
          "Registration Deadline: Online registration strictly closes on 6th October 2026 at 5:00 PM.",
          "Submission Deadline: Final reel must be published and submitted on or before 8th October 2026 at 11:59 PM. Late submissions will strictly not be entertained.",
          "Participants can take inspiration from existing trends online, but copying or plagiarizing content is strictly prohibited and will lead to disqualification.",
          "Any derogatory remarks, name-calling, or regional slang targeting any person or community are strictly prohibited.",
          "The use of offensive or inappropriate language, gestures, or actions will lead to immediate disqualification.",
          "The video must not exceed 1 minute.",
          "Each team can submit only one reel. Multiple entries from the same team will lead to disqualification.",
          "The reel must be made in vertical format (9:16 aspect ratio preferred).",
          "Each team can have 1 or 2 official participants. If there are 2, both must be from the same institute. Additional people may appear in the reel, but they will not be considered official team members.",
          "Participants may use commonly used social media platforms such as Instagram, Facebook, X (Twitter), LinkedIn, WhatsApp, and Snapchat."
        ]
      },
      {
        main: "Theme",
        sub: [
          "“Promote the INSPIRUS Event in Your Own Creative Way”"
        ]
      },
      {
        main: "Procedure & Submission",
        sub: [
          "Complete the online registration form on or before 6th October 2026 at 5:00 PM.",
          "After successful registration, create your reel and post it on your Instagram account (after adding the entry details template).",
          "Add @inspirus.reels as a collaborator, include the entry number and participant name in the caption along with #inspirus2k26, and tag @inspirus.reels on or before 8th October 2026, 11:59 PM.",
          "Entries will be judged based on the criteria mentioned."
        ]
      },
      {
        main: "Judging Criteria (Total: 100 Points)",
        sub: [
          "Creativity & Innovation – 20 points",
          "Relevance to Theme – 15 points",
          "Technical Quality (Editing, Audio & Visuals) – 15 points",
          "Originality – 15 points",
          "Presentation & Aesthetics – 10 points",
          "Clarity of Message – 10 points",
          "Impact – 5 points"
        ]
      }
    ]
  },
  {
    number: "06",
    slug: "prompt-wars",
    category: "technical",
    name: "Prompt Wars",
    tag: "AI • PROMPT ENGINEERING",
    tagline: "Prompt. Engineer. Excel.",
    description:
      "Prompt Wars is an exciting AI and Prompt Engineering competition that challenges participants to think creatively, communicate effectively with AI, and craft powerful prompts under time constraints.",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSet3O1lWiFE2OxOAG9GdA64zEa9axSZhxNmuk2pg5D7-sT4zA/viewform?usp=publish-editor",
    eligibility: "College Students (Higher Secondary, Undergraduate, and Diploma students from professional and non-professional institutions).",
    teamPolicy: "2 participants per team. Cross college teams are allowed.",
    cappingInfo: "Only the first 20 teams to register for the event will be eligible to participate on a first-come, first-served basis.",
    offlineReg: "Spot registration permitted at venue 30 minutes before event if seats remain available.",
    prizeMoney: "1st: ₹2,000 + Certificate | 2nd: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 16 October 2026 | Time: 09:30 AM to 01:00 PM | Mode: Offline | Venue: C5, C6 Lab (DBCE)",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 20 confirmed teams)",
    facultyCoordinators: [
      { name: "Prof. Amey Kerkar", role: "Faculty In-Charge", image: "faculty images/Amey_Kerkar.webp" },
      { name: "Dr. Norman Dias", role: "Faculty In-Charge", image: "faculty images/Norman.webp" }
    ],
    coordinators: [
      {
        name: "Shanaia Martis",
        role: "Student Coordinator",
        image: "student images/Shanaia Martis.webp",
        phone: "+91 9356966736"
      },
      {
        name: "Aditya Bingekar",
        role: "Student Coordinator",
        image: "student images/aditya.webp",
        phone: "+91 9356950853"
      }
    ],
    rules: [
      {
        main: "Pre-requisites & Team Eligibility",
        sub: [
          "Pre-requisites: Familiarity with commonly used AI tools.",
          "Team Members: 2 participants per team. Cross college teams are allowed.",
          "Capping: Only the first 20 teams to register for the event will be eligible to participate."
        ]
      },
      {
        main: "General Instructions",
        sub: [
          "Each team must consist of 2 participants. Cross college teams are allowed.",
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
          "The organizers' decision regarding evaluation and elimination will be final."
        ]
      },
      {
        main: "Round 1",
        sub: [
          "All participating teams will compete in an initial AI challenge designed to test their creativity, prompt-engineering skills, and ability to follow given requirements.",
          "Top 10 teams will qualify for the next round."
        ]
      },
      {
        main: "Round 2",
        sub: [
          "Teams will face two surprise mini-challenges.",
          "Based on their combined scores in both challenges, the top 5 teams will qualify for the next round."
        ]
      },
      {
        main: "Round 3",
        sub: [
          "The qualifying teams will compete in a final AI challenge.",
          "In the event of a tie, a tie-breaker may be conducted as decided by the organizers."
        ]
      }
    ]
  },
  {
    number: "07",
    slug: "exquizite",
    category: "technical",
    name: "ExQuizite",
    tag: "QUIZ • GENERAL KNOWLEDGE • TRIVIA",
    tagline: "Knowledge is the key!! Quiz is the game!! ExQuizite is the way you can get fame!!",
    description:
      "Sharpen your minds, put your knowledge to the test, and compete for the title across General Knowledge, Science, Technology, History, Geography, Entertainment, Sports, and Current Affairs!",
    registerLink: "https://docs.google.com/forms/d/e/1FAIpQLSfeS-w4UhS4nMvHKKFlaxuhF5x-600lsq93KE76veEQid8FCA/viewform?usp=publish-editor",
    eligibility: "Undergraduate and Diploma Students from professional and non-professional institutions.",
    teamPolicy: "2 participants per team. All team members must be from the same college. No intercollege teams are permitted.",
    cappingInfo: "Maximum 45 participating teams (40 regular online registrations + up to 5 on-spot registrations). Limit of 6 teams per college on FCFS basis.",
    offlineReg: "On-spot registrations: Maximum 5 additional teams on the spot (provided the 6-team-per-college limit is not exceeded).",
    prizeMoney: "1st Place: ₹2,000 + Certificate | 2nd Place: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 15 October 2026 | Time: 11:30 AM to 05:00 PM | Mode: Offline | Venue: Preliminary Round: C19 Lab (1st Floor) | Main Round: Seminar Hall 1 (1st Floor)",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 40 confirmed regular teams)",
    facultyCoordinators: [
      { name: "Prof. Sweta Morajkar", role: "Faculty In-Charge", image: "faculty images/Sweta.webp" },
      { name: "Prof. Christina Barretto", role: "Faculty In-Charge", image: "faculty images/Christina.webp" }
    ],
    coordinators: [
      {
        name: "Vedhant Sawant",
        role: "Student Coordinator",
        image: "student images/vedhant_.webp",
        phone: "+91 9373594972"
      },
      {
        name: "Ishika Sawardekar",
        role: "Student Coordinator",
        image: "student images/Ishika_.webp",
        phone: "+91 9284196477"
      }
    ],
    rules: [
      {
        main: "Team Composition & Registration Rules",
        sub: [
          "Team Composition: All team members must be from the same college. No intercollege teams are permitted. If a team is found to have members from different colleges, they will be disqualified.",
          "Replacement Policy: Replacement of any participant after registration is not allowed. However, in the event of an unforeseen circumstance (e.g., illness), a replacement may be permitted at the sole discretion of the organizers, provided the request is made at least 1 hour before the commencement of the Preliminary Round (i.e., by 10:30 am). The organizers reserve the right to approve or reject any replacement request.",
          "Registration Limits: There is a limit of 6 teams per college, determined on a first-come-first-serve basis. This limit applies to both regular and on-spot registrations.",
          "Maximum Teams: A maximum of 40 teams will be allowed to register through the regular online registration process. On-spot registrations: A maximum of 5 additional teams may be registered on the spot (provided the 6-team-per-college limit is not exceeded). Maximum participating teams: 45."
        ]
      },
      {
        main: "Theme, Topics & Preliminary Rounds",
        sub: [
          "Theme and Topics: The quiz will be general in nature, and questions may be asked from any area or subject (General Knowledge, Science, Technology, History, Geography, Entertainment, Sports, Current Affairs, etc.). There are no fixed themes or topic restrictions.",
          "Preliminary Rounds: There will be two Preliminary Rounds before the Main Round.",
          "Preliminary Round 1: All 45 registered teams will participate in Preliminary Round 1. Based on the points scored, the top 20 teams will advance to Preliminary Round 2.",
          "Preliminary Round 2: Based on the points scored in Preliminary Round 2, exactly 5 teams will qualify for the Main Round.",
          "The format, scoring system, and point-based selection/elimination criteria for each round will be announced before the start of the respective round."
        ]
      },
      {
        main: "Main Rounds & Conduct Rules",
        sub: [
          "Main Rounds: The top 5 teams qualifying from preliminary round 2 will advance to the main round, where the final 2 winning teams will be determined.",
          "Round Rules: The rules for each round will be clearly announced before the round begins. Teams are responsible for understanding the rules; they may ask for clarification before the round starts. No objections will be entertained once the round has begun.",
          "Team Withdrawal: If a team leaves the quiz midway, they will not be allowed to compete further.",
          "Decision of the Quiz Masters: The decision of the quiz masters will be final and not subject to change. However, in the event of a significant error identified after a decision, the matter will be reviewed, and necessary corrections will be made at the discretion of the organizers."
        ]
      },
      {
        main: "Tie-Breaker Rules",
        sub: [
          "After the completion of the 5 Main Rounds, if there is a tie for 1st and 2nd place or 2nd and 3rd place, a tie-breaker round will be conducted.",
          "The tie-breaker procedure and rules will be announced by the organizers at the time of the tie-breaker.",
          "If the tie remains unresolved after the tie-breaker, the final position will be determined through a fair and impartial random selection procedure conducted by the organizers. The decision resulting from this procedure will be final and binding."
        ]
      }
    ]
  },
  {
    number: "08",
    slug: "code-beyond-sight",
    category: "technical",
    name: "Code Beyond Sight",
    tag: "C/C++ • BLIND CODING • VS CODE",
    tagline: "Type Blind. Code Pure. Master Logic.",
    description:
      "Code Beyond Sight is a team-based programming competition that challenges participants to test their coding skills, memory, logic, and typing accuracy. Across 3 rounds, participants will solve coding, debugging, and problem-solving challenges using C/C++ in VS Code. During the blind-coding phases, the monitor will be switched OFF, requiring participants to code without viewing the screen and rely on their knowledge and memory.",
    registerLink: "https://docs.google.com/forms/d/1xjlQdqf8DKt7OQNqwnZRKZPhk4lXNauxUPFDIkvYz-g/edit",
    eligibility: "Open to Undergraduate, Diploma and Higher Secondary students from professional and non-professional institutions.",
    teamPolicy: "Teams consist of 2 partners. All team members must be from the same college (interdepartmental teams allowed). There is no restriction on the number of teams per college.",
    cappingInfo: "Participation is limited to a maximum of 20 teams on a first-come, first-serve basis. An additional 5 teams will be placed on the waiting list.",
    offlineReg: "Spot registration available at venue 30 minutes prior to event start, subject to slot availability.",
    prizeMoney: "1st Place: ₹2,000 + Certificate | 2nd Place: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 15 October 2026 | Time: 11:00 AM to 03:00 PM | Mode: Offline | Venue: C5, C6 Lab (DBCE)",
    registrationDeadline: "10th October 2026 at 05:00 PM (or upon 20 confirmed teams)",
    facultyCoordinators: [
      { name: "Dr. Amrita Naik", role: "Faculty In-Charge", image: "faculty images/Amrita_Naik.webp" },
      { name: "Prof. Vidhya N.", role: "Faculty In-Charge" }
    ],
    coordinators: [
      {
        name: "Parima Tendulkar",
        role: "Student Coordinator",
        image: "student images/Parima Tendulkar (TE coordinator).webp",
        phone: "+91 9404930645"
      },
      {
        name: "Meera Anthony",
        role: "Student Coordinator",
        image: "student images/Meera Antony.webp",
        phone: "+91 70387 96120"
      }
    ],
    rules: [
      {
        main: "General Rules & Environment",
        sub: [
          "Language Supported: C and C++.",
          "Environment: VS Code and MinGW.",
          "Prohibited Items: No cellphones, no chits/written materials, no pendrives, no AI tools or digital assistants.",
          "Stationery: Paper and pen will be provided.",
          "Teams must report to the designated lab 30 minutes before the event starts.",
          "The rules for each round will be clearly announced before the round begins. Teams are responsible for understanding the rules; they may ask for clarification before the round starts. No objections will be entertained once the round has begun.",
          "If a team leaves the rounds midway, they will not be allowed to compete further.",
          "Any foul/vulgar/offensive language will lead to immediate disqualification."
        ]
      },
      {
        main: "Team Composition & Registration",
        sub: [
          "Teams consist of 2 partners. All team members must be from the same college (interdepartmental teams allowed).",
          "There is no restriction on the number of teams per college.",
          "Participation is limited to a maximum of 20 teams on a first-come, first-serve basis. An additional 5 teams will be placed on the waiting list.",
          "If a confirmed team wishes to withdraw from the competition, they must inform the organizers on or before 10 October 2026. This will allow the organizers to offer the vacant slot to a team from the waiting list.",
          "After successfully submitting the registration form, participants will receive a confirmation email on their registered email address.",
          "Replacement Policy: Replacement of any participant after registration is not allowed. However, in the event of an unforeseen circumstance, a replacement may be permitted at the sole discretion of the organizers, provided the request is made at least 1 Day before the commencement of Round 1."
        ]
      },
      {
        main: "Competition Rounds (Total Time: 3 Hours)",
        sub: [
          "Round 1: A foundational coding challenge testing core algorithmic logic and technical execution under strict time limits.",
          "Round 2: A debugging and error-rectification sprint where participants must identify and fix flaws in provided code snippets.",
          "Round 3: An advanced collaborative challenge testing teamwork, synchronization, and problem-solving continuity.",
          "Progression: Round 1 to Round 2 selects top 8 teams out of 20; Round 2 to Main Round selects top 4 teams; Round 3 determines final 2 winners."
        ]
      },
      {
        main: "Scoring, Evaluation & Tie-Breakers",
        sub: [
          "Point System: Teams will compete for points based on functional logic, syntactic correctness, and code execution. Exact point values will be announced by coordinators right before the start of each round.",
          "Tie-Breaker: In the event of a points tie, completion time, code cleanliness, and output correctness will determine the winner.",
          "Final Decision: The final position will be determined through a fair and impartial selection procedure conducted by the organizers. The decision resulting from this procedure will be final and binding."
        ]
      }
    ]
  },
  {
    number: "09",
    slug: "veil-of-secrets",
    category: "non-technical",
    name: "Veil of Secrets",
    tag: "MYSTERY • LOGIC • ESCAPE ROOM",
    tagline: "Some mysteries demand heroes.",
    description:
      "Embark on a mystery quest combining logical aptitude puzzles, a campus-wide treasure hunt, and a fast-paced escape room experience.",
    registerLink: "https://forms.gle/cDJRV8aHxJZU7U1b9",
    eligibility: "Students from higher secondary schools, undergraduate and diploma holders from professional and non-professional institutions.",
    teamPolicy: "3 Members per team. All team members must be from the same college. No intercollege teams are permitted. Registration form should be filled by team leaders only once.",
    cappingInfo: "Maximum 30 teams through online registration on a first-come, first-served basis. Limit of 5 teams per college.",
    offlineReg: "Online registration mandatory. No spot/offline registration.",
    prizeMoney: "1st: ₹2,000 + Certificate | 2nd: ₹1,000 + Certificate",
    dateTimeVenue: "Date: 16 October 2026 | Time: 09:30 AM to 01:00 PM | Mode: Offline | Venue: C3, C4 Lab (DBCE)",
    registrationDeadline: "10th October 2026 at 05:00 PM",
    facultyCoordinators: [
      { name: "Prof. Floyd Fernandes", role: "Faculty In-Charge", image: "faculty images/Floyd.webp" },
      { name: "Prof. Merwyn D'Souza", role: "Faculty In-Charge", image: "faculty images/Marwyn_Dsouza.webp" }
    ],
    coordinators: [
      {
        name: "Debbie Mascarenhas",
        role: "Student Coordinator",
        image: "student images/Debbie Fatima Mascarenhas.webp",
        phone: "+91 9209231065"
      },
      {
        name: "Amogh Tendulkar",
        role: "Student Coordinator",
        image: "student images/Amogh Ulhas Tendulkar_.webp",
        phone: "+91 9923515005"
      }
    ],
    rules: [
      {
        main: "Team Composition & Registration Rules",
        sub: [
          "Team Composition: All team members must be from the same college. No intercollege teams are permitted. If a team is found to have members from different colleges, they will be disqualified.",
          "Registration Limits: There is a limit of 5 teams per college, determined on a first-come-first-serve basis.",
          "Maximum Teams: A maximum of 30 teams will be allowed to register through the regular online registration process.",
          "Registration will be through ONLINE form.",
          "The registration form should be filled by team leaders only once. Any team submitting more than one form will be disqualified.",
          "Only team leaders will be added to the WhatsApp group so make sure the contact details are correct."
        ]
      },
      {
        main: "General Instructions",
        sub: [
          "All team members should report to the venue 15 minutes before the start of the event. Late arrivals may result in a reduced playtime.",
          "The event consists of 2 rounds.",
          "All team members should carry their valid institute ID cards.",
          "The use of personal tools, such as cell phones, cameras, or any other gadgets, is strictly prohibited during the game.",
          "In case of discrepancy, decisions made by the coordinators will be final."
        ]
      },
      {
        main: "Round 1: Aptitude & Puzzle Solving (60 Minutes)",
        sub: [
          "First round will be a combination of aptitude (logical reasoning) and puzzle solving.",
          "The duration of this round will be 60 minutes (1 hour).",
          "Teams will be selected for round 2 based upon the maximum scores and minimum time in which the puzzles were solved.",
          "Out of the maximum participation, only 8 to 9 teams will qualify for the final round.",
          "If there is a tie between two teams, the team that used less time to complete the tasks will be given priority for qualification.",
          "The list of teams that are qualified for the next round will be floated on the WhatsApp group."
        ]
      },
      {
        main: "Round 2: Treasure Hunt & Escape Room",
        sub: [
          "The final round consists of treasure hunt and escape room.",
          "Teams must solve a series of riddles and perform tasks to find the hidden clues.",
          "Each clue leads to the next puzzle or location.",
          "Teams are allowed to communicate freely among themselves. However, no communication with other teams or external help is permitted.",
          "The teams that collect all the clues first (first come first serve basis) will get access to enter the escape room.",
          "In the escape room, the team will get 10 - 12 minutes to perform fun and interesting activities."
        ]
      },
      {
        main: "Judgment Criteria",
        sub: [
          "The judging will be based on the scores and time taken by the teams.",
          "In case of discrepancy, decisions made by the coordinators will be final."
        ]
      }
    ]
  },
  {
    number: "10",
    slug: "framed",
    category: "non-technical",
    name: "Framed",
    tag: "PHOTOGRAPHY • STORY • CREATIVITY",
    tagline: "Every illusion has a mastermind.",
    description:
      "Capture moments full of story and magic through your lens. Showcase your perspective, narrative depth, and creative visual impact in this online photography competition.",
    registerLink: "https://forms.gle/99FPnMgKB2m1QDz46",
    eligibility: "Students from higher secondary schools, undergraduate and diploma holders from professional and non-professional institutions.",
    teamPolicy: "1 participant (Solo entry).",
    cappingInfo: "Open participation on FCFS basis. Online submission.",
    offlineReg: "Online Submission event via Google Form.",
    prizeMoney: "1st: ₹1,000 + Certificate | 2nd: ₹500 + Certificate",
    dateTimeVenue: "Date: 15 & 16 October 2026 | Mode: Online Mode | Venue: Online Submission (Google Form)",
    registrationDeadline: "10th October 2026 at 05:00 PM",
    facultyCoordinators: [
      { name: "Prof. Duval Gomes", role: "Faculty In-Charge", image: "faculty images/duval.webp" }
    ],
    coordinators: [
      {
        name: "Aryan Adelker",
        role: "Student Coordinator",
        image: "student images/Aryan Adelker.webp",
        phone: "+91 8788217993"
      },
      {
        name: "Arnav Dessai",
        role: "Student Coordinator",
        image: "student images/arnav.webp",
        phone: "+91 9356738893"
      }
    ],
    rules: [
      {
        main: "Photography Guidelines & Submission",
        sub: [
          "Participants must submit a total of 1 (one) image, where the image completely follows the criteria mentioned.",
          "Participants should submit photos in .jpeg, .jpg, or .png format.",
          "Participants are allowed to use Mobile phones and DSLRs. Use of drones is not allowed.",
          "Photos should be taken between the given time period.",
          "All the details of the photo will be checked. Photos should include all the original metadata.",
          "Submit your image files renamed as 'serialno_img' (e.g., 7_img).",
          "Participants are required to provide a unique caption for the images submitted (1 sentence only, 10 - 15 words) and can describe the image (250 words) if they feel their picture tells a story.",
          "The topics for the event will be shared in the WhatsApp group on the night of the event. Some topics may require you to be on campus to take photos (this is optional). You only need to submit one photo, based on any one of the given topics.",
          "Submissions will be via a Google form, which will be shared in the designated WhatsApp group. The submission period will open and close as announced in the group."
        ]
      },
      {
        main: "Editing, AI & Plagiarism Rules",
        sub: [
          "Basic editing such as color correction, brightness & contrast adjustments, sharpening & noise reduction, and cropping of the photo is allowed.",
          "Advanced editing used to create an illusion, manipulation, filters and adding/removing of significant elements, and watermarks within the frame are prohibited.",
          "Participants found submitting pictures taken from the internet will directly be disqualified.",
          "In case we confirm any instance of a participant copying someone else's pictures and submitting them as their own, or otherwise cheating in the competition, they will be directly disqualified.",
          "Use of AI-generated images or AI-based tools for significant alteration, generation, addition, removal, or manipulation of elements within the photograph is strictly prohibited. Any participant found violating this rule will be directly disqualified.",
          "Participants must obtain prior permission before entering any restricted or private campus area for photography.",
          "Consent must be obtained when an identifiable person is the primary subject of the photograph; however, consent is not required for individuals who appear incidentally in the background of general campus scenes.",
          "Participants must respect campus rules, privacy, and instructions from authorized personnel at all times.",
          "Exceeding the submission time limit will lead to disqualification.",
          "Violation of any of the instructions will lead to disqualification."
        ]
      },
      {
        main: "Judging Criteria",
        sub: [
          "Creativity/Originality",
          "Portrayal of topic",
          "Narrative depth (Story within the picture)",
          "Aesthetic appeal/Visual impact"
        ]
      }
    ]
  }
];

// ─── SCHEDULE DATA ────────────────────────────────────────────────────────────
const scheduleData = {
  timeSlots: [
    "9:00am–9:30am",
    "9:30am–10:00am",
    "10:00am–11:00am",
    "11:00am–12:00pm",
    "12:00pm–1:00pm",
    "1:00pm–2:00pm",
    "2:00pm–3:00pm",
    "3:00pm–4:00pm",
    "3:30pm–5:00pm"
  ],
  days: [
    {
      label: "15TH OCT",
      rows: [
        {
          location: "AUDITORIUM (2nd FLOOR)",
          slots: [
            { colStart: 1, colspan: 1, label: "INAUGURATION (9:30 AM – 10:00 AM)", color: "teal" }
          ]
        },
        {
          location: "AUDITORIUM (2nd FLOOR)",
          slots: [
            { colStart: 0, colspan: 9, label: "INSPIRATHON (24 HOURS HACKATHON)", color: "yellow" }
          ]
        },
        {
          location: "SE CIVIL CLASSROOM",
          slots: [
            { colStart: 0, colspan: 4, label: "REGISTRATION DESK", color: "pink" }
          ]
        },
        {
          location: "ONLINE",
          slots: [
            { colStart: 0, colspan: 9, label: "REEL IT FEEL IT (ONLINE SUBMISSION ENDS 8TH OCT, 11:59 PM)", color: "purple" }
          ]
        },
        {
          location: "ONLINE",
          slots: [
            { colStart: 0, colspan: 9, label: "FRAMED (ONLINE SUBMISSION)", color: "purple" }
          ]
        },
        {
          location: "C4, C9 LAB",
          slots: [
            { colStart: 2, colspan: 6, label: "TECHNOMORPH (UI/UX DESIGNING)", color: "yellow" }
          ]
        },
        {
          location: "C5, C6 LAB",
          slots: [
            { colStart: 3, colspan: 4, label: "CODE BEYOND SIGHT (BLIND CODING)", color: "yellow" }
          ]
        },
        {
          location: "C2, C3 LAB",
          slots: [
            { colStart: 4, colspan: 4, label: "CODE CLASH (CODE FIESTA)", color: "yellow" }
          ]
        },
        {
          location: "C19 LAB & SEMINAR HALL 1 (1st FLOOR)",
          slots: [
            { colStart: 3, colspan: 6, label: "EXQUIZITE (QUIZ)", color: "yellow" }
          ]
        }
      ]
    },
    {
      label: "16TH OCT",
      rows: [
        {
          location: "SE CIVIL CLASSROOM",
          slots: [
            { colStart: 0, colspan: 2, label: "REGISTRATION DESK", color: "pink" }
          ]
        },
        {
          location: "AUDITORIUM (2nd FLOOR)",
          slots: [
            { colStart: 0, colspan: 5, label: "INSPIRATHON (CONCLUDES 1:00 PM WITH JUDGMENT)", color: "yellow" }
          ]
        },
        {
          location: "C1, C2 LAB",
          slots: [
            { colStart: 1, colspan: 4, label: "RETRIEVAL SAGES (LOGICAL REASONING & CODING)", color: "yellow" }
          ]
        },
        {
          location: "C3, C4 LAB",
          slots: [
            { colStart: 1, colspan: 4, label: "VEIL OF SECRETS (ESCAPE ROOM)", color: "yellow" }
          ]
        },
        {
          location: "C5, C6 LAB",
          slots: [
            { colStart: 1, colspan: 4, label: "PROMPT WARS (AI ENGINEERING)", color: "yellow" }
          ]
        },
        {
          location: "ONLINE",
          slots: [
            { colStart: 0, colspan: 5, label: "FRAMED (ONLINE SUBMISSION)", color: "purple" }
          ]
        },
        {
          location: "AUDITORIUM (2nd FLOOR)",
          slots: [
            { colStart: 8, colspan: 1, label: "VALEDICTORY FUNCTION (3:30 PM – 5:00 PM)", color: "teal" }
          ]
        }
      ]
    }
  ]
};

const scheduleTimeline = [
  {
    dayId: "day1",
    dayLabel: "15TH OCT",
    dayTitle: "Day 1 — Thursday, 15th October 2026",
    events: [
      {
        time: "09:00 AM – 01:00 PM",
        title: "Registration Desk",
        venue: "SE Civil Classroom",
        color: "pink",
        category: "Registration Desk",
        slug: null
      },
      {
        time: "09:00 AM (Overnight to 16th Oct, 1:00 PM)",
        title: "Inspirathon (24 Hours Hackathon)",
        venue: "Auditorium (2nd Floor)",
        color: "yellow",
        category: "Technical Competition",
        slug: "inspirathon"
      },
      {
        time: "09:30 AM – 10:00 AM",
        title: "Grand Inauguration Ceremony",
        venue: "Auditorium (2nd Floor)",
        color: "teal",
        category: "Inauguration",
        slug: null
      },
      {
        time: "10:00 AM – 04:00 PM",
        title: "Technomorph (UI/UX Designing)",
        venue: "C4, C9 Lab",
        color: "yellow",
        category: "Technical Competition",
        slug: "technomorph"
      },
      {
        time: "11:00 AM – 03:00 PM",
        title: "Code Beyond Sight (Blind Coding)",
        venue: "C5, C6 Lab (DBCE)",
        color: "yellow",
        category: "Technical Competition",
        slug: "code-beyond-sight"
      },
      {
        time: "11:30 AM – 05:00 PM",
        title: "ExQuizite (Quiz Competition)",
        venue: "Preliminary: C19 Lab (1st Floor) | Main: Seminar Hall 1 (1st Floor)",
        color: "yellow",
        category: "Technical Competition",
        slug: "exquizite"
      },
      {
        time: "12:00 PM – 04:00 PM",
        title: "Code Clash (Code Fiesta)",
        venue: "C2, C3 Lab (2nd Floor)",
        color: "yellow",
        category: "Technical Competition",
        slug: "code-clash"
      },
      {
        time: "Submission Ended 8th Oct, 11:59 PM",
        title: "Reel It Feel It (Instagram Reel Making)",
        venue: "Online (@inspirus.reels)",
        color: "purple",
        category: "Non-Technical (Online)",
        slug: "reel-it-feel-it"
      },
      {
        time: "Online Submission",
        title: "Framed (Photography Competition)",
        venue: "Online Submission (Google Form)",
        color: "purple",
        category: "Non-Technical (Online)",
        slug: "framed"
      }
    ]
  },
  {
    dayId: "day2",
    dayLabel: "16TH OCT",
    dayTitle: "Day 2 — Friday, 16th October 2026",
    events: [
      {
        time: "09:00 AM – 11:00 AM",
        title: "Registration Desk",
        venue: "SE Civil Classroom",
        color: "pink",
        category: "Registration Desk",
        slug: null
      },
      {
        time: "09:00 AM – 01:00 PM",
        title: "Inspirathon (Hackathon Demos & Final Judgment)",
        venue: "Auditorium (2nd Floor)",
        color: "yellow",
        category: "Technical Competition",
        slug: "inspirathon"
      },
      {
        time: "09:30 AM – 01:00 PM",
        title: "Retrieval Sages (Logical Reasoning & Coding)",
        venue: "C1, C2 Lab (DBCE)",
        color: "yellow",
        category: "Technical Competition",
        slug: "retrieval-sages"
      },
      {
        time: "09:30 AM – 01:00 PM",
        title: "Veil of Secrets (Escape Room & Mystery Hunt)",
        venue: "C3, C4 Lab (DBCE)",
        color: "yellow",
        category: "Non-Technical Competition",
        slug: "veil-of-secrets"
      },
      {
        time: "09:30 AM – 01:00 PM",
        title: "Prompt Wars (AI Engineering)",
        venue: "C5, C6 Lab (DBCE)",
        color: "yellow",
        category: "Technical Competition",
        slug: "prompt-wars"
      },
      {
        time: "Online Submission Review",
        title: "Framed (Photography Competition)",
        venue: "Online Submission (Google Form)",
        color: "purple",
        category: "Non-Technical (Online)",
        slug: "framed"
      },
      {
        time: "03:30 PM – 05:00 PM",
        title: "Grand Valedictory Function & Prize Distribution",
        venue: "Auditorium (2nd Floor)",
        color: "teal",
        category: "Valedictory Ceremony",
        slug: null
      }
    ]
  }
];

const COLOR_MAP = {
  teal: { bg: "#00897b", text: "#fff", label: "Inauguration / Valedictory" },
  yellow: { bg: "#f9a825", text: "#111", label: "Competitions" },
  purple: { bg: "#7e57c2", text: "#fff", label: "Reel Making & Framed Online" },
  pink: { bg: "#d4739a", text: "#fff", label: "Registration Desk" },
};

function downloadScheduleImage() {
  const width = 2400;
  const height = 1750;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  // Background gradient
  const bgGrad = ctx.createLinearGradient(0, 0, width, height);
  bgGrad.addColorStop(0, "#08090d");
  bgGrad.addColorStop(0.5, "#0e1017");
  bgGrad.addColorStop(1, "#050608");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, width, height);

  // Background Grid Lines
  ctx.strokeStyle = "rgba(0, 229, 204, 0.04)";
  ctx.lineWidth = 1;
  const gridSize = 60;
  for (let x = 0; x < width; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 0; y < height; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  // Outer Border & Accents
  ctx.strokeStyle = "rgba(0, 229, 204, 0.4)";
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, width - 60, height - 60);

  ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 40, width - 80, height - 80);

  // Corner tech ticks
  const corners = [
    [40, 40],
    [width - 40, 40],
    [40, height - 40],
    [width - 40, height - 40]
  ];
  corners.forEach(([cx, cy]) => {
    ctx.strokeStyle = "#00e5cc";
    ctx.lineWidth = 5;
    ctx.beginPath();
    const len = 30;
    const dx = cx < width / 2 ? 1 : -1;
    const dy = cy < height / 2 ? 1 : -1;
    ctx.moveTo(cx, cy + dy * len);
    ctx.lineTo(cx, cy);
    ctx.lineTo(cx + dx * len, cy);
    ctx.stroke();
  });

  // Header
  ctx.textAlign = "center";
  ctx.font = "bold 22px 'Courier New', monospace";
  ctx.fillStyle = "#00e5cc";
  ctx.fillText("DON BOSCO COLLEGE OF ENGINEERING • DEPT. OF COMPUTER ENGINEERING", width / 2, 90);

  ctx.font = "900 60px Arial, sans-serif";
  const titleGrad = ctx.createLinearGradient(width / 2 - 400, 110, width / 2 + 400, 170);
  titleGrad.addColorStop(0, "#ffffff");
  titleGrad.addColorStop(0.7, "#00e5cc");
  titleGrad.addColorStop(1, "#38bdf8");
  ctx.fillStyle = titleGrad;
  ctx.fillText("INSPIRUS 2K26 — FESTIVAL SCHEDULE", width / 2, 160);

  ctx.font = "600 22px 'Courier New', monospace";
  ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
  ctx.fillText("OFFICIAL 2-DAY EVENT & VENUE DIRECTORY // 15TH & 16TH OCTOBER 2026", width / 2, 202);

  // Columns for Day 1 and Day 2
  const colWidth = 1080;
  const colTop = 236;
  const colHeight = 1360;

  scheduleTimeline.forEach((group, gIdx) => {
    const colX = gIdx === 0 ? 80 : 1240;

    // Group Background Card
    ctx.fillStyle = "rgba(18, 20, 28, 0.85)";
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(colX, colTop, colWidth, colHeight, 16);
    ctx.fill();
    ctx.stroke();

    // Group Header Banner
    const isDay1 = gIdx === 0;
    const bannerGrad = ctx.createLinearGradient(colX, colTop, colX + colWidth, colTop);
    if (isDay1) {
      bannerGrad.addColorStop(0, "rgba(0, 229, 204, 0.25)");
      bannerGrad.addColorStop(1, "rgba(0, 137, 123, 0.05)");
    } else {
      bannerGrad.addColorStop(0, "rgba(249, 168, 37, 0.25)");
      bannerGrad.addColorStop(1, "rgba(212, 115, 154, 0.05)");
    }
    ctx.fillStyle = bannerGrad;
    ctx.beginPath();
    ctx.roundRect(colX, colTop, colWidth, 75, [16, 16, 0, 0]);
    ctx.fill();

    // Day Header Text
    ctx.textAlign = "left";
    ctx.font = "900 28px Arial, sans-serif";
    ctx.fillStyle = isDay1 ? "#00e5cc" : "#f9a825";
    ctx.fillText(group.dayLabel, colX + 30, colTop + 48);

    ctx.font = "700 20px 'Courier New', monospace";
    ctx.fillStyle = "#ffffff";
    ctx.fillText(group.dayTitle.split(" — ")[1] || group.dayTitle, colX + 190, colTop + 46);

    // Event Items
    let cardY = colTop + 95;
    const cardHeight = gIdx === 0 ? 122 : 155;
    const gap = 14;

    group.events.forEach((ev) => {
      const colorKey = ev.color || "yellow";
      const colorInfo = COLOR_MAP[colorKey] || COLOR_MAP.yellow;

      // Event Card Box
      ctx.fillStyle = "rgba(26, 29, 40, 0.9)";
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(colX + 24, cardY, colWidth - 48, cardHeight, 10);
      ctx.fill();
      ctx.stroke();

      // Left Accent Strip
      ctx.fillStyle = colorInfo.bg;
      ctx.beginPath();
      ctx.roundRect(colX + 24, cardY, 6, cardHeight, [10, 0, 0, 10]);
      ctx.fill();

      // Category Pill
      ctx.font = "bold 13px 'Courier New', monospace";
      const catText = ev.category.toUpperCase();
      const catWidth = ctx.measureText(catText).width + 16;
      ctx.fillStyle = colorInfo.bg;
      ctx.beginPath();
      ctx.roundRect(colX + 44, cardY + 14, catWidth, 22, 4);
      ctx.fill();
      ctx.fillStyle = colorInfo.text;
      ctx.fillText(catText, colX + 52, cardY + 29);

      // Time Badge
      ctx.textAlign = "right";
      ctx.font = "bold 16px 'Courier New', monospace";
      ctx.fillStyle = "#00e5cc";
      ctx.fillText(ev.time, colX + colWidth - 44, cardY + 30);

      // Event Title
      ctx.textAlign = "left";
      ctx.font = "bold 20px Arial, sans-serif";
      ctx.fillStyle = "#ffffff";
      ctx.fillText(ev.title, colX + 44, cardY + 68);

      // Venue
      ctx.font = "600 16px 'Courier New', monospace";
      ctx.fillStyle = "#f9a825";
      ctx.fillText("📍 " + ev.venue, colX + 44, cardY + 100);

      cardY += cardHeight + gap;
    });
  });

  // Footer & Legend
  const footerY = 1665;
  let legX = 500;
  const legItems = [
    { label: "Competitions", bg: "#f9a825" },
    { label: "Inauguration / Valedictory", bg: "#00897b" },
    { label: "Online Submissions", bg: "#7e57c2" },
    { label: "Registration Desk", bg: "#d4739a" }
  ];

  legItems.forEach((item) => {
    ctx.fillStyle = item.bg;
    ctx.beginPath();
    ctx.arc(legX, footerY, 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.textAlign = "left";
    ctx.font = "bold 15px 'Courier New', monospace";
    ctx.fillStyle = "#ccc";
    ctx.fillText(item.label, legX + 16, footerY + 5);

    legX += ctx.measureText(item.label).width + 60;
  });

  ctx.textAlign = "center";
  ctx.font = "600 15px 'Courier New', monospace";
  ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
  ctx.fillText("INSPIRUS 2K26 // DBCE FATORDA GOA // MAKE IT HAPPEN", width / 2, footerY + 38);

  // Trigger download
  const link = document.createElement("a");
  link.download = "inspirus-2k26-schedule.png";
  link.href = canvas.toDataURL("image/png");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function ScheduleModal({ onClose, onSelectCompetition }) {
  const [viewMode, setViewMode] = useState("table");
  const [selectedDay, setSelectedDay] = useState("all");

  const days = scheduleData.days;
  const timeSlots = scheduleData.timeSlots;

  const filteredTimeline = selectedDay === "all"
    ? scheduleTimeline
    : scheduleTimeline.filter((d) => d.dayId === selectedDay);

  const handleCardClick = (slug) => {
    if (slug && onSelectCompetition) {
      const comp = competitions.find((c) => c.slug === slug);
      if (comp) {
        onClose();
        onSelectCompetition(comp);
      }
    }
  };

  const modal = (
    <div className="competition-modal-overlay" onClick={onClose}>
      <div
        className="schedule-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="competition-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <div className="schedule-modal-header">
          <div className="modal-top-line">
            <span>INSPIRUS 2K26</span>
            <span>EVENT SCHEDULE</span>
          </div>
          <h2 className="schedule-modal-title">INSPIRUS 10 SCHEDULE</h2>
          <p className="schedule-modal-subtitle">
            OFFICIAL FESTIVAL TIMELINE & VENUE DIRECTORY (15–16 OCTOBER 2026)
          </p>

          <div className="schedule-header-actions">
            {/* VIEW SWITCHER */}
            <div className="schedule-view-switcher">
              <button
                type="button"
                className={`sch-switch-btn ${viewMode === "timeline" ? "active" : ""}`}
                onClick={() => setViewMode("timeline")}
              >
                <i className="ri-list-check-3" />
                <span>TIMELINE VIEW</span>
              </button>
              <button
                type="button"
                className={`sch-switch-btn ${viewMode === "table" ? "active" : ""}`}
                onClick={() => setViewMode("table")}
              >
                <i className="ri-grid-fill" />
                <span>GRID TABLE VIEW</span>
              </button>
            </div>

            {/* DOWNLOAD SCHEDULE IMAGE BUTTON */}
            <button
              type="button"
              className="schedule-download-btn"
              onClick={downloadScheduleImage}
              title="Download High-Resolution Schedule Image"
            >
              <i className="ri-download-cloud-2-line" />
              <span>DOWNLOAD IMAGE (PNG)</span>
            </button>
          </div>

          {/* DAY FILTER (FOR TIMELINE) */}
          {viewMode === "timeline" && (
            <div className="schedule-day-filter">
              <button
                type="button"
                className={`sch-day-btn ${selectedDay === "all" ? "active" : ""}`}
                onClick={() => setSelectedDay("all")}
              >
                <span>ALL EVENTS</span>
              </button>
              <button
                type="button"
                className={`sch-day-btn ${selectedDay === "day1" ? "active" : ""}`}
                onClick={() => setSelectedDay("day1")}
              >
                <i className="ri-calendar-event-line" />
                <span>DAY 1 (15TH OCT)</span>
              </button>
              <button
                type="button"
                className={`sch-day-btn ${selectedDay === "day2" ? "active" : ""}`}
                onClick={() => setSelectedDay("day2")}
              >
                <i className="ri-calendar-event-line" />
                <span>DAY 2 (16TH OCT)</span>
              </button>
            </div>
          )}
        </div>

        {/* TIMELINE VIEW (HIGHLY READABLE ON MOBILE & DESKTOP) */}
        {viewMode === "timeline" ? (
          <div className="schedule-timeline-container">
            {filteredTimeline.map((group) => (
              <div key={group.dayId} className="schedule-timeline-group">
                <div className="schedule-group-header">
                  <div className="group-header-badge">
                    <i className="ri-calendar-2-line" />
                    <span>{group.dayLabel}</span>
                  </div>
                  <h3 className="group-header-title">{group.dayTitle}</h3>
                </div>

                <div className="schedule-cards-grid">
                  {group.events.map((ev, idx) => {
                    const c = COLOR_MAP[ev.color] || COLOR_MAP.yellow;
                    const isClickable = !!ev.slug;
                    return (
                      <div
                        key={idx}
                        className={`schedule-card ${isClickable ? "clickable-event" : ""}`}
                        style={{ "--card-accent": c.bg }}
                        onClick={() => isClickable && handleCardClick(ev.slug)}
                        role={isClickable ? "button" : undefined}
                        tabIndex={isClickable ? 0 : undefined}
                      >
                        <div className="sch-card-top">
                          <span
                            className="sch-card-badge"
                            style={{ backgroundColor: c.bg, color: c.text }}
                          >
                            {ev.category}
                          </span>
                          <span className="sch-card-time">
                            <i className="ri-time-line" />
                            {ev.time}
                          </span>
                        </div>

                        <h4 className="sch-card-title">{ev.title}</h4>

                        <div className="sch-card-bottom">
                          <div className="sch-card-venue">
                            <i className="ri-map-pin-2-line" />
                            <span>{ev.venue}</span>
                          </div>
                          {isClickable && (
                            <span className="sch-card-action">
                              <span>EVENT DETAILS</span>
                              <i className="ri-arrow-right-up-line" />
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* TABLE GRID VIEW */
          <div className="schedule-table-section">
            <div className="schedule-table-hint">
              <i className="ri-drag-move-2-line" />
              <span>Swipe horizontally to view all time slots & locations</span>
            </div>

            <div className="schedule-scroll-wrap">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th className="sch-th sch-days-col">DAYS</th>
                    <th className="sch-th sch-loc-col">LOCATION</th>
                    {timeSlots.map((ts, i) => (
                      <th key={i} className="sch-th sch-time-col">{ts}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {days.map((day) =>
                    day.rows.map((row, ri) => {
                      const cells = [];
                      let colIdx = 0;
                      row.slots.forEach((slot, si) => {
                        const targetCol = slot.colStart !== undefined ? slot.colStart : 0;
                        while (colIdx < targetCol) {
                          cells.push(<td key={`empty-${colIdx}`} className="sch-td" />);
                          colIdx++;
                        }
                        const c = COLOR_MAP[slot.color] || COLOR_MAP.yellow;
                        cells.push(
                          <td
                            key={`slot-${si}`}
                            colSpan={slot.colspan}
                            className="sch-td sch-event-cell"
                            style={{ background: c.bg, color: c.text }}
                          >
                            {slot.label}
                          </td>
                        );
                        colIdx += slot.colspan;
                      });
                      while (colIdx < timeSlots.length) {
                        cells.push(<td key={`fill-${colIdx}`} className="sch-td" />);
                        colIdx++;
                      }

                      return (
                        <tr key={`${day.label}-${ri}`}>
                          {ri === 0 && (
                            <td
                              className="sch-td sch-day-label"
                              rowSpan={day.rows.length}
                            >
                              {day.label}
                            </td>
                          )}
                          <td className="sch-td sch-location">{row.location}</td>
                          {cells}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="schedule-legend">
          {Object.entries(COLOR_MAP).map(([key, val]) => (
            <div key={key} className="legend-item">
              <span className="legend-dot" style={{ background: val.bg }} />
              <span className="legend-label">
                {val.label}
              </span>
            </div>
          ))}
        </div>

        <div className="schedule-modal-footer-btns">
          <button
            type="button"
            className="schedule-download-footer-btn"
            onClick={downloadScheduleImage}
          >
            <i className="ri-download-cloud-2-line" />
            <span>DOWNLOAD SCHEDULE IMAGE</span>
          </button>
          <button
            type="button"
            className="competition-modal-done"
            onClick={onClose}
          >
            CLOSE SCHEDULE
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}

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
              <i className="ri-phone-lock-line" />
              <span>COORDINATOR CONTACT POLICY</span>
            </div>
            <p>{generalRulesData.contactPolicy}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-donut-chart-line" />
              <span>EVENT CAPPING & CAPACITY POLICY</span>
            </div>
            <p>{generalRulesData.cappingPolicy}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-calendar-check-line" />
              <span>REGISTRATION DEADLINE</span>
            </div>
            <p>{generalRulesData.registrationDeadline}</p>
          </div>

          <div className="modal-banner">
            <div className="banner-header">
              <i className="ri-trophy-line" />
              <span>PRIZE DISBURSEMENT & CERTIFICATION</span>
            </div>
            <p>{generalRulesData.prizeMoneyAndSchedule}</p>
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

  const initials = (name || "")
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

  const gradients = [
    "linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)",
    "linear-gradient(135deg, #0f172a 0%, #0284c7 100%)",
    "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)",
    "linear-gradient(135deg, #311042 0%, #7c3aed 100%)",
    "linear-gradient(135deg, #1e293b 0%, #3b82f6 100%)",
    "linear-gradient(135deg, #083344 0%, #06b6d4 100%)",
    "linear-gradient(135deg, #2e1065 0%, #9333ea 100%)",
    "linear-gradient(135deg, #064e3b 0%, #059669 100%)",
    "linear-gradient(135deg, #1e1e24 0%, #6366f1 100%)",
    "linear-gradient(135deg, #172554 0%, #38bdf8 100%)",
  ];

  const colorIndex =
    (name || "")
      .split("")
      .reduce((a, c) => a + c.charCodeAt(0), 0) % gradients.length;

  if (image && !imgError) {
    return (
      <img
        src={image}
        alt={name}
        className="coordinator-avatar-img"
        onError={() => setImgError(true)}
      />
    );
  }

  return (
    <div
      className="coordinator-avatar-fallback"
      style={{ background: gradients[colorIndex] }}
    >
      {initials ? (
        <span className="coordinator-avatar-initials">{initials}</span>
      ) : (
        <i className="ri-user-3-line" />
      )}
    </div>
  );
}

function EventDetailPage({ competition, onBack }) {
  const pageView = (
    <div className="event-detail-page">
      {/* BACKGROUND DECORATIONS */}
      <div className="event-detail-grid" />
      <div className="event-detail-glow" />

      {/* TOP NAVIGATION BAR */}
      <nav className="event-detail-nav">
        <button type="button" className="detail-back-btn" onClick={onBack}>
          <i className="ri-arrow-left-line" />
          <span>BACK TO COMPETITIONS</span>
        </button>

        <div className="detail-nav-brand">
          <span>INSPIRUS 2K26</span>
          <span className="detail-separator">//</span>
          <span className="detail-event-tag">{competition.category.toUpperCase()}</span>
        </div>

        <button
          type="button"
          className="detail-register-btn"
          onClick={() => window.open(competition.registerLink, '_blank')}
        >
          <span>REGISTER NOW</span>
          <i className="ri-external-link-line" />
        </button>
      </nav>

      {/* HERO SECTION */}
      <header className="event-detail-hero">
        <div className="hero-status-pill">
          <span className="pulse-dot" />
          <span>SYSTEM ACTIVE • REGISTRATION OPEN</span>
        </div>

        <div className="hero-meta">
          <span className="hero-event-category">{competition.category.toUpperCase()}</span>
        </div>

        <h1 className="hero-event-name">{competition.name}</h1>
        <p className="hero-event-tagline">"{competition.tagline}"</p>
        <p className="hero-event-desc">{competition.description}</p>
      </header>

      {/* MAIN CONTENT CONTAINER */}
      <div className="event-detail-body">
        {/* COORDINATORS SECTION */}
        <section className="event-detail-section coordinators-section">
          <div className="section-title-wrap">
            <i className="ri-user-star-line" />
            <h3>COORDINATORS & FACULTY IN-CHARGE</h3>
          </div>

          <div className="coordinators-grid">
            {/* Student Coordinator Cards (First) */}
            {competition.coordinators && competition.coordinators.map((coord, idx) => {
              const cleanPhone = coord.phone ? coord.phone.replace(/\D/g, '').replace(/^91/, '') : '';
              return (
                <div key={`student-${idx}`} className="coordinator-card">
                  <div className="coordinator-avatar-wrap">
                    <CoordinatorAvatar name={coord.name} image={coord.image} />
                  </div>
                  <div className="coordinator-info">
                    <h4 className="coordinator-name">{coord.name}</h4>
                    <span className="coordinator-role student-badge">Student Coordinator</span>
                    {cleanPhone && (
                      <a
                        href={`https://wa.me/91${cleanPhone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="coordinator-whatsapp-btn"
                        aria-label={`Contact ${coord.name} on WhatsApp`}
                        title={`Chat with ${coord.name} on WhatsApp`}
                      >
                        <i className="ri-whatsapp-line" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Faculty Coordinator Cards (Second) */}
            {competition.facultyCoordinators && competition.facultyCoordinators.map((coord, idx) => {
              const cleanPhone = coord.phone ? coord.phone.replace(/\D/g, '').replace(/^91/, '') : '';
              return (
                <div key={`faculty-${idx}`} className="coordinator-card faculty-card">
                  <div className="coordinator-avatar-wrap">
                    <CoordinatorAvatar name={coord.name} image={coord.image} />
                  </div>
                  <div className="coordinator-info">
                    <h4 className="coordinator-name">{coord.name}</h4>
                    <span className="coordinator-role faculty-badge">{coord.role || "Faculty In-Charge"}</span>
                    {cleanPhone && (
                      <a
                        href={`https://wa.me/91${cleanPhone}`}
                        target="_blank"
                        rel="noreferrer"
                        className="coordinator-whatsapp-btn"
                        aria-label={`Contact ${coord.name} on WhatsApp`}
                        title={`Chat with ${coord.name} on WhatsApp`}
                      >
                        <i className="ri-whatsapp-line" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
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

            {competition.offlineReg && (
              <div className="modal-banner">
                <div className="banner-header">
                  <i className="ri-user-add-line" />
                  <span>OFFLINE REGISTRATION CRITERIA</span>
                </div>
                <p>{competition.offlineReg}</p>
              </div>
            )}

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

          <div className="event-rules-container">
            {competition.rules && competition.rules.map((ruleItem, index) => {
              if (typeof ruleItem === "object" && ruleItem.main) {
                return (
                  <div key={index} className="rule-group-card">
                    <div className="rule-group-header">
                      <i className="ri-shield-check-line rule-group-icon" />
                      <h4 className="rule-group-title">{ruleItem.main}</h4>
                    </div>
                    <ul className="rule-group-list">
                      {ruleItem.sub && ruleItem.sub.map((subRule, subIndex) => (
                        <li key={subIndex} className="event-rule-item">
                          <span className="rule-badge">
                            {(subIndex + 1).toString().padStart(2, "0")}
                          </span>
                          <span className="rule-text">{subRule}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
              return (
                <div key={index} className="event-rule-item single-rule-item">
                  <span className="rule-badge">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span className="rule-text">{ruleItem}</span>
                </div>
              );
            })}
          </div>
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
      onClick={() => onInfo(competition)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onInfo(competition);
        }
      }}
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
        <span className={`competition-card-category-tag ${competition.category}`}>
          {competition.category === "technical" ? "TECHNICAL" : "NON-TECH"}
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
        <div className="competition-card-actions">
          <button
            type="button"
            className="competition-details"
            onClick={(e) => {
              e.stopPropagation();
              onInfo(competition);
            }}
          >
            <span>INFO</span>
            <i className="ri-arrow-right-up-line" />
          </button>

          <button
            type="button"
            className="competition-register"
            onClick={(e) => {
              e.stopPropagation();
              window.open(competition.registerLink, '_blank');
            }}
          >
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
  const [showSchedule, setShowSchedule] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");

  const stateRef = useRef({
    selectedCompetition,
    showGeneralRules,
    showSchedule,
  });

  useEffect(() => {
    stateRef.current = {
      selectedCompetition,
      showGeneralRules,
      showSchedule,
    };
  }, [selectedCompetition, showGeneralRules, showSchedule]);

  // Deep-link helper to find competition by slug or number
  const findCompetitionByParam = useCallback((param) => {
    if (!param) return null;
    const clean = param.toLowerCase().trim().replace(/^#/, "").replace(/^event-/, "");
    return competitions.find((c) => {
      const slug = c.slug || c.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return (
        slug === clean ||
        c.number === clean ||
        c.name.toLowerCase() === clean ||
        c.name.toLowerCase().replace(/[^a-z0-9]+/g, "") === clean.replace(/[^a-z0-9]+/g, "")
      );
    });
  }, []);

  // Check URL on initial load for direct event link (e.g. ?event=inspirathon or ?event=code-clash)
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const eventParam = params.get("event") || params.get("competition") || (window.location.hash ? window.location.hash.replace(/^#/, "") : null);
      if (eventParam) {
        const found = findCompetitionByParam(eventParam);
        if (found) {
          setSelectedCompetition(found);
          const slug = found.slug || found.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.set("event", slug);
          window.history.replaceState(
            { inspirusModal: "competition", number: found.number, slug },
            "",
            newUrl.pathname + newUrl.search + newUrl.hash
          );
        }
      }
    } catch {
      // Fallback silently if URLSearchParams fails
    }
  }, [findCompetitionByParam]);

  // Lock body scroll when modal/detail page is open
  useEffect(() => {
    if (selectedCompetition || showGeneralRules || showSchedule) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedCompetition, showGeneralRules, showSchedule]);

  // Push history state helpers so browser/mobile Back button navigates back to main page
  const openGeneralRules = useCallback(() => {
    window.history.pushState({ inspirusModal: "generalRules" }, "");
    setShowGeneralRules(true);
  }, []);

  const closeGeneralRules = useCallback((fromPopState = false) => {
    setShowGeneralRules(false);
    if (!fromPopState && window.history.state?.inspirusModal === "generalRules") {
      window.history.back();
    }
  }, []);

  const openSchedule = useCallback(() => {
    window.history.pushState({ inspirusModal: "schedule" }, "");
    setShowSchedule(true);
  }, []);

  const closeSchedule = useCallback((fromPopState = false) => {
    setShowSchedule(false);
    if (!fromPopState && window.history.state?.inspirusModal === "schedule") {
      window.history.back();
    }
  }, []);

  const openCompetition = useCallback((comp) => {
    const slug = comp.slug || comp.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    try {
      const newUrl = new URL(window.location.href);
      newUrl.searchParams.set("event", slug);
      window.history.pushState(
        { inspirusModal: "competition", number: comp.number, slug },
        "",
        newUrl.pathname + newUrl.search + newUrl.hash
      );
    } catch {
      window.history.pushState({ inspirusModal: "competition", number: comp.number, slug }, "");
    }
    setSelectedCompetition(comp);
  }, []);

  const closeCompetition = useCallback((fromPopState = false) => {
    setSelectedCompetition(null);
    if (!fromPopState) {
      if (window.history.state?.inspirusModal === "competition") {
        window.history.back();
      } else {
        try {
          const newUrl = new URL(window.location.href);
          newUrl.searchParams.delete("event");
          newUrl.searchParams.delete("competition");
          const cleanSearch = newUrl.searchParams.toString();
          const searchPart = cleanSearch ? `?${cleanSearch}` : "";
          window.history.replaceState({}, "", newUrl.pathname + searchPart + newUrl.hash);
        } catch {
          // Fallback
        }
      }
    }
  }, []);

  // Listen to popstate (back button / mobile back gesture) & Escape key
  useEffect(() => {
    const handlePopState = (event) => {
      const modalType = event.state?.inspirusModal;

      if (modalType === "generalRules") {
        setShowGeneralRules(true);
        setShowSchedule(false);
        setSelectedCompetition(null);
      } else if (modalType === "schedule") {
        setShowSchedule(true);
        setShowGeneralRules(false);
        setSelectedCompetition(null);
      } else if (modalType === "competition") {
        const found = event.state.number
          ? competitions.find((c) => c.number === event.state.number)
          : findCompetitionByParam(event.state.slug);
        setSelectedCompetition(found || null);
        setShowGeneralRules(false);
        setShowSchedule(false);
      } else {
        // Also check if there's a param in current URL
        try {
          const params = new URLSearchParams(window.location.search);
          const eventParam = params.get("event") || params.get("competition");
          if (eventParam) {
            const found = findCompetitionByParam(eventParam);
            if (found) {
              setSelectedCompetition(found);
              return;
            }
          }
        } catch {
          // Ignore
        }
        // Returned to base page state -> Close all modals/views
        if (stateRef.current.showGeneralRules) setShowGeneralRules(false);
        if (stateRef.current.showSchedule) setShowSchedule(false);
        if (stateRef.current.selectedCompetition) setSelectedCompetition(null);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (stateRef.current.showGeneralRules) {
          closeGeneralRules();
        } else if (stateRef.current.showSchedule) {
          closeSchedule();
        } else if (stateRef.current.selectedCompetition) {
          closeCompetition();
        }
      }
    };

    window.addEventListener("popstate", handlePopState);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeGeneralRules, closeSchedule, closeCompetition, findCompetitionByParam]);

  const technicalEvents = competitions.filter((c) => c.category === "technical");
  const nonTechnicalEvents = competitions.filter((c) => c.category === "non-technical");

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
              onClick={openGeneralRules}
            >
              <i className="ri-file-text-line" />
              <span>GENERAL RULES</span>
            </button>

            <button
              type="button"
              className="schedule-btn"
              onClick={openSchedule}
            >
              <i className="ri-calendar-schedule-line" />
              <span>SCHEDULE</span>
            </button>
          </div>

          {/* CATEGORY TABS (ALL / TECHNICAL / NON-TECHNICAL) */}
          <div className="competitions-category-tabs">
            <button
              type="button"
              className={`category-tab-btn ${activeCategory === "all" ? "active" : ""}`}
              onClick={() => setActiveCategory("all")}
            >
              <i className="ri-apps-2-line" />
              <span>ALL EVENTS</span>
              <span className="tab-count">{competitions.length}</span>
            </button>

            <button
              type="button"
              className={`category-tab-btn ${activeCategory === "technical" ? "active" : ""}`}
              onClick={() => setActiveCategory("technical")}
            >
              <i className="ri-code-s-slash-line" />
              <span>TECHNICAL</span>
              <span className="tab-count">{technicalEvents.length}</span>
            </button>

            <button
              type="button"
              className={`category-tab-btn ${activeCategory === "non-technical" ? "active" : ""}`}
              onClick={() => setActiveCategory("non-technical")}
            >
              <i className="ri-palette-line" />
              <span>NON-TECHNICAL</span>
              <span className="tab-count">{nonTechnicalEvents.length}</span>
            </button>
          </div>
        </div>

        {/* TECHNICAL EVENTS SECTION */}
        {(activeCategory === "all" || activeCategory === "technical") && (
          <div className="competitions-category-group" id="technical-events">
            <div className="category-group-header">
              <div className="category-group-badge">
                <span className="badge-pulse technical" />
                <span>CATEGORY // 01</span>
              </div>
              <h2 className="category-group-title">TECHNICAL EVENTS</h2>
              <p className="category-group-desc">
                HACKATHON • ALGORITHMIC DEBUGGING • LOGIC • UI/UX • AI ENGINEERING
              </p>
              <div className="category-group-line technical" />
            </div>

            <div className="competitions-grid">
              {technicalEvents.map((competition) => (
                <CompetitionCard
                  key={competition.number}
                  competition={competition}
                  onInfo={openCompetition}
                />
              ))}
            </div>
          </div>
        )}

        {/* NON-TECHNICAL EVENTS SECTION */}
        {(activeCategory === "all" || activeCategory === "non-technical") && (
          <div className="competitions-category-group" id="non-technical-events">
            <div className="category-group-header">
              <div className="category-group-badge">
                <span className="badge-pulse non-technical" />
                <span>CATEGORY // 02</span>
              </div>
              <h2 className="category-group-title">NON-TECHNICAL EVENTS</h2>
              <p className="category-group-desc">
                CINEMATOGRAPHY • PHOTOGRAPHY • CRYPTIC ADVENTURE
              </p>
              <div className="category-group-line non-technical" />
            </div>

            <div className="competitions-grid">
              {nonTechnicalEvents.map((competition) => (
                <CompetitionCard
                  key={competition.number}
                  competition={competition}
                  onInfo={openCompetition}
                />
              ))}
            </div>
          </div>
        )}

        <div className="competitions-footer-line">
          <span>INSPIRUS_2K26</span>
          <span>END OF EVENT DATABASE</span>
        </div>
      </section>

      {showGeneralRules && (
        <GeneralRulesModal onClose={() => closeGeneralRules()} />
      )}

      {showSchedule && (
        <ScheduleModal
          onClose={() => closeSchedule()}
          onSelectCompetition={openCompetition}
        />
      )}

      {selectedCompetition && (
        <EventDetailPage
          competition={selectedCompetition}
          onBack={() => closeCompetition()}
        />
      )}
    </>
  );
}
