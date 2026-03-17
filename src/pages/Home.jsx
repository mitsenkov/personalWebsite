import { useEffect } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'
import ContactCTA from '../components/ContactCTA'

// ─── Hero ────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      className="min-h-screen pt-20 sm:pt-24 relative overflow-hidden border-b-4"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        {/* Text panel */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
          <FadeIn>
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4"
              style={{ fontWeight: 700, color: COLORS.red }}
            >
              Structural Bioinformatician · EMBL-EBI × Google DeepMind
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <h1
              className="text-5xl sm:text-6xl lg:text-8xl uppercase leading-[0.9] mb-6"
              style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
            >
              Maxim
              <br />
              Ivanov
              <br />
              Tsenkov
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-md mb-8"
              style={{ fontWeight: 500, color: COLORS.black }}
            >
              The world of protein structures is a treasure trove of biological data.
              I work at the intersection of protein structure, data infrastructure,
              and user-driven tooling, interpreting structural patterns at scale to
              extract biological insight, and building the systems that put that
              knowledge into researchers' hands.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/portfolio"
                className="inline-block px-6 py-3 text-sm uppercase tracking-wider border-4 cursor-pointer transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                style={{
                  fontWeight: 700,
                  backgroundColor: COLORS.red,
                  color: "#fff",
                  borderColor: COLORS.black,
                  boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
                }}
              >
                See My Work
              </Link>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-sm uppercase tracking-wider border-4 cursor-pointer transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                style={{
                  fontWeight: 700,
                  backgroundColor: "#fff",
                  color: COLORS.black,
                  borderColor: COLORS.black,
                  boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
                }}
              >
                Get in Touch
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Geometric composition panel */}
        <div
          className="hidden lg:flex items-center justify-center relative"
          style={{ backgroundColor: COLORS.blue }}
        >
          <div
            className="rounded-full border-4 flex items-center justify-center"
            style={{
              width: 320, height: 320,
              borderColor: "#fff",
              backgroundColor: "rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="border-4"
              style={{
                width: 160, height: 160,
                borderColor: COLORS.yellow,
                transform: "rotate(45deg)",
                backgroundColor: "rgba(240,192,32,0.12)",
              }}
            />
          </div>
          <Circle color={COLORS.red} size={64} className="top-16 right-20 opacity-80" />
          <Square color={COLORS.yellow} size={48} rotate className="bottom-24 left-16 opacity-70" />
          <Triangle color="#fff" size={56} className="top-32 left-28 opacity-40" />
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#fff 2px, transparent 2px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>
      </div>
    </section>
  )
}

