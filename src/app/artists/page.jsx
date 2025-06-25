"use client";

import ArtistHero from "@/sections/ArtistHero";
import artists from "@/lib/data/artists.json";
import ArtistCard from "@/components/ArtistCard";
import { useState } from "react";
import FilterBlock from "@/components/FilterBlock ";

function page() {
  const [filtered, setFiltered] = useState(artists);

  const handleFilterChange = (filters) => {
    const result = artists.filter((artist) => {
      const category = artist.category.toLowerCase();
      const location = artist.location.toLowerCase();
      const priceRange = artist.priceRange.toLowerCase();

      // Numerical values from priceRange
      const [min, max] = priceRange
        .replace(/₹|,/g, "") // removing ₹ and ,(commas)
        .split("-")
        .map((value) => parseInt(value.trim()));

      const matchCategory =
        filters.category === "All" ||
        category.includes(filters.category.toLowerCase());

      const matchLocation =
        filters.location === "All" ||
        location === filters.location.toLowerCase();

      const matchBudget =
        filters.budget === "All" ||
        (filters.budget === "Below ₹10,000" && min < 10000) ||
        (filters.budget === "₹10,000–₹50,000" &&
          min >= 10000 &&
          (max ?? min) <= 50000) ||
        (filters.budget === "₹50,000+" && min > 50000);

      return matchCategory && matchLocation && matchBudget;
    });

    setFiltered(result);
  };

  return (
    <>
      {/* Hero section with Search input */}
      <ArtistHero setFiltered={setFiltered} />

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10'>
        {/* Filter Controls */}
        <FilterBlock onFilterChange={handleFilterChange} />

        {/* Artist Cards */}
        <div
          id='artist-grid'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8'>
          {filtered.length > 0 ? (
            filtered.map((artist, index) => (
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
