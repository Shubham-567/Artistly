"use client";

import ArtistHero from "@/sections/ArtistHero";
import artists from "@/lib/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import { useState } from "react";
import FilterBlock from "@/components/FilterBlock ";

function page() {
  const [filteredArtists, setFilteredArtists] = useState(artists);

  const handleFilterChange = (filters) => {
    const result = artists.filter((artist) => {
      const category = artist.category.toLowerCase();
      const location = artist.location.toLowerCase();
      const priceRange = artist.priceRange.toLowerCase();

      // Convert "₹10,000–₹50,000" to [10000, 50000]
      const [minPrice, maxPrice] = priceRange
        .replace(/₹|,/g, "")
        .split("-")
        .map((value) => parseInt(value.trim()));

      const isCategoryMatch =
        filters.category === "All" ||
        category.includes(filters.category.toLowerCase());

      const isLocationMatch =
        filters.location === "All" ||
        location === filters.location.toLowerCase();

      const isBudgetMatch =
        filters.budget === "All" ||
        (filters.budget === "Below ₹10,000" && minPrice < 10000) ||
        (filters.budget === "₹10,000–₹50,000" &&
          minPrice >= 10000 &&
          (maxPrice ?? minPrice) <= 50000) ||
        (filters.budget === "₹50,000+" && minPrice > 50000);

      return isCategoryMatch && isLocationMatch && isBudgetMatch;
    });

    setFilteredArtists(result);
  };

  return (
    <>
      {/* Hero section with Search input */}
      <ArtistHero setFilteredArtists={setFilteredArtists} />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        {/* Filter Controls */}
        <FilterBlock onFilterChange={handleFilterChange} />

        {/* Artist Cards */}
        <div
          id='artist-grid'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist, index) => (
              <ArtistCard key={index} artist={artist} />
            ))
          ) : (
            <p className='text-muted-foreground col-span-full text-center'>
              No artists found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default page;
