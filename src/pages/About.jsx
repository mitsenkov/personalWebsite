import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'

// ─── Hero / Avatar Intro ─────────────────────────────────────────────────
function HeroAbout() {
  return (
    <section
      id="story"
      className="min-h-screen pt-20 sm:pt-24 relative overflow-hidden border-b-4"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 min-h-[calc(100vh-5rem)]">
        {/* Avatar panel */}
        <div
          className="lg:col-span-2 flex items-center justify-center relative py-12 lg:py-0"
          style={{ backgroundColor: COLORS.yellow }}
        >
          <FadeIn>
            <div className="relative">
              <div
                className="border-4 relative z-10 overflow-hidden"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `8px 8px 0px 0px ${COLORS.black}`,
                  width: 280,
                  height: 280,
                }}
              >
                <img
                  src="/lego_maxim_bioinformatician.jpeg"
                  alt="Maxim Tsenkov — Lego avatar"
                  className="w-full h-full object-cover"
                />
              </div>
              <Circle color={COLORS.red} size={36} className="-top-4 -right-4 z-20" />
              <Square color={COLORS.blue} size={28} rotate className="-bottom-3 -left-3 z-20" />
            </div>
          </FadeIn>
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#121212 2px, transparent 2px)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Intro text */}
        <div className="lg:col-span-3 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16 lg:py-24 relative">
          <Circle color={COLORS.blue} size={180} className="-top-12 -right-12 opacity-8" />
          <FadeIn>
            <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-4" style={{ fontWeight: 700, color: COLORS.red }}>
              About Me
            </p>
          </FadeIn>
          <FadeIn delay={100}>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl uppercase leading-[0.9] mb-8"
              style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
            >
              The Story
              <br />
              <span style={{ color: COLORS.blue }}>Behind</span>
              <br />
              The Code
            </h1>
          </FadeIn>
          <FadeIn delay={200}>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl mb-5" style={{ fontWeight: 500, color: COLORS.black }}>
              I'm Maxim — a structural bioinformatician based in London, currently
              steering the science behind AlphaFold DB at EMBL-EBI in collaboration
              with Google DeepMind. I spend my days thinking about protein structures,
              building pipelines that make sense of 214 million+ models, and finding
              ways to put that knowledge into the hands of researchers worldwide.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ fontWeight: 500, color: "#555" }}>
              But the path here was anything but straight. It started with plants,
              parasites, a microscope, and a terminal window that changed everything.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

// ─── Origin Story ────────────────────────────────────────────────────────
function OriginStory() {
  return (
    <section
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: "#fff" }}
    >
      <Triangle color={COLORS.yellow} size={120} className="-top-2 right-16 opacity-15" />
      <Square color={COLORS.red} size={100} rotate className="-bottom-8 -left-8 opacity-10" />

      <div className="max-w-4xl mx-auto relative z-10">
        <FadeIn>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3" style={{ fontWeight: 700, color: COLORS.yellow }}>
            How It All Started
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl uppercase leading-[0.9] mb-10 lg:mb-14"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            From Wet Lab
            <br />
            <span style={{ color: COLORS.red }}>To Dry Lab</span>
          </h2>
        </FadeIn>

        <div className="space-y-8">
          <FadeIn delay={100}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS.red }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                My Wellcome Trust PhD programme at the University of Dundee was designed for
                exploration — twelve-week rotations that let you dive headfirst into completely
                different worlds of biology. I sequenced RNA in <em>Arabidopsis thaliana</em> using
                Nanopore technology. I cultured <em>Trypanosoma brucei</em> in a category 3 lab,
                studying its molecular pathways up close. Every rotation was a new adventure.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4" style={{ backgroundColor: COLORS.blue }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                Then I landed in the Barton group with Professor Geoffrey Barton, and
                tried programming for the first time. My PhD project was, admittedly,
                overly ambitious — amalgamating neurodevelopment and cell culture with
                computational data analysis to study OGT (O-GlcNAc transferase). When
                I was nudged to explore that same protein through an established
                computational approach in the group, something clicked.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4" style={{ backgroundColor: COLORS.yellow, transform: "rotate(45deg)" }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                The work involved studying human population genetics in the context of
                sequence conservation across evolution. I fell in love with programming —
                and with the world of TPRs, or TetratricoPeptide Repeats. That spark
                set me off on a path of self-taught coding, building pipelines, and
                eventually making the leap to bioinformatics full-time. I haven't
                looked back since.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Pull quote */}
        <FadeIn delay={400}>
          <div
            className="mt-12 border-4 p-6 sm:p-8 relative"
            style={{
              borderColor: COLORS.black,
              backgroundColor: COLORS.blue,
              boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
            }}
          >
            <div className="absolute -top-4 left-6">
              <span className="text-5xl leading-none" style={{ fontWeight: 900, color: COLORS.yellow }}>"</span>
            </div>
            <p
              className="text-lg sm:text-xl lg:text-2xl leading-snug pt-2"
              style={{ fontWeight: 700, color: "#fff" }}
            >
              I fell in love with programming and the world of TPRs.
              And that's how I set off into the world of self-taught coding.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

