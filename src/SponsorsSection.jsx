import React from "react";

const supporters = [
  {
    name: "Shri.Babush Monserrate",
    role: "Hon. Minister for Labour and Employment Gov. of Goa",
    category: "Sponsor",
    image: "/sponsors/babush-monserrate.webp",
    type: "person",
  },
  {
    name: "Shri.Subhash Phal Desai",
    role: "Hon. Minister of Social Welfare Gov. of Goa",
    category: "Sponsor",
    image: "/sponsors/subhash-phal-desai.jpeg",
    type: "person",
  },
  {
    name: "Shri.Damu Naik",
    role: "Former Member of the Goa Legislative Assembly",
    category: "Sponsor",
    image: "/sponsors/damu-naik.webp",
    type: "person",
  },
  {
    name: "Shri.Nilesh Cabral",
    role: "Hon. Member of the Goa Legislative Assembly",
    category: "Sponsor",
    image: "/sponsors/nilesh-cabral.webp",
    type: "person",
  },
  {
    name: "Mr.Venzy Viegas",
    role: "Hon. Member of the Goa Legislative Assembly",
    category: "Sponsor",
    image: "/sponsors/venzy-viegas.webp",
    type: "person",
  },
  {
    name: "Goa News Hub",
    role: "GNH",
    category: "Media Partner",
    image: "/sponsors/goa-news-hub.png",
    type: "partner",
  },
  {
    name: "BundleHUB",
    role: "Streaming Partner",
    category: "Streaming Partner",
    image: "/sponsors/bundlehub.png",
    type: "partner",
  },
  {
    name: "Mobile Hub",
    role: "Sponsor",
    category: "Sponsor",
    image: "/sponsors/mobile-hub.jpeg",
    type: "sponsor",
  },
  {
    name: "Smt.Luiza Pereira e Rodrigues",
    role: "ZP Member, Benaulim Constituency",
    category: "Sponsor",
    image: "/sponsors/luiza-pereira.jpeg",
    type: "person",
  },
  {
    name: "Hotel Shakti Palace",
    role: "Ponda, Goa",
    category: "Sponsor",
    image: "/sponsors/hotel-shakti-palace.png",
    type: "partner",
  },
];

export default function SponsorsSection() {
  return (
    <section className="inspirus-supporters-section" id="supporters">

      {/* BACKGROUND EFFECTS */}
      <div className="supporters-glow supporters-glow-left" />
      <div className="supporters-glow supporters-glow-right" />

      {/* SECTION HEADER */}
      <div className="supporters-header">

        <p className="supporters-eyebrow">
          INSPIRUS-X // EDITION 10.0
        </p>

        <h2 className="supporters-title">
          OUR SUPPORTERS
        </h2>

        <div className="supporters-line">
          <span />
        </div>

        <p className="supporters-subtitle">
          DISTINGUISHED GUESTS • PARTNERS • SPONSORS
        </p>

      </div>

      {/* SUPPORTERS GRID */}
      <div className="supporters-grid">

        {supporters.map((supporter, index) => (
          <div
            className={`supporter-card supporter-card-${supporter.type}`}
            key={`${supporter.name}-${index}`}
          >

            {/* CATEGORY */}
            <div className="supporter-category">
              {supporter.category}
            </div>

            {/* IMAGE */}
            <div className="supporter-image-wrapper">
              <img
                src={supporter.image}
                alt={supporter.name}
                className="supporter-image"
              />
            </div>

            {/* DETAILS */}
            <div className="supporter-details">

              <h3>{supporter.name}</h3>

              <p>{supporter.role}</p>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}