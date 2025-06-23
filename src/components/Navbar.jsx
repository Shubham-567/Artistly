"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";
import { X, Menu } from "lucide-react";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Artists",
    href: "/artists",
  },
  {
    label: "Onboard",
    href: "/onboard",
  },
  {
    label: "Dashboard",
    href: "/dashboard",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='navbar-container'>
      <div className='navbar-inner'>
        <Link href='/' className='navbar-logo'>
          Artistly
        </Link>

        <div className='navbar-links'>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className='navbar-link'>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon*/}
        <div className='md:hidden'>
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {isOpen && (
        <div className='navbar-mobile-menu'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='navbar-mobile-link'
              onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
