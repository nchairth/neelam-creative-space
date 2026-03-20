import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="text-lg font-semibold tracking-tight" style={{ fontFamily: "var(--font-display)" }}>
          NC.
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="mailto:neelamcharitha2004@gmail.com"
          className="hidden md:inline-flex text-sm font-medium tracking-wide border-b border-foreground pb-0.5 hover:text-muted-foreground transition-colors"
        >
          Book A Call ↗
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block nav-link text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="mailto:neelamcharitha2004@gmail.com"
            className="block text-sm font-medium border-b border-foreground pb-0.5 w-fit"
          >
            Book A Call ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
