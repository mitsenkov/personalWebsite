import { COLORS } from '../theme'
import { Circle, Square } from './Decorations'
import FadeIn from './FadeIn'

export default function ContactCTA() {
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
            Whether it's about protein structures, pipeline architecture, or building something new, I'm always up for a conversation.
          </p>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
              ORCID
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={300}>
          <div className="flex items-center justify-center gap-6 mb-5">
            <a
              href="https://www.linkedin.com/in/maxim-ivanov-tsenkov/"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest border-b-2 pb-0.5 transition-opacity duration-200 hover:opacity-60"
              style={{ fontWeight: 700, color: COLORS.black, borderColor: COLORS.black }}
            >
              LinkedIn
            </a>
            <span style={{ color: COLORS.black, fontWeight: 900 }}>·</span>
            <a
              href="https://bsky.app/profile/mitsenkov.bsky.social"
              target="_blank"
              rel="noreferrer"
              className="text-sm uppercase tracking-widest border-b-2 pb-0.5 transition-opacity duration-200 hover:opacity-60"
              style={{ fontWeight: 700, color: COLORS.black, borderColor: COLORS.black }}
            >
              Bluesky
            </a>
          </div>
          <p
            className="text-xs uppercase tracking-[0.2em]"
            style={{ fontWeight: 500, color: "#555" }}
          >
            Follow along as I share what I'm learning and building.
          </p>
        </FadeIn>
      </div>
    </section>
  )
}
