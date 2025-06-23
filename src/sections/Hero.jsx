import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className='hero-section'>
      <div className='hero-container'>
        {/* Text Content */}

        <div className='hero-content'>
          <h1 className='hero-heading'>
            Book Verified Artists for Your Next Big Event
          </h1>

          <p className='hero-subtext'>
            Artistly helps you discover, connect, and book talented performers
            across categories like singers, dancers, DJs, and more — all in one
            place.
          </p>

          <div className='hero-buttons'>
            <Link href='/artists'>
              <Button size='lg' className='px-6 w-full sm:w-auto'>
                Explore Artists
              </Button>
            </Link>

            <Link href='/onboard'>
              <Button
                size='lg'
                variant='outline'
                className='px-6 w-full sm:w-auto'>
                Onboard as Artist
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className='hero-image-wrapper'>
          <Image
            src='/hero-illustration.png'
            alt='Artist illustration'
            width={200}
            height={300}
            className='hero-image'
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
