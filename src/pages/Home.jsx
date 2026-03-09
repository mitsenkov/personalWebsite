import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'

// ─── Hero ────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen pt-20 sm:pt-24 relative overflow-hidden border-b-4"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)]">
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative z-10">
          <FadeIn>
            <p
              className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4"
              style={{ fontWeight: 700, color: COLORS.red }}
            >
              Structural Bioinformatician
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
              <span style={{ color: COLORS.blue }}>Tsenkov</span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p
              className="text-base sm:text-lg leading-relaxed max-w-md mb-8"
              style={{ fontWeight: 500, color: COLORS.black }}
            >
              Senior Bioinformatician at EMBL-EBI &amp; Google DeepMind, steering
              the scientific roadmap for AlphaFold DB — the world's most
              comprehensive open-access database of protein structure predictions.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-wrap gap-4">
              <a
                href="#experience"
                className="inline-block px-6 py-3 text-sm uppercase tracking-wider border-2 cursor-pointer transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
                style={{
                  fontWeight: 700,
                  backgroundColor: COLORS.red,
                  color: "#fff",
                  borderColor: COLORS.black,
                  boxShadow: `4px 4px 0px 0px ${COLORS.black}`,
                }}
              >
                View Experience
              </a>
              <a
                href="#contact"
                className="inline-block px-6 py-3 text-sm uppercase tracking-wider border-2 cursor-pointer transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
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

        {/* Geometric composition */}
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

