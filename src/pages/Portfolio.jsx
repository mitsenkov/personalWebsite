import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'
import ContactCTA from '../components/ContactCTA'

// ─── Page Intro ───────────────────────────────────────────────────────────
function PageIntro() {
  return (
    <section
      className="pt-20 sm:pt-24 border-b-4 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Circle color={COLORS.red} size={260} className="-bottom-16 -right-16 opacity-10" />
      <Triangle color={COLORS.blue} size={180} className="-top-4 left-12 opacity-10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.red }}
          >
            Projects &amp; Initiatives
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-8xl uppercase leading-[0.9] mb-6"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Portfolio
          </h1>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{ fontWeight: 500, color: "#555" }}
          >
            This is where I build in public. The projects here sit at the intersection of structural
            bioinformatics, machine learning, and tool development. Some are active, some are just
            getting started. All of them reflect where I'm heading: deeper into protein design,
            agentic workflows, and making structural data more accessible and actionable.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Project Cards ────────────────────────────────────────────────────────
function ProjectCards() {
  const projects = [
    {
      name: "InsightFold",
      tagline: "Notebook-Driven Development for structural bioinformatics",
      description:
        "InsightFold is a new initiative to equip researchers with modular, programmatic components that support different user journeys for answering biological questions. It combines Nextflow pipelines, Python libraries, and agentic workflows into a framework that lets users go from a structural question to a reproducible analysis without starting from scratch. Born out of a gap I identified while working on AlphaFold DB, where users repeatedly needed structured pathways to navigate and interpret predicted structures.",
      technologies: ["Python", "Nextflow", "Jupyter", "Agentic workflows"],
      status: "In development (2026)",
      statusColor: COLORS.blue,
      accent: COLORS.blue,
      link: null,
      linkLabel: "Coming soon",
    },
    {
      name: "PETase Tournament",
      tagline: "AI-guided enzyme engineering in a global open-science competition",
      description:
        "Team lead in The Align Foundation's PETase Tournament, a global benchmark pairing computational protein design with high-throughput experimental validation. I'm building supervised ML models to predict PETase activity from amino acid sequences, combining literature mining to assemble training datasets, curating sequence features, and benchmarking multiple model architectures against competition-provided experimental data.",
      technologies: ["Python", "Scikit-learn", "ML model development", "Sequence analysis"],
      status: "Active (September 2025 to present)",
      statusColor: COLORS.red,
      accent: COLORS.red,
      link: null,
      linkLabel: "The Align Foundation",
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-5xl mx-auto">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.red }}
          >
            Current Projects
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            What I'm
            <br />
            <span style={{ color: COLORS.blue }}>Building</span>
          </h2>
        </FadeIn>

        {/* Grid - designed to accommodate more cards in future */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {projects.map((p, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative flex flex-col h-full"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: p.accent }} />

                <div className="pl-4 flex flex-col flex-1">
                  {/* Status badge */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span
                      className="px-2 py-0.5 text-xs uppercase tracking-widest border-2"
                      style={{ fontWeight: 700, borderColor: p.statusColor, color: p.statusColor }}
                    >
                      {p.status}
                    </span>
                  </div>

                  {/* Name & tagline */}
                  <h3
                    className="text-2xl sm:text-3xl uppercase leading-tight mb-2"
                    style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.03em" }}
                  >
                    {p.name}
                  </h3>
                  <p
                    className="text-sm uppercase tracking-wider mb-4"
                    style={{ fontWeight: 700, color: p.accent }}
                  >
                    {p.tagline}
                  </p>

                  {/* Description */}
                  <p
                    className="text-sm sm:text-base leading-relaxed mb-6 flex-1"
                    style={{ fontWeight: 500, color: "#444" }}
                  >
                    {p.description}
                  </p>

                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.technologies.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 text-xs uppercase tracking-wider border-2"
                        style={{ fontWeight: 700, borderColor: p.accent, color: p.accent }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {p.link ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest border-b-2 pb-0.5 self-start transition-opacity duration-200 hover:opacity-60"
                      style={{ fontWeight: 700, color: p.accent, borderColor: p.accent }}
                    >
                      {p.linkLabel}
                      <span style={{ fontSize: "10px" }}>→</span>
                    </a>
                  ) : (
                    <span
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-widest pb-0.5 self-start"
                      style={{ fontWeight: 700, color: "#bbb" }}
                    >
                      {p.linkLabel}
                    </span>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Future projects element */}
        <FadeIn delay={350}>
          <div
            className="border-4 p-6 sm:p-8 relative overflow-hidden"
            style={{
              borderColor: COLORS.black,
              backgroundColor: COLORS.yellow,
              boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
            }}
          >
            <Square color={COLORS.black} size={60} rotate className="-top-4 -right-4 opacity-10" />
            <Circle color={COLORS.black} size={80} className="-bottom-8 left-32 opacity-8" />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <p
                  className="text-xs uppercase tracking-[0.3em] mb-2"
                  style={{ fontWeight: 700, color: COLORS.black, opacity: 0.6 }}
                >
                  On the horizon
                </p>
                <p
                  className="text-base sm:text-lg"
                  style={{ fontWeight: 700, color: COLORS.black }}
                >
                  More projects in the pipeline. Follow along on LinkedIn and Bluesky to see what's next.
                </p>
              </div>
              <div className="flex gap-4 shrink-0">
                <a
                  href="https://www.linkedin.com/in/maxim-ivanov-tsenkov/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs uppercase tracking-widest border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  style={{
                    fontWeight: 700,
                    backgroundColor: COLORS.black,
                    color: "#fff",
                    borderColor: COLORS.black,
                    boxShadow: `4px 4px 0px 0px ${COLORS.blue}`,
                  }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://bsky.app/profile/mitsenkov.bsky.social"
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 text-xs uppercase tracking-widest border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                  style={{
                    fontWeight: 700,
                    backgroundColor: "#fff",
                    color: COLORS.black,
                    borderColor: COLORS.black,
                    boxShadow: `4px 4px 0px 0px ${COLORS.red}`,
                  }}
                >
                  Bluesky
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────
export default function Portfolio() {
  return (
    <>
      <PageIntro />
      <ProjectCards />
      <ContactCTA />
    </>
  )
}
