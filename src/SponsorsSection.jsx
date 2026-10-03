import React from "react";

const sponsorGroups = [
  {
    title: "POWERED BY",
    className: "powered-by-group",
    sponsors: [
      {
        name: "Shri.Babush Monserrate",
        role: "Hon. Minister for Labour and Employment,Govt. of Goa",
        image: "/sponsors/babush-monserrate.webp",
        type: "person",
      },
    ],
  },

  {
    title: "SUPPORTED BY",
    className: "supported-by-group",
    sponsors: [
      {
        name: "Shri.Subhash Phal Desai",
        role: "Hon. Minister of Social Welfare, Govt. of Goa",
        image: "/sponsors/subhash-phal-desai.jpeg",
        type: "person",
      },
    ],
  },

  {
    title: "BRONZE",
    className: "bronze-group",
    sponsors: [
      {
        name: "Shri.Damu Naik",
        role: "State President of BJP,Goa Pradesh" ,
        image: "/sponsors/damu-naik.webp",
        type: "person",
      },
    ],
  },

  {
    title: "PEARL",
    className: "pearl-group",
    sponsors: [
      {
        name: "Shri.Nilesh Cabral",
        role: "Hon. Member of the Goa Legislative Assembly",
        image: "/sponsors/nilesh-cabral.webp",
        type: "person",
      },
      {
        name: "Smt.Luiza Pereira e Rodrigues",
        role: "ZP Member, Benaulim Constituency",
        image: "/sponsors/luiza-pereira.jpeg",
        type: "person",
      },
      {
        name: "Mr.Venzy Viegas",
        role: "Hon. Member of the Goa Legislative Assembly",
        image: "/sponsors/venzy-viegas.webp",
        type: "person",
      },
      {
        name: "Hotel Shakti Palace",
        role: "Ponda, Goa",
        image: "/sponsors/hotel-shakti-palace.png",
        type: "logo",
      },
      {
        name: "Mobile Hub",
        role: "",
        image: "/sponsors/mobile-hub.jpeg",
        type: "logo",
      },
    ],
  },

  {
    title: "STREAMING PARTNER",
    className: "streaming-group",
    sponsors: [
      {
        name: "BundleHUB",
        role: "Streaming Partner",
        image: "/sponsors/bundlehub.png",
        type: "streaming",
      },
    ],
  },

  {
    title: "MEDIA PARTNER",
    className: "media-group",
    sponsors: [
      {
        name: "Goa News Hub",
        role: "GNH",
        image: "/sponsors/goa-news-hub.png",
        type: "media",
      },
    ],
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
          OUR SPONSORS
        </h2>

        <div className="supporters-line">
          <span />
        </div>

        <p className="supporters-subtitle">
          OUR OFFICIAL SPONSORS & PARTNERS
        </p>

      </div>


      {/* SPONSOR GROUPS */}
      <div className="sponsor-groups">

        {sponsorGroups.map((group, groupIndex) => (
          <div
            className={`sponsor-group ${group.className}`}
            key={groupIndex}
          >

            {/* GROUP HEADING */}
            <div className="sponsor-group-heading">
              <span className="sponsor-heading-line" />

              <h3>
                {group.title}
              </h3>

              <span className="sponsor-heading-line" />
            </div>


            {/* GROUP SPONSORS */}
            <div className="sponsor-group-grid">

              {group.sponsors.map((sponsor, sponsorIndex) => (
                <div
                  className={`supporter-card supporter-card-${sponsor.type}`}
                  key={`${sponsor.name}-${sponsorIndex}`}
                >

                  {/* IMAGE */}
                  <div className="supporter-image-wrapper">

                    <img
                      src={sponsor.image}
                      alt={sponsor.name}
                      className="supporter-image"
                    />

                  </div>


                  {/* DETAILS */}
                  <div className="supporter-details">

                    <h4>
                      {sponsor.name}
                    </h4>

                    <p>
                      {sponsor.role}
                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}