// ─── Stats Bar ───────────────────────────────────────────────────────────
function Stats() {
  const stats = [
    { value: "214M+", label: "Protein Models", color: COLORS.red },
    { value: "15+", label: "Global Talks", color: COLORS.blue },
    { value: "5+", label: "Publications", color: COLORS.yellow },
    { value: "8+", label: "Years in Research", color: COLORS.red },
  ]
  return (
    <section
      className="border-b-4"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.yellow }}
    >
      <div
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 divide-x-0 sm:divide-x-4 divide-y-4 sm:divide-y-0"
        style={{ borderColor: COLORS.black }}
      >
        {stats.map((s, i) => (
          <FadeIn key={i} delay={i * 100}>
            <div className="px-6 py-8 sm:py-10 text-center relative">
              <p
                className="text-3xl sm:text-4xl lg:text-5xl uppercase"
                style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.03em" }}
              >
                {s.value}
              </p>
              <p
                className="text-xs sm:text-sm uppercase tracking-[0.2em] mt-2"
                style={{ fontWeight: 700, color: COLORS.black }}
              >
                {s.label}
              </p>
              <div
                className="absolute top-3 right-3 w-3 h-3"
                style={{
                  backgroundColor: i % 3 === 0 ? COLORS.red : i % 3 === 1 ? COLORS.blue : COLORS.black,
                  borderRadius: i % 2 === 0 ? "50%" : "0",
                  transform: i === 2 ? "rotate(45deg)" : "none",
                }}
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}

// ─── Experience ──────────────────────────────────────────────────────────
function Experience() {
  const roles = [
    {
      period: "Jan 2023 – Present",
      title: "AlphaFold DB Senior Structural Bioinformatician",
      org: "Protein Data Bank in Europe (EMBL-EBI) · Google DeepMind",
      location: "Hinxton, Cambridge",
      color: COLORS.blue,
      highlights: [
        "Lead Bioinformatician steering the scientific roadmap for AlphaFold DB, architecting high-throughput pipelines and translating user needs into actionable features.",
        "Feature owner of TED domain annotations — delivered a complete ingestion-to-UI pipeline overlaying domain boundaries on every AlphaFold model (> 214 M entries).",
        "Led integration of BLAST and Foldseek tools for live and precomputed search, designing scalable pipelines with VMs, Redis, Celery, and Python.",
        "Represented AlphaFold DB globally, presenting at 15+ conferences and training courses.",
      ],
    },
    {
      period: "Sep 2025 – Present",
      title: "Team Lead & Bioinformatician — PETase Tournament",
      org: "The Align Foundation · Open-Science Protein Engineering Competition",
      location: "Remote",
      color: COLORS.red,
      highlights: [
        "Participant in a global benchmark for AI-guided enzyme engineering paired with high-throughput experimental validation.",
        "Leading development of supervised ML models to predict PETase activity, including literature mining, training-set curation, and architecture benchmarking.",
      ],
    },
    {
      period: "Sep 2017 – 2022",
      title: "PhD Researcher — Structural Bioinformatics",
      org: "University of Dundee · Wellcome Trust 4-Year Programme",
      location: "Dundee, UK",
      color: COLORS.yellow,
      highlights: [
        "Developed a general method for studying function and evolution of repeat proteins using human population variation and protein structural data.",
        "Built a semi-automated Python pipeline integrating Biopython, Jalview, UCSF ChimeraX, SciPy, Scikit-learn, and Matplotlib.",
        "Contributed research findings to publications, seminars, and international conferences.",
      ],
    },
  ]

  return (
    <section
      id="experience"
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Circle color={COLORS.yellow} size={240} className="-top-20 -right-20 opacity-10" />
      <Square color={COLORS.blue} size={160} rotate className="-bottom-10 -left-10 opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.red }}
          >
            Career
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Experience
          </h2>
        </FadeIn>

        <div className="space-y-8">
          {roles.map((r, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="border-4 bg-white p-6 sm:p-8 lg:p-10 relative transition-transform duration-200 hover:-translate-y-1"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `8px 8px 0px 0px ${COLORS.black}`,
                }}
              >
                <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: r.color }} />
                <div
                  className="absolute top-4 right-4 w-4 h-4"
                  style={{
                    backgroundColor: r.color,
                    borderRadius: i === 0 ? "50%" : "0",
                    transform: i === 2 ? "rotate(45deg)" : "none",
                  }}
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4 pl-4">
                  <div>
                    <h3
                      className="text-xl sm:text-2xl uppercase"
                      style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
                    >
                      {r.title}
                    </h3>
                    <p className="text-sm sm:text-base mt-1" style={{ fontWeight: 700, color: r.color }}>
                      {r.org}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-xs uppercase tracking-widest" style={{ fontWeight: 700, color: COLORS.black }}>
                      {r.period}
                    </p>
                    <p className="text-xs mt-0.5" style={{ fontWeight: 500, color: "#666" }}>
                      {r.location}
                    </p>
                  </div>
                </div>

                <ul className="pl-4 space-y-2 mt-4">
                  {r.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span
                        className="mt-2 block shrink-0"
                        style={{
                          width: 8, height: 8,
                          backgroundColor: r.color,
                          borderRadius: j % 2 === 0 ? "50%" : "0",
                          transform: j === 2 ? "rotate(45deg)" : "none",
                        }}
                      />
                      <span
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ fontWeight: 500, color: COLORS.black }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Skills ──────────────────────────────────────────────────────────────
function Skills() {
  const groups = [
    {
      label: "Bioinformatics",
      color: COLORS.red,
      items: ["AlphaFold DB", "BLAST", "Foldseek", "Biopython", "Jalview", "ChimeraX"],
    },
    {
      label: "Languages & Tools",
      color: COLORS.blue,
      items: ["Python", "Redis", "Celery", "Jupyter", "SciPy", "Scikit-learn", "Matplotlib"],
    },
    {
      label: "Domains",
      color: COLORS.yellow,
      items: ["Protein Structure", "Repeat Proteins", "Enzyme Engineering", "ML for Biology", "Population Genetics"],
    },
  ]

  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.blue }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.yellow }}
          >
            Toolkit
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}
          >
            Skills &amp;
            <br />
            Technologies
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {groups.map((g, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                <div
                  className="absolute top-3 right-3 w-3 h-3"
                  style={{
                    backgroundColor: g.color,
                    borderRadius: i === 0 ? "50%" : "0",
                    transform: i === 2 ? "rotate(45deg)" : "none",
                  }}
                />
                <h3
                  className="text-base uppercase tracking-widest mb-5 pb-3 border-b-2"
                  style={{ fontWeight: 700, color: g.color, borderColor: COLORS.black }}
                >
                  {g.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="inline-block text-xs uppercase tracking-wider px-3 py-1.5 border-2"
                      style={{ fontWeight: 700, borderColor: COLORS.black, color: COLORS.black }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Publications ────────────────────────────────────────────────────────
function Publications() {
  const pubs = [
    {
      authors: "Bertoni, D., Tsenkov, M., Magana, P., Nair, S., et al.",
      title: "AlphaFold Protein Structure Database 2025: a redesigned interface and updated structural coverage",
      journal: "Nucleic Acids Research",
      year: "2025",
    },
    {
      authors: "Varadi, M., Tsenkov, M., & Velankar, S.",
      title: "Challenges in bridging the gap between protein structure prediction and functional interpretation",
      journal: "Proteins: Structure, Function, and Bioinformatics",
      year: "2023",
    },
  ]

  return (
    <section
      id="publications"
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Square color={COLORS.red} size={200} rotate className="-top-16 -right-16 opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.blue }}
          >
            Research Output
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Selected
            <br />
            Publications
          </h2>
        </FadeIn>

        <div className="space-y-6">
          {pubs.map((p, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                <div
                  className="absolute top-3 right-3 w-3 h-3 rounded-full"
                  style={{ backgroundColor: i === 0 ? COLORS.red : COLORS.blue }}
                />
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ fontWeight: 700, color: "#888" }}
                >
                  {p.journal} · {p.year}
                </p>
                <h3
                  className="text-lg sm:text-xl lg:text-2xl leading-tight mb-3"
                  style={{ fontWeight: 900, color: COLORS.black }}
                >
                  {p.title}
                </h3>
                <p className="text-sm" style={{ fontWeight: 500, color: "#555" }}>
                  {p.authors}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={350}>
          <p className="text-sm mt-8" style={{ fontWeight: 500, color: "#666" }}>
            Full publication list available on{" "}
            <a
              href="https://orcid.org/0000-0002-4870-239X"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: COLORS.blue, fontWeight: 700 }}
            >
              ORCID
            </a>{" "}
            and{" "}
            <a
              href="https://scholar.google.com"
              target="_blank"
              rel="noreferrer"
              className="underline"
              style={{ color: COLORS.blue, fontWeight: 700 }}
            >
              Google Scholar
            </a>
            .
          </p>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Education ───────────────────────────────────────────────────────────
function Education() {
  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.red }}
    >
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <p
            className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3"
            style={{ fontWeight: 700, color: COLORS.yellow }}
          >
            Foundation
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}
          >
            Education
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {[
            {
              degree: "PhD — Structural Bioinformatics",
              programme: "Wellcome Trust 4-Year Programme",
              school: "University of Dundee, School of Life Sciences",
              years: "2017 – 2022",
            },
            {
              degree: "BSc (Hons) Molecular Genetics",
              programme: "First Class Honours",
              school: "University of Dundee, School of Life Sciences",
              years: "2014 – 2017",
            },
          ].map((e, i) => (
            <FadeIn key={i} delay={i * 150}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                <div
                  className="absolute top-3 right-3 w-3 h-3"
                  style={{
                    backgroundColor: i === 0 ? COLORS.blue : COLORS.yellow,
                    borderRadius: i === 0 ? "50%" : "0",
                    transform: i === 1 ? "rotate(45deg)" : "none",
                  }}
                />
                <p
                  className="text-xs uppercase tracking-widest mb-2"
                  style={{ fontWeight: 700, color: "#888" }}
                >
                  {e.years}
                </p>
                <h3
                  className="text-xl sm:text-2xl uppercase leading-tight mb-1"
                  style={{ fontWeight: 900, color: COLORS.black }}
                >
                  {e.degree}
                </h3>
                <p className="text-sm mb-2" style={{ fontWeight: 700, color: COLORS.red }}>
                  {e.programme}
                </p>
                <p className="text-sm" style={{ fontWeight: 500, color: "#555" }}>
                  {e.school}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact CTA ─────────────────────────────────────────────────────────
function Contact() {
  return (
    <section
      id="contact"
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.yellow }}
    >
      <Circle color={COLORS.red} size={200} className="-top-16 -left-16 opacity-30" />
      <Square color={COLORS.blue} size={140} rotate className="-bottom-10 -right-10 opacity-30" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2
            className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-6"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Let's
            <br />
            Connect
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p
            className="text-base sm:text-lg leading-relaxed mb-10"
            style={{ fontWeight: 500, color: COLORS.black }}
          >
            Interested in collaboration on structural biology, protein engineering,
            or AI-driven research? I'd love to hear from you.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:tsenkov.max@gmail.com"
              className="inline-block px-8 py-4 text-sm uppercase tracking-wider border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontWeight: 700,
                backgroundColor: COLORS.black,
                color: "#fff",
                borderColor: COLORS.black,
                boxShadow: `6px 6px 0px 0px ${COLORS.red}`,
              }}
            >
              Email Me
            </a>
            <a
              href="https://orcid.org/0000-0002-4870-239X"
              target="_blank"
              rel="noreferrer"
              className="inline-block px-8 py-4 text-sm uppercase tracking-wider border-4 transition-all duration-200 hover:opacity-90 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none"
              style={{
                fontWeight: 700,
                backgroundColor: "#fff",
                color: COLORS.black,
                borderColor: COLORS.black,
                boxShadow: `6px 6px 0px 0px ${COLORS.blue}`,
              }}
            >
              ORCID Profile
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Page ────────────────────────────────────────────────────────────────
export default function Home() {
  const location = useLocation()

  // Handle anchor scrolling from nav links
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
      <Stats />
      <Experience />
      <Skills />
      <Publications />
      <Education />
      <Contact />
    </>
  )
}
