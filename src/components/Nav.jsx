import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { COLORS } from '../theme'

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Publications", to: "/publications" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Contact", to: "/#contact" },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const handleClick = (to) => {
    setOpen(false)
    // Handle anchor links on the home page
    if (to.startsWith("/#")) {
      const anchor = to.replace("/", "")
      if (location.pathname === "/") {
        const el = document.querySelector(anchor)
        if (el) el.scrollIntoView({ behavior: "smooth" })
      }
      // If we're not on home, React Router will navigate to / first,
      // then we scroll after mount via the hash
    }
  }

  const renderLink = (link) => {
    const isActive =
      link.to === location.pathname ||
      (link.to === "/" && location.pathname === "/")

    // Anchor links on home page
    if (link.to.startsWith("/#")) {
      return (
        <Link
          key={link.label}
          to={link.to.replace("/#", "/?s=")}
          onClick={() => handleClick(link.to)}
          className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity duration-200"
          style={{ fontWeight: 700, color: COLORS.black }}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <Link
        key={link.label}
        to={link.to}
        onClick={() => handleClick(link.to)}
        className="text-sm uppercase tracking-widest hover:opacity-70 transition-opacity duration-200"
        style={{
          fontWeight: 700,
          color: isActive ? COLORS.red : COLORS.black,
        }}
      >
        {link.label}
      </Link>
    )
  }

  const renderMobileLink = (link) => {
    if (link.to.startsWith("/#")) {
      return (
        <Link
          key={link.label}
          to={link.to.replace("/#", "/?s=")}
          onClick={() => handleClick(link.to)}
          className="text-lg uppercase tracking-widest"
          style={{ fontWeight: 700, color: COLORS.black }}
        >
          {link.label}
        </Link>
      )
    }

    return (
      <Link
        key={link.label}
        to={link.to}
        onClick={() => handleClick(link.to)}
        className="text-lg uppercase tracking-widest"
        style={{ fontWeight: 700, color: COLORS.black }}
      >
        {link.label}
      </Link>
    )
  }

  return (
    <nav
      className="fixed top-0 left-0 w-full z-50 border-b-4"
      style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <div className="w-5 h-5 rounded-full" style={{ backgroundColor: COLORS.red }} />
          <div className="w-5 h-5" style={{ backgroundColor: COLORS.blue }} />
          <div
            style={{
              width: 0,
              height: 0,
              borderLeft: "10px solid transparent",
              borderRight: "10px solid transparent",
              borderBottom: `18px solid ${COLORS.yellow}`,
            }}
          />
          <span
            className="ml-2 text-lg sm:text-xl tracking-widest uppercase"
            style={{ fontWeight: 900, color: COLORS.black }}
          >
            MT
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(renderLink)}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu"
        >
          <span
            className="block w-6 h-0.5 transition-transform duration-200"
            style={{
              backgroundColor: COLORS.black,
              transform: open ? "rotate(45deg) translate(3px, 3px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 transition-opacity duration-200"
            style={{
              backgroundColor: COLORS.black,
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 transition-transform duration-200"
            style={{
              backgroundColor: COLORS.black,
              transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t-4 px-6 py-6 flex flex-col gap-4"
          style={{ borderColor: COLORS.black, backgroundColor: COLORS.bg }}
        >
          {NAV_LINKS.map(renderMobileLink)}
        </div>
      )}
    </nav>
  )
}
