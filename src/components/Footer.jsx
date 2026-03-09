import { COLORS } from '../theme'

export default function Footer() {
  return (
    <footer
      className="py-10 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: COLORS.black }}
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full" style={{ backgroundColor: COLORS.red }} />
          <div className="w-4 h-4" style={{ backgroundColor: COLORS.blue }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "8px solid transparent",
              borderRight: "8px solid transparent",
              borderBottom: `14px solid ${COLORS.yellow}`,
            }}
          />
          <span
            className="ml-2 text-sm uppercase tracking-widest"
            style={{ fontWeight: 700, color: "#fff" }}
          >
            Maxim Tsenkov
          </span>
        </div>
        <p className="text-xs" style={{ fontWeight: 500, color: "#888" }}>
          © {new Date().getFullYear()} — London, United Kingdom
        </p>
      </div>
    </footer>
  )
}
