import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'
import ContactCTA from '../components/ContactCTA'

// Bold Maxim's name in author strings
function Authors({ text }) {
  const parts = text.split(/(Tsenkov,\s*M\.I\.|Tsenkov,\s*M\.(?!\s*I\.))/g)
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith('Tsenkov') ? (
          <strong key={i} style={{ color: COLORS.black }}>{part}</strong>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  )
}

// ─── Page Intro ───────────────────────────────────────────────────────────
function PageIntro() {
  return (
    <section
      className="pt-20 sm:pt-24 border-b-4 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Triangle color={COLORS.yellow} size={200} className="-top-4 -right-8 opacity-15" />
      <Square color={COLORS.red} size={140} rotate className="-bottom-8 -left-8 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.blue }}
          >
            Research Output
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl uppercase leading-[0.9] mb-6"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Publications
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ fontWeight: 500, color: "#555" }}
          >
            Research spanning structural bioinformatics, protein structure databases, and repeat protein
            evolution. For the complete and up-to-date record, visit my{' '}
            <a
              href="https://orcid.org/0000-0002-4870-239X"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 transition-opacity duration-200 hover:opacity-60"
              style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
            >
              ORCID
            </a>{' '}
            or{' '}
            <a
              href="https://scholar.google.co.uk/citations?user=QWjBtHUAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="border-b-2 transition-opacity duration-200 hover:opacity-60"
              style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
            >
              Google Scholar
            </a>{' '}
            profiles.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Group heading ────────────────────────────────────────────────────────
function GroupHeading({ label, accent }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="w-4 h-4 shrink-0" style={{ backgroundColor: accent }} />
      <h2
        className="text-2xl sm:text-3xl lg:text-4xl uppercase"
        style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.03em" }}
      >
        {label}
      </h2>
      <div className="flex-1 h-1" style={{ backgroundColor: accent }} />
    </div>
  )
}