// ─── What I Do ───────────────────────────────────────────────────────────
function WhatIDo() {
  const cards = [
    {
      title: "Structural Interpretation at Scale",
      accent: COLORS.red,
      textColor: "#fff",
      body: "I look at entire structural universes of protein families, hundreds or thousands at once, and extract the biological meaning from the pattern. What story are these structures collectively telling? What does that mean for function, for evolution, for a drug target? I find the signal in the structural noise.",
      shape: "circle",
    },
    {
      title: "Pipeline Architecture & Tooling",
      accent: COLORS.blue,
      textColor: "#fff",
      body: "I design and build the infrastructure that makes structural data usable at scale. From the AFDB-Integration toolkit that brings third-party community datasets into AlphaFold DB, to domain annotation pipelines and search integrations (BLAST, Foldseek), I build the systems that connect predicted structures to the researchers who need them.",
      shape: "square",
    },
    {
      title: "Scientific Communication & Representation",
      accent: COLORS.black,
      textColor: COLORS.black,
      body: "I translate structural biology for the people who need to use it. Whether that's presenting AlphaFold DB at ISMB-ECCB (the world's largest bioinformatics conference), running hands-on training workshops, or sitting on expert panels, I bridge the gap between what a tool can do and what a researcher needs to know.",
      shape: "diamond",
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.yellow }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.black }}
          >
            What I Do
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Three Ways
            <br />
            I Work
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1 h-full"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                {/* Top accent stripe */}
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: c.accent }} />
                {/* Corner decoration */}
                <div
                  className="absolute top-4 right-4 w-3 h-3"
                  style={{
                    backgroundColor: c.accent,
                    borderRadius: c.shape === "circle" ? "50%" : "0",
                    transform: c.shape === "diamond" ? "rotate(45deg)" : "none",
                  }}
                />
                <h3
                  className="text-lg sm:text-xl uppercase leading-tight mb-4 mt-2 pr-6"
                  style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
                >
                  {c.title}
                </h3>
                <p
                  className="text-sm sm:text-base leading-relaxed"
                  style={{ fontWeight: 500, color: "#444" }}
                >
                  {c.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── What I'm Working On ─────────────────────────────────────────────────
function WorkingOn() {
  const highlights = [
    {
      label: "EMBL-EBI × Google DeepMind",
      title: "AlphaFold DB",
      body: "Senior Structural Bioinformatician steering the scientific roadmap for the world's most comprehensive open-access database of predicted protein structures. I lead feature development, architect data pipelines, and represent the database to the global research community.",
      linkLabel: "See full experience",
      linkTo: "/experience",
      isExternal: false,
      accent: COLORS.blue,
      shape: "circle",
    },
    {
      label: "Nvidia Collaboration · Preprint",
      title: "Predicted Protein Complexes at Scale",
      body: "First-author work introducing predicted homodimer and heterodimer structures into AlphaFold DB at scale, in collaboration with EMBL-EBI, Google DeepMind, Nvidia, and Seoul National University. The first release of its kind at this scale.",
      linkLabel: "Read preprint",
      linkTo: "https://research.nvidia.com/labs/dbr/assets/data/manuscripts/afdb.html",
      isExternal: true,
      accent: COLORS.red,
      shape: "square",
    },
    {
      label: "The Align Foundation",
      title: "PETase Tournament",
      body: "Team lead in a global open-science competition for AI-guided enzyme engineering. Building supervised ML models to predict PETase activity from amino acid sequences, combining literature mining, dataset curation, and architecture benchmarking with high-throughput experimental validation.",
      linkLabel: "View project",
      linkTo: "/portfolio",
      isExternal: false,
      accent: COLORS.red,
      shape: "square",
    },
    {
      label: "In Development · 2026",
      title: "InsightFold",
      body: "A new initiative for Notebook-Driven Development (NbDD) in structural bioinformatics. InsightFold will equip researchers with modular, programmatic components, Nextflow pipelines, Python libraries, agentic workflows, to support different user journeys that answer biological questions. Early stage, building in public.",
      linkLabel: "Follow progress",
      linkTo: "/portfolio",
      isExternal: false,
      accent: COLORS.blue,
      shape: "circle",
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Triangle color={COLORS.yellow} size={160} className="-top-4 -right-8 opacity-20" />
      <Circle color={COLORS.blue} size={200} className="-bottom-20 -left-20 opacity-8" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.red }}
          >
            Currently
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            What I'm
            <br />
            Working On
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {highlights.map((h, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1 h-full flex flex-col"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                {/* Left accent stripe */}
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: h.accent }} />
                {/* Corner decoration */}
                <div
                  className="absolute top-4 right-4 w-3 h-3"
                  style={{
                    backgroundColor: h.accent,
                    borderRadius: h.shape === "circle" ? "50%" : "0",
                    transform: h.shape === "diamond" ? "rotate(45deg)" : "none",
                  }}
                />

                <div className="pl-4 flex flex-col flex-1">
                  <p
                    className="text-xs uppercase tracking-widest mb-2"
                    style={{ fontWeight: 700, color: "#888" }}
                  >
                    {h.label}
                  </p>
                  <h3
                    className="text-xl sm:text-2xl uppercase leading-tight mb-3"
                    style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
                  >
                    {h.title}
                  </h3>
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-5 flex-1"
                    style={{ fontWeight: 500, color: "#555" }}
                  >
                    {h.body}
                  </p>

                  {h.linkTo ? (
                    h.isExternal ? (
                      <a
                        href={h.linkTo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b-2 pb-0.5 self-start transition-opacity duration-200 hover:opacity-60"
                        style={{
                          fontWeight: 700,
                          color: h.accent,
                          borderColor: h.accent,
                        }}
                      >
                        {h.linkLabel}
                        <span style={{ fontSize: "10px" }}>→</span>
                      </a>
                    ) : (
                      <Link
                        to={h.linkTo}
                        className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b-2 pb-0.5 self-start transition-opacity duration-200 hover:opacity-60"
                        style={{
                          fontWeight: 700,
                          color: h.accent,
                          borderColor: h.accent,
                        }}
                      >
                        {h.linkLabel}
                        <span style={{ fontSize: "10px" }}>→</span>
                      </Link>
                    )
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest pb-0.5 self-start"
                      style={{ fontWeight: 700, color: "#aaa" }}
                    >
                      {h.linkLabel}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const location = useLocation()

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    const section = params.get('s')
    if (section) {
      setTimeout(() => {
        const el = document.getElementById(section)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])

  return (
    <>
      <Hero />
      <WhatIDo />
      <WorkingOn />
      <ContactCTA />
    </>
  )
}
