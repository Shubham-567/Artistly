"use client";

import { ArrowUp, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className='footer'>
      <div className='footer-inner'>
        <p className='text-sm'>
          © {new Date().getFullYear()} Artistly. All rights reserved.
        </p>

        <div className='footer-social-group'>
          <a
            href='https://x.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-social-link'
            aria-label='Twitter'>
            <Twitter className='size-4' />
          </a>

          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-social-link'
            aria-label='Instagram'>
            <Instagram className='size-4' />
          </a>

          <a
            href='https://github.com/Shubham-567'
            target='_blank'
            rel='noopener noreferrer'
            className='footer-social-link'
            aria-label='Github'>
            <Github className='size-4' />
          </a>

          <Button
            variant='outline'
            size='icon'
            onClick={scrollToTop}
            className='rounded-full bg-primary/10 text-primary hover:primary/20 hover:shadow-md transition-all'
            aria-label='Back to top'>
            <ArrowUp className='size-4' />
          </Button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
