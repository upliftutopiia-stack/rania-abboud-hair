const instagramUrl = "https://www.instagram.com/ra.heirstyles/";

const services = [
  {
    number: "01",
    title: "Bridal Hair",
    description:
      "Elegant bridal hairstyling created for one of your most photographed days.",
  },
  {
    number: "02",
    title: "Events & Occasions",
    description:
      "Polished styling for celebrations, formal events and special occasions.",
  },
  {
    number: "03",
    title: "Blow Waves & Styling",
    description:
      "Refined finishes and styling for an elevated, put-together look.",
  },
  {
    number: "04",
    title: "Hair Treatments",
    description:
      "Nanoplasty and Hair Botox services for beautifully finished hair.",
  },
];

const secondaryServices = [
  "Bridal",
  "Event Styling",
  "Blow Waves",
  "Cuts",
  "Nanoplasty",
  "Hair Botox",
];

export default function Home() {
  return (
    <main>
      {/* HEADER */}
      <header className="header">
        <a href="#" className="brand" aria-label="RA Heirstyles home">
          RA<span>.</span>
        </a>

        <nav className="desktopNav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#bridal">Bridal</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          className="navInstagram"
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
        >
          Instagram <span>↗</span>
        </a>

        {/* MOBILE HAMBURGER */}
        <details className="mobileMenu">
          <summary aria-label="Open navigation">
            <span className="hamburger">
              <i />
              <i />
              <i />
            </span>
          </summary>

          <div className="mobileMenuPanel">
            <div className="mobileMenuTop">
              <span className="mobileMenuBrand">
                RA<span>.</span>
              </span>

              <span className="mobileMenuLabel">MENU</span>
            </div>

            <nav aria-label="Mobile navigation">
              <a href="#services">
                <span>01</span>
                Services
              </a>

              <a href="#bridal">
                <span>02</span>
                Bridal
              </a>

              <a href="#about">
                <span>03</span>
                About
              </a>

              <a href="#contact">
                <span>04</span>
                Contact
              </a>
            </nav>

            <a
              className="mobileInstagram"
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
            >
              @RA.HEIRSTYLES
              <span>↗</span>
            </a>

            <p>BRIDAL · EVENTS · MELBOURNE</p>
          </div>
        </details>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">BRIDAL · EVENTS · MELBOURNE</p>

          <h1>
            Hair for moments
            <br />
            worth <em>remembering.</em>
          </h1>

          <p className="heroDescription">
            Bridal, event and occasion hairstyling by Rania Abboud, created
            for celebrations that deserve a beautifully considered finish.
          </p>

          <div className="heroActions">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="primaryButton"
            >
              DM TO BOOK <span>↗</span>
            </a>

            <a href="#services" className="textLink">
              Explore services <span>↓</span>
            </a>
          </div>
        </div>

        <div className="heroVisual" aria-hidden="true">
          <div className="heroFrame">
            <div className="visualGlow visualGlowOne" />
            <div className="visualGlow visualGlowTwo" />

            <div className="heroMonogram">
              <span>R</span>
              <div />
              <span>A</span>
            </div>

            <p className="heroVisualLabel">
              BRIDAL
              <br />
              HAIR
            </p>

            <p className="heroVisualLocation">MELBOURNE · VIC</p>
          </div>

          <div className="floatingNote">
            <span>01</span>
            <p>
              Bridal
              <br />
              &amp; Event Styling
            </p>
          </div>
        </div>

        <div className="heroSideText">RA HEIRSTYLES · MELBOURNE</div>
      </section>

      {/* STATEMENT */}
      <section className="statement">
        <div className="statementTop">
          <p>BRIDAL · EVENTS · OCCASIONS</p>
          <span>01 — 06</span>
        </div>

        <div className="statementContent">
          <div className="statementLine" />

          <h2>
            From polished waves to elegant upstyles,
            <br />
            <em>hair designed for the occasion.</em>
          </h2>
        </div>
      </section>

      {/* SERVICES */}
      <section className="services" id="services">
        <div className="sectionHeading">
          <p className="eyebrow">THE SERVICES</p>

          <h2>
            Styling, with
            <br />
            <em>intention.</em>
          </h2>
        </div>

        <div className="serviceList">
          {services.map((service) => (
            <article className="serviceRow" key={service.number}>
              <span className="serviceNumber">{service.number}</span>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <span className="serviceArrow">↗</span>
            </article>
          ))}
        </div>
      </section>

      {/* LOOKS */}
      <section className="looks">
        <div className="looksHeading">
          <p className="eyebrow">THE LOOKS</p>

          <h2>
            Made to be
            <br />
            <em>remembered.</em>
          </h2>

          <p className="looksIntro">
            From soft movement to polished finishes, explore a style direction
            made for weddings, events and memorable occasions.
          </p>
        </div>

        <div className="lookGrid">
          <div className="look lookOne">
            <span className="lookNumber">01</span>

            <div className="lookGraphic">
              <span>R</span>
            </div>

            <p>BRIDAL</p>
          </div>

          <div className="look lookTwo">
            <span className="lookNumber">02</span>

            <div className="lookGraphic">
              <span>A</span>
            </div>

            <p>EVENTS</p>
          </div>

          <div className="look lookThree">
            <span className="lookNumber">03</span>

            <div className="lookGraphic">
              <span>RA</span>
            </div>

            <p>OCCASIONS</p>
          </div>
        </div>

      </section>

      {/* BRIDAL */}
      <section className="bridal" id="bridal">
        <div className="bridalVisual" aria-hidden="true">
          <div className="bridalCircle">
            <span>RA</span>
          </div>

          <p>FOR THE BRIDE</p>
        </div>

        <div className="bridalCopy">
          <p className="eyebrow">FOR THE BRIDE</p>

          <h2>
            Your hair should feel
            <br />
            as considered as
            <br />
            <em>everything else.</em>
          </h2>

          <p className="bridalDescription">
            From the ceremony to the final photograph, discover bridal
            hairstyling created to complement your look and your occasion.
          </p>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="darkButton"
          >
            ENQUIRE ABOUT YOUR DATE
            <span>↗</span>
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="about" id="about">
        <div className="aboutHeading">
          <p className="eyebrow">BEHIND THE STYLE</p>
          <span className="aboutNumber">RA / 01</span>
        </div>

        <div className="aboutContent">
          <h2>
            Rania
            <br />
            <em>Abboud.</em>
          </h2>

          <div className="aboutText">
            <p className="aboutLead">
              Melbourne bridal &amp; event hairstylist.
            </p>

            <p>
              Rania offers hairstyling for brides, events, groups and special
              occasions, alongside blow waves, cuts and selected hair
              treatments.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="textLink darkTextLink"
            >
              Follow @ra.heirstyles
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section className="serviceStrip" aria-label="Services">
        <div className="serviceStripInner">
          {secondaryServices.map((service) => (
            <div key={service}>
              <span>{service}</span>
              <i>✦</i>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact" id="contact">
        <p className="eyebrow">BOOKINGS &amp; ENQUIRIES</p>

        <h2>
          Have a date
          <br />
          <em>in mind?</em>
        </h2>

        <p className="contactText">
          Tell Rania about your event, your date and the style you&apos;re
          considering.
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          className="contactButton"
        >
          <span>DM @RA.HEIRSTYLES</span>
          <span className="contactArrow">↗</span>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <a href="#" className="footerBrand">
            RA<span>.</span>
          </a>

          <p>Bridal · Events · Styling</p>
          <p>Melbourne, Victoria</p>
        </div>

        <div className="footerLinks">
          <a href="#services">Services</a>
          <a href="#bridal">Bridal</a>
          <a href="#about">About</a>

          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
          >
            Instagram ↗
          </a>
        </div>

        <p className="footerCopyright">
          © {new Date().getFullYear()} RA HEIRSTYLES
        </p>
      </footer>
    </main>
  );
}