// ─── Timeline ────────────────────────────────────────────────────────────
function Timeline() {
  const events = [
    { year: "2014", title: "BSc Molecular Genetics", desc: "Began at the University of Dundee, School of Life Sciences.", color: COLORS.yellow, shape: "square" },
    { year: "2017", title: "First Class Honours", desc: "Graduated with First Class Honours and entered the Wellcome Trust 4-Year PhD Programme.", color: COLORS.red, shape: "circle" },
    { year: "2017–18", title: "Rotations", desc: "Explored Nanopore RNA sequencing in plants, Trypanosoma brucei cell culture, and found my home in computational biology.", color: COLORS.blue, shape: "diamond" },
    { year: "2018", title: "The Barton Group", desc: "Joined Professor Geoffrey Barton's lab. First encounter with programming. Studied OGT and TetratricoPeptide Repeats.", color: COLORS.yellow, shape: "circle" },
    { year: "2022", title: "PhD Completed", desc: "Developed a general method for studying repeat protein evolution using human population variation and structural data.", color: COLORS.red, shape: "square" },
    { year: "2023", title: "EMBL-EBI × DeepMind", desc: "Joined the Protein Data Bank in Europe as Senior Structural Bioinformatician, steering AlphaFold DB's scientific roadmap.", color: COLORS.blue, shape: "circle" },
    { year: "2025", title: "PETase Tournament", desc: "Took on the role of Team Lead in a global AI-guided enzyme engineering competition with The Align Foundation.", color: COLORS.yellow, shape: "diamond" },
  ]

  return (
    <section
      id="journey"
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.red }}
    >
      <div className="max-w-5xl mx-auto relative z-10">
        <FadeIn>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3" style={{ fontWeight: 700, color: COLORS.yellow }}>
            A Decade in Science
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: "#fff", letterSpacing: "-0.04em" }}
          >
            The Journey
          </h2>
        </FadeIn>

        <div className="relative">
          <div
            className="hidden sm:block absolute left-8 top-0 bottom-0 w-1"
            style={{ backgroundColor: "rgba(255,255,255,0.3)" }}
          />

          <div className="space-y-6">
            {events.map((ev, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="flex items-start gap-5 sm:gap-8">
                  <div className="shrink-0 w-16 sm:w-16 text-right relative z-10">
                    <div
                      className="hidden sm:flex items-center justify-center w-16 h-10 border-2"
                      style={{
                        borderColor: "#fff",
                        backgroundColor: ev.color,
                        borderRadius: ev.shape === "circle" ? "9999px" : "0",
                        transform: ev.shape === "diamond" ? "rotate(45deg)" : "none",
                      }}
                    >
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{
                          fontWeight: 900,
                          color: ev.color === COLORS.yellow ? COLORS.black : "#fff",
                          transform: ev.shape === "diamond" ? "rotate(-45deg)" : "none",
                          fontSize: "10px",
                        }}
                      >
                        {ev.year}
                      </span>
                    </div>
                    <span className="sm:hidden text-xs uppercase tracking-wider" style={{ fontWeight: 900, color: COLORS.yellow }}>
                      {ev.year}
                    </span>
                  </div>

                  <div
                    className="flex-1 bg-white border-4 p-5 sm:p-6 relative transition-transform duration-200 hover:-translate-y-1"
                    style={{
                      borderColor: COLORS.black,
                      boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                    }}
                  >
                    <div
                      className="absolute top-3 right-3 w-3 h-3"
                      style={{
                        backgroundColor: ev.color,
                        borderRadius: ev.shape === "circle" ? "50%" : "0",
                        transform: ev.shape === "diamond" ? "rotate(45deg)" : "none",
                      }}
                    />
                    <h3
                      className="text-lg sm:text-xl uppercase mb-1"
                      style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.02em" }}
                    >
                      {ev.title}
                    </h3>
                    <p className="text-sm sm:text-base leading-relaxed" style={{ fontWeight: 500, color: "#555" }}>
                      {ev.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Interests & Hobbies ─────────────────────────────────────────────────
function Interests() {
  const hobbies = [
    {
      icon: "✈️",
      title: "Travelling",
      desc: "Whether it's a conference in Tokyo or a weekend hike in the Highlands, I'm happiest when exploring somewhere new. Work takes me around the world — and I always make time to see what's beyond the venue.",
      color: COLORS.blue,
    },
    {
      icon: "🍳",
      title: "Cooking",
      desc: "My true passion outside the lab. I can spend hours at the kitchen counter, working through a recipe from scratch. There's something deeply satisfying about building a meal from raw ingredients — not unlike building a pipeline, honestly.",
      color: COLORS.red,
    },
    {
      icon: "🧗",
      title: "Bouldering & Gym",
      desc: "I love the problem-solving aspect of bouldering — reading a route, figuring out the sequence, then executing it. The gym keeps the rest in balance. Hiking rounds it out when I want something longer and slower.",
      color: COLORS.yellow,
    },
    {
      icon: "🌱",
      title: "Plants & Gardening",
      desc: "From studying Arabidopsis in the lab to nurturing plants at home — some things come full circle. There's a quiet joy in watching something grow that you've tended to.",
      color: COLORS.blue,
    },
  ]

  return (
    <section
      id="interests"
      className="border-b-4 py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <Circle color={COLORS.yellow} size={200} className="-bottom-16 -right-16 opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] mb-3" style={{ fontWeight: 700, color: COLORS.blue }}>
            Beyond the Terminal
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl uppercase leading-[0.9] mb-12 lg:mb-16"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            When I'm Not
            <br />
            <span style={{ color: COLORS.red }}>Writing Code</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {hobbies.map((h, i) => (
            <FadeIn key={i} delay={i * 120}>
              <div
                className="bg-white border-4 p-6 sm:p-8 relative transition-transform duration-200 hover:-translate-y-1 h-full"
                style={{
                  borderColor: COLORS.black,
                  boxShadow: `6px 6px 0px 0px ${COLORS.black}`,
                }}
              >
                <div className="absolute top-0 left-0 w-full h-2" style={{ backgroundColor: h.color }} />
                <div
                  className="absolute top-4 right-4 w-3 h-3"
                  style={{
                    backgroundColor: h.color,
                    borderRadius: i % 2 === 0 ? "50%" : "0",
                    transform: i === 2 ? "rotate(45deg)" : "none",
                  }}
                />
                <div className="text-3xl mb-4 mt-2">{h.icon}</div>
                <h3
                  className="text-lg sm:text-xl uppercase mb-3"
                  style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.01em" }}
                >
                  {h.title}
                </h3>
                <p className="text-sm sm:text-base leading-relaxed" style={{ fontWeight: 500, color: "#555" }}>
                  {h.desc}
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
function ContactCTA() {
  return (
    <section
      className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      style={{ backgroundColor: COLORS.yellow }}
    >
      <Circle color={COLORS.red} size={180} className="-top-12 -left-12 opacity-25" />
      <Square color={COLORS.blue} size={120} rotate className="-bottom-8 -right-8 opacity-25" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <FadeIn>
          <h2
            className="text-3xl sm:text-4xl lg:text-6xl uppercase leading-[0.9] mb-6"
            style={{ fontWeight: 900, color: COLORS.black, letterSpacing: "-0.04em" }}
          >
            Say Hello
          </h2>
        </FadeIn>
        <FadeIn delay={100}>
          <p className="text-base sm:text-lg leading-relaxed mb-10" style={{ fontWeight: 500, color: COLORS.black }}>
            Whether it's about proteins, pipelines, or the best way to slow-cook a ragù — I'd love to hear from you.
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
export default function About() {
  return (
    <>
      <HeroAbout />
      <OriginStory />
      <Timeline />
      <Interests />
      <ContactCTA />
    </>
  )
}
