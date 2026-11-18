import type { NavLink } from "@/domain/models";
import { useState } from "react";
import modellogo from "../../../assets/icons/BarLogo.svg";
import { Icon } from "../atoms/Icon";

interface NavbarProps {
  brand: string;
  links: NavLink[];
  ctaLabel: string;
}

export function Navbar({ brand, links, ctaLabel }: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <nav
      aria-label="Principal"
      className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-surface/60 backdrop-blur-md"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" aria-label={brand}>
          <img src={modellogo} alt="" className="h-24 w-24" />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors duration-300 hover:text-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/20 text-foreground md:hidden"
        >
          <Icon name={open ? "close" : "menu"} size={20} />
        </button>
      </div>

      {open && (
        <div className="border-t border-foreground/10 bg-surface/90 px-6 py-5 backdrop-blur-md md:hidden">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-base font-medium text-foreground/80 hover:text-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
