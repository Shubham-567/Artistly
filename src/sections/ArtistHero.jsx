"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, X } from "lucide-react";
import { useState } from "react";

function ArtistHero() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("Search query: ", query);
  };

  return (
    <section className='artist-hero-section'>
      <div className='artist-hero-inner'>
        <Badge
          variant='secondary'
          className='mb-4 py-2 px-3 inline-flex items-center gap-2 text-primary bg-primary/10'>
          <Sparkles className='size-4' />
          Discover Talent
        </Badge>

        <h1 className='artist-hero-title'>
          Find the Perfect Artist for Your Next Event
        </h1>

        <p className='artist-hero-subtext'>
          Browse our verified talent pool of singers, DJs, dancers, speakers and
          more. Filter by category, budget, or location to find your match.
        </p>

        <div className='artist-hero-search-wrapper'>
          <Input
            type='text'
            placeholder='Search artists, category or location...'
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className='artist-hero-search-input py-6'
          />

          <div className='artist-hero-button-group'>
            {query && (
              <Button
                size='icon'
                variant='outline'
                onClick={() => setQuery("")}
                className='size-9'
                aria-label='clear'>
                <X className='size-4' />
              </Button>
            )}

            <Button
              size='icon'
              onClick={handleSearch}
              className='size-9'
              aria-label='search'>
              <Search className='size-4' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ArtistHero;
