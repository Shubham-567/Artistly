"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, X } from "lucide-react";
import { useState } from "react";
import artists from "@/lib/data/artists.json";

function ArtistHero({ setFilteredArtists }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    const lowerSearchQuery = searchQuery.toLowerCase().trim();

    const result = artists.filter((artist) => {
      const name = artist.name?.toLowerCase() || "";
      const category = artist.category?.toLowerCase() || "";
      const location = artist.location?.toLowerCase() || "";

      return (
        name.includes(lowerSearchQuery) ||
        category.includes(lowerSearchQuery) ||
        location.includes(lowerSearchQuery)
      );
    });

    setFilteredArtists(result);

    const cardGrid = document.getElementById("artist-grid");

    if (cardGrid && searchQuery) {
      cardGrid.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClear = () => {
    setSearchQuery("");

    setFilteredArtists(artists);
  };

  return (
    <section className='artist-hero-section'>
      <div className='artist-hero-inner'>
        <Badge
          variant='secondary'
          className='text-sm mb-4 py-2 px-3 inline-flex items-center gap-2 text-primary bg-primary/10'>
          <Sparkles className='size-5' />
          Discover Talent
        </Badge>

        <h1 className='heading-xl mb-4'>
          Find the Perfect Artist for Your Next Event
        </h1>

        <p className='subtext-base mb-8'>
          Browse our verified talent pool of singers, DJs, dancers, speakers and
          more. Filter by category, budget, or location to find your match.
        </p>

        <div className='artist-hero-search-wrapper shadow-lg'>
          <Input
            type='text'
            placeholder='Search artists, category or location...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            className='artist-hero-search-input py-6'
          />

          <div className='artist-hero-button-group'>
            {searchQuery && (
              <Button
                size='icon'
                variant='outline'
                onClick={handleClear}
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