// ─── First-Author Work ────────────────────────────────────────────────────
function FirstAuthor() {
  const papers = [
    {
      title: "AlphaFold Database expands to proteome-scale quaternary structures",
      status: "Manuscript in preparation",
      authors: "Han, Y.*, Tsenkov, M.I.*, Venanzi, N.A.E.*, Bertoni, D., Cha, S., Chacón, A., Dietrich, N., Fomitchev, B., Goldtzvik, Y., Hsu, D., Austin, J., Ellaway, J., Didi, K., Kovalevskiy, O., Lasecki, D., Laydon, A., Livne, M., Magaña, P., Majewski, M., Nair, S., Paramval, U., Patel, N., Patel, R., Pidruchna, I., Santini Lopez, B., Sohani, P., Tanweer, A., Tran, D., Tretina, K., Vollmar, M., Vu, Q., Žídek, A., Velankar, S.#, Steinegger, M.#, Fleming, J.#, Mirdita, M.#, Dallago, C.#",
      authorNote: "*Equal contribution first authors; #Corresponding authors",
      annotation: "Introduces predicted homodimer structures into AlphaFold DB at proteome scale for the first time, in an ongoing collaboration with Nvidia.",
      accent: COLORS.red,
    },
    {
      title: "The AlphaFold Protein Structure Database as a community platform",
      status: "Manuscript in preparation",
      authors: "Tsenkov, M., Kim, R.S., Wheeler, R.J., Bouras, G., Tanweer, A., Nair, S., Bertoni, D., Ellaway, J., Evans, G., Harrus, D., Midlik, A., Magana, P., Pidruchna, I., Paramval, U., Austin, J., Litvin, U., Lytras, S., Jack, A., Robertson, D.L., Hughes, J., Dietrich, N., Kovalevskiy, O., Lasecki, D., Laydon, A., Patel, R., Žídek, A., Schwengers, O., Lees, J.A., Hunt, M., Iqbal, Z., Grove, J., Steinegger, M., Fleming, J.R., Velankar, S.*",
      authorNote: null,
      annotation: "Establishes AlphaFold DB as a community platform for integrating specialist datasets, including microbial, viral, and kinetoplastid parasite proteins, powered by the AFDB-Integration Toolkit.",
      accent: COLORS.blue,
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <GroupHeading label="First-Author" accent={COLORS.red} />
        </FadeIn>

        <div className="space-y-6">
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: p.accent }} />
                <div className="flex items-start justify-between gap-4 mb-4 mt-2">
                  <h3
                    className="text-lg sm:text-xl lg:text-2xl leading-tight"
                    style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
                  >
                    {p.title}
                  </h3>
                  <span
                    className="shrink-0 px-3 py-1 text-xs uppercase tracking-widest border-2"
                    style={{
                      fontWeight: 700,
                      borderColor: p.accent,
                      color: p.accent,
                    }}
                  >
                    {p.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed mb-2" style={{ fontWeight: 500, color: "#666" }}>
                  <Authors text={p.authors} />
                </p>
                {p.authorNote && (
                  <p className="text-xs mb-4" style={{ fontWeight: 500, color: "#999" }}>
                    {p.authorNote}
                  </p>
                )}
                <div
                  className="mt-4 pt-4 border-t-2"
                  style={{ borderColor: COLORS.muted }}
                >
                  <p className="text-sm leading-relaxed" style={{ fontWeight: 500, color: "#444", fontStyle: "italic" }}>
                    {p.annotation}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Review & Perspective ─────────────────────────────────────────────────
function ReviewSection() {
  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: "#fff" }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <GroupHeading label="Review" accent={COLORS.yellow} />
        </FadeIn>

        <FadeIn delay={100}>
          <div
            className="bg-white border-4 p-6 sm:p-8 relative"
            style={{
              borderColor: COLORS.black,
              boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: COLORS.yellow }} />
            <div className="mt-2">
              <h3
                className="text-lg sm:text-xl leading-tight mb-3"
                style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
              >
                Challenges in bridging the gap between protein structure prediction and functional interpretation
              </h3>
              <p className="text-sm leading-relaxed mb-2" style={{ fontWeight: 500, color: "#666" }}>
                <Authors text="Varadi, M., Tsenkov, M., & Velankar, S." />
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>
                  Proteins: Structure, Function, and Bioinformatics, 93(1), 400-410
                </span>
                <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>2023</span>
                <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                <a
                  href="https://doi.org/10.1002/prot.26614"
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs uppercase tracking-wider border-b transition-opacity duration-200 hover:opacity-60"
                  style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
                >
                  DOI: 10.1002/prot.26614
                </a>
              </div>
              <div className="pt-4 border-t-2" style={{ borderColor: COLORS.muted }}>
                <p className="text-sm leading-relaxed" style={{ fontWeight: 500, color: "#444", fontStyle: "italic" }}>
                  A review examining the gap between the explosion of predicted protein structures and the harder problem of extracting functional meaning from them.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── AlphaFold DB Publications ────────────────────────────────────────────
function AlphaFoldDB() {
  const papers = [
    {
      title: "AlphaFold Protein Structure Database 2025: a redesigned interface and updated structural coverage",
      authors: "Bertoni, D., Tsenkov, M., Magana, P., Nair, S., Pidruchna, I., Querino Lima Afonso, M., ... & Velankar, S.",
      journal: "Nucleic Acids Research, gkaf1226",
      year: "2026",
      doi: "10.1093/nar/gkaf1226",
    },
    {
      title: "AlphaFold Protein Structure Database and 3D-Beacons: New Data and Capabilities",
      authors: "Fleming, J., Magana, P., Nair, S., Tsenkov, M., Bertoni, D., Pidruchna, I., Querino Lima Afonso, M., Midlik, A., Paramval, U., Žídek, A., et al.",
      journal: "Journal of Molecular Biology",
      year: "2025",
      doi: "10.1016/j.jmb.2025.168967",
    },
    {
      title: "AlphaFold Protein Structure Database in 2024: providing structure coverage for over 214 million protein sequences",
      authors: "Varadi, M., Bertoni, D., Magana, P., Paramval, U., Pidruchna, I., Radhakrishnan, M., Tsenkov, M., Nair, S., Mirdita, M., Yeo, J., et al.",
      journal: "Nucleic Acids Research",
      year: "2024",
      doi: "10.1093/nar/gkad1011",
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Circle color={COLORS.blue} size={220} className="-top-16 -right-16 opacity-8" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <GroupHeading label="AlphaFold DB" accent={COLORS.blue} />
        </FadeIn>

        <div className="space-y-4">
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className="bg-white border-4 p-5 sm:p-6 relative"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: COLORS.blue }} />
                <div className="pl-3">
                  <h3
                    className="text-base sm:text-lg leading-tight mb-2"
                    style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.01em" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ fontWeight: 500, color: "#666" }}>
                    <Authors text={p.authors} />
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>
                      {p.journal}
                    </span>
                    <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                    <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>{p.year}</span>
                    <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-wider border-b transition-opacity duration-200 hover:opacity-60"
                      style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
                    >
                      DOI: {p.doi}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400}>
          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ fontWeight: 500, color: "#666", fontStyle: "italic" }}
          >
            Database papers documenting the evolution of AlphaFold DB, covering major redesigns, new features (TED domain annotations, Foldseek integration, 3D-Beacons), and expanded structural coverage.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── PhD-Era Publications ─────────────────────────────────────────────────
