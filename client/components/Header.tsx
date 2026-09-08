import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function Header({
  variant = "solid",
}: {
  variant?: "solid" | "overlay";
}) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const isOverlay = variant === "overlay";

  return (
    <header
      className={cn(
        "absolute inset-x-0 top-0 z-30 w-full",
        !isOverlay && "relative bg-brand-cream",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 sm:px-10 lg:px-[77px]">
        <Link
          to="/"
          className={cn(
            "font-display italic text-xl tracking-tight",
            isOverlay ? "text-white" : "text-brand-forest",
          )}
        >
          Chilliwack Juice Co
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-lg tracking-[-0.03em] transition-opacity hover:opacity-70",
                isOverlay ? "text-white" : "text-brand-forest",
                pathname === link.href && "font-semibold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden",
            isOverlay ? "text-white" : "text-brand-forest",
          )}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <nav className="mx-6 mb-4 flex flex-col gap-4 rounded-2xl bg-white/95 p-6 shadow-lg md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setOpen(false)}
              className="text-lg tracking-[-0.03em] text-brand-forest"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
