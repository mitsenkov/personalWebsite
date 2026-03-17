import { COLORS } from '../theme'
import { Circle, Square, Triangle } from '../components/Decorations'
import FadeIn from '../components/FadeIn'
import ContactCTA from '../components/ContactCTA'

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
                  alt="Maxim Tsenkov, Lego avatar"
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
              I'm Maxim, a structural bioinformatician based in London, currently
              steering the science behind AlphaFold DB at EMBL-EBI in collaboration
              with Google DeepMind. I work at the intersection of protein structure,
              data infrastructure, and biological meaning, interpreting structural
              patterns at scale and building the tools that help researchers worldwide
              make sense of predicted protein structures.
            </p>
          </FadeIn>
          <FadeIn delay={300}>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl" style={{ fontWeight: 500, color: "#555" }}>
              But the path here was anything but straight. It started with cell culture,
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
                Before I ever wrote a line of code, I was deep in experimental biology. As an
                undergraduate at Dundee, I worked on CRISPR/Cas9 gene editing to study chromosome
                dynamics, examined hypoxia-driven gene regulation through Western blotting and cell
                transfection, and spent a summer at Jesus College, Oxford, purifying proteins for
                surface plasmon resonance to study Wnt morphogen signalling. My honours project,
                characterising mutant PML-RARα variants from relapsed leukaemia patients, was
                recognised in the top 10% globally by The Undergraduate Awards, out of over 6,400
                submissions from 47 countries. Every one of these experiences taught me something
                different about how biology works at the bench. I didn't know it yet, but I was
                building the diverse biological foundation that would later make me valuable in ways
                I couldn't have predicted.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={170}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4" style={{ backgroundColor: COLORS.blue }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                My Wellcome Trust PhD programme at the University of Dundee was designed for
                exploration, twelve-week rotations that threw you headfirst into completely
                different worlds of biology. I sequenced RNA in <em>Arabidopsis thaliana</em> using
                Nanopore technology to study molecular pathways. I cultured <em>Trypanosoma brucei</em> in
                a category 3 lab, studying its molecular pathways up close. Each rotation added
                another layer to my understanding of biology across species, systems, and scales.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={240}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4" style={{ backgroundColor: COLORS.yellow, transform: "rotate(45deg)" }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                Then I landed in the Barton group with Professor Geoffrey Barton, and tried
                programming for the first time. My PhD project studied OGT (O-GlcNAc transferase)
                and TetratricoPeptide Repeats through the lens of human population genetics and
                sequence conservation across evolution. Something clicked. I fell in love with
                programming, with the ability to ask biological questions computationally, at a
                scale I could never follow as a wet-lab biologist. I quickly realised I would have
                a bigger reach behind a keyboard, and decided overnight that I should switch over.
                That spark set me on a path of self-taught coding, building pipelines, and
                eventually making the leap to bioinformatics full-time.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={310}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS.red }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                After finishing my PhD, I made a deliberate decision. I'd taught myself to code
                well enough to get research done, but I knew the difference between scrappy scripts
                that solve a problem and proper engineering. So I went back to the fundamentals,
                working through courses on Coursera and Codecademy, unlearning bad habits, and
                picking up the skills I'd need to work at a professional level: cloud
                infrastructure, software engineering practices, tools like GCP. It was a period of
                rebuilding, not from scratch, but from a stronger foundation.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={380}>
            <div className="flex gap-5">
              <div className="shrink-0 mt-2">
                <div className="w-4 h-4" style={{ backgroundColor: COLORS.blue }} />
              </div>
              <p className="text-base sm:text-lg leading-relaxed" style={{ fontWeight: 500, color: COLORS.black }}>
                Then the right door opened. A role on AlphaFold DB at EMBL-EBI, in collaboration
                with Google DeepMind. I gave it everything I had. And two hours before my winter
                graduation ceremony in Dundee, I got the call with the offer. Everything I'd built,
                the biological range from years of experimental work, the computational skills I'd
                rebuilt from the ground up, came together in a role that needed exactly that
                combination.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Pull quote */}
        <FadeIn delay={450}>
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
              Everything I'd built, the biological range from years of experimental work,
              the computational skills I'd rebuilt from the ground up, came together.
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
    { year: "2014",      title: "BSc Molecular Biology",      desc: "Began at the University of Dundee, School of Life Sciences.",                                                                                                                                                              color: COLORS.yellow, shape: "square" },
    { year: "2015-2016", title: "Undergraduate Research",     desc: "CRISPR/Cas9 gene editing, hypoxia research, and a summer research studentship at Jesus College, Oxford, purifying proteins and studying Wnt morphogen signalling.",                                                        color: COLORS.blue,   shape: "circle" },
    { year: "2017",      title: "First Class Honours",        desc: "Graduated with First Class Honours. Honours project on PML-RARα recognised in the top 10% globally by The Undergraduate Awards. Entered the Wellcome Trust 4-Year PhD Programme.",                                        color: COLORS.red,    shape: "square" },
    { year: "2017-18",   title: "PhD Rotations",              desc: "Nanopore RNA sequencing in plants, Trypanosoma brucei cell culture, and the rotation that changed everything, computational biology in the Barton group.",                                                                 color: COLORS.yellow, shape: "circle" },
    { year: "2018",      title: "The Barton Group",           desc: "Joined Professor Geoffrey Barton's lab. First encounter with programming. Studied OGT and TetratricoPeptide Repeats through population genetics and structural data.",                                                     color: COLORS.blue,   shape: "square" },
    { year: "2022",      title: "PhD Completed",              desc: "Developed a general method for studying repeat protein evolution using human population variation and protein structural data.",                                                                                             color: COLORS.red,    shape: "circle" },
    { year: "2022",      title: "The Rebuild",                desc: "A deliberate period of upskilling, unlearning self-taught habits, rebuilding programming foundations, and picking up cloud infrastructure and software engineering practices.",                                             color: COLORS.yellow, shape: "square" },
    { year: "2023",      title: "EMBL-EBI x DeepMind",        desc: "Joined the Protein Data Bank in Europe as Senior Structural Bioinformatician, steering AlphaFold DB's scientific roadmap. Offer received two hours before PhD graduation.",                                               color: COLORS.blue,   shape: "circle" },
    { year: "2025",      title: "PETase Tournament",          desc: "Team Lead in a global AI-guided enzyme engineering competition with The Align Foundation.",                                                                                                                                 color: COLORS.red,    shape: "square" },
    { year: "2026",      title: "Nvidia Collaboration",       desc: "First-author work introducing predicted homodimers at scale into AlphaFold DB, in collaboration with Nvidia.",                                                                                               color: COLORS.yellow, shape: "circle" },
    { year: "2026",      title: "InsightFold",                desc: "Launched a new initiative for Notebook-Driven Development (NbDD) in structural bioinformatics.",                                                                                                                           color: COLORS.blue,   shape: "square" },
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
                <div className="flex items-center gap-5 sm:gap-8">
                  <div className="shrink-0 w-16 sm:w-16 text-right relative z-10">
                    <div
                      className="hidden sm:flex items-center justify-center w-16 h-10 border-2"
                      style={{
                        borderColor: "#fff",
                        backgroundColor: ev.color,
                        borderRadius: ev.shape === "circle" ? "9999px" : "0",
                      }}
                    >
                      <span
                        className="text-xs uppercase tracking-wider"
                        style={{
                          fontWeight: 900,
                          color: ev.color === COLORS.yellow ? COLORS.black : "#fff",
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
      desc: "Whether it's a conference in India or a weekend hike in the Highlands, I'm happiest when exploring somewhere new. Work takes me around the world, and I always make time to see what's beyond the venue.",
      color: COLORS.blue,
    },
    {
      icon: "🍳",
      title: "Cooking",
      desc: "My true passion outside the lab. I can spend hours at the kitchen counter, working through a recipe from scratch. There's something deeply satisfying about building a meal from raw ingredients, the same patience and attention that makes a good pipeline makes a good dish.",
      color: COLORS.red,
    },
    {
      icon: "🧗",
      title: "Bouldering & Gym",
      desc: "I love the problem-solving aspect of bouldering, reading a route, figuring out the sequence, then executing it. The gym keeps the rest in balance. Hiking rounds it out when I want something longer and slower.",
      color: COLORS.yellow,
    },
    {
      icon: "🌱",
      title: "Plants & Gardening",
      desc: "From studying Arabidopsis in the lab to nurturing plants at home, some things come full circle. There's a quiet joy in watching something grow that you've tended to.",
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

        <FadeIn delay={500}>
          <p
            className="mt-10 text-sm sm:text-base text-center"
            style={{ fontWeight: 500, color: "#555" }}
          >
            I speak English, Russian, and Bulgarian.
          </p>
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