function PhDResearch() {
  const papers = [
    {
      title: "Ankyrin repeats in context with human population variation",
      authors: "Utgés, J.S., Tsenkov, M.I., Dietrich, N.J.M., MacGowan, S.A., & Barton, G.J.",
      journal: "PLOS Computational Biology",
      year: "2021",
      doi: "10.1371/journal.pcbi.1009335",
    },
    {
      title: "Disease related single point mutations alter the global dynamics of a tetratricopeptide (TPR) alpha-solenoid domain",
      authors: "Llabrés, S., Tsenkov, M.I., MacGowan, S.A., Barton, G.J., & Zachariae, U.",
      journal: "Journal of Structural Biology",
      year: "2020",
      doi: "10.1016/j.jsb.2019.107405",
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: "#fff" }}
    >
      <Square color={COLORS.yellow} size={140} rotate className="-bottom-8 -right-8 opacity-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <GroupHeading label="PhD Research" accent={COLORS.yellow} />
        </FadeIn>

        <div className="space-y-4 mb-4">
          {papers.map((p, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div
                className="bg-white border-4 p-5 sm:p-6 relative"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: COLORS.yellow }} />
                <div className="pl-3">
                  <h3
                    className="text-base sm:text-lg leading-tight mb-2"
                    style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.01em" }}
                  >
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-2" style={{ fontWeight: 500, color: "#666" }}>
                    <Authors text={p.authors} />
                  </p>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>
                      {p.journal}
                    </span>
                    <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                    <span className="text-xs uppercase tracking-wider" style={{ fontWeight: 700, color: "#888" }}>{p.year}</span>
                    <span className="text-xs" style={{ color: "#ccc" }}>|</span>
                    <a
                      href={`https://doi.org/${p.doi}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs uppercase tracking-wider border-b transition-opacity duration-200 hover:opacity-60"
                      style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
                    >
                      DOI: {p.doi}
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Thesis */}
        <FadeIn delay={250}>
          <div
            className="bg-white border-4 p-5 sm:p-6 relative"
            style={{
              borderColor: COLORS.black,
              boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
            }}
          >
            <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: COLORS.red }} />
            <div className="pl-3">
              <div className="flex items-start gap-3 mb-2">
                <span
                  className="shrink-0 px-2 py-0.5 text-xs uppercase tracking-widest border-2"
                  style={{ fontWeight: 700, borderColor: COLORS.red, color: COLORS.red }}
                >
                  Thesis
                </span>
                <h3
                  className="text-base sm:text-lg leading-tight"
                  style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.01em" }}
                >
                  Exploring Human Population Variation in Repeat Proteins
                </h3>
              </div>
              <p className="text-sm leading-relaxed mb-2" style={{ fontWeight: 500, color: "#666" }}>
                <strong style={{ color: COLORS.black }}>Tsenkov, M.I.</strong>
              </p>
              <p className="text-xs mb-2" style={{ fontWeight: 500, color: "#888" }}>
                University of Dundee, School of Life Sciences · Supervisors: Professor Geoffrey Barton &amp; Professor Daan van Aalten · 2022
              </p>
              <a
                href="https://discovery.dundee.ac.uk/files/78684033/Thesis.pdf"
                target="_blank"
                rel="noreferrer"
                className="text-xs uppercase tracking-wider border-b transition-opacity duration-200 hover:opacity-60"
                style={{ fontWeight: 700, color: COLORS.blue, borderColor: COLORS.blue }}
              >
                View PDF
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={350}>
          <p
            className="mt-6 text-sm leading-relaxed"
            style={{ fontWeight: 500, color: "#666", fontStyle: "italic" }}
          >
            Research from the Barton group at the University of Dundee, studying repeat protein evolution through human population genetics and structural analysis.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Full Record Links ────────────────────────────────────────────────────
function FullRecord() {
  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.red }}
          >
            Complete Record
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl uppercase leading-[0.9] mb-10"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Full Publication
            <br />
            List
          </h2>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://orcid.org/0000-0002-4870-239X"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 text-sm uppercase tracking-wider border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontWeight: 700,
                backgroundColor: COLORS.black,
                color: "#fff",
                borderColor: COLORS.black,
                boxShadow: `6px 6px 0px 0px ${COLORS.blue}`,
              }}
            >
              ORCID Profile
            </a>
            <a
              href="https://scholar.google.co.uk/citations?user=QWjBtHUAAAAJ&hl=en"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 text-sm uppercase tracking-wider border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontWeight: 700,
                backgroundColor: "#fff",
                color: COLORS.black,
                borderColor: COLORS.black,
                boxShadow: `6px 6px 0px 0px ${COLORS.red}`,
              }}
            >
              Google Scholar
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────
export default function Publications() {
  return (
    <>
      <PageIntro />
      <FirstAuthor />
      <ReviewSection />
      <AlphaFoldDB />
      <PhDResearch />
      <FullRecord />
      <ContactCTA />
    </>
  )
}
