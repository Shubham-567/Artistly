"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
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
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

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

        <div className='md:hidden' ref={menuRef}>
          {/* Mobile Menu Icon*/}
          <Button
            variant='ghost'
            size='icon'
            onClick={() => setIsOpen(!isOpen)}
            aria-label='menu'>
            {isOpen ? <X className='size-6' /> : <Menu className='size-6' />}
          </Button>

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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
