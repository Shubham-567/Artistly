"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import artists from "@/lib/data/artists.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const categories = ["All", ...new Set(artists.map((a) => a.category))];
const locations = ["All", ...new Set(artists.map((a) => a.location))];
const budgets = ["All", "Below ₹10,000", "₹10,000–₹50,000", "₹50,000+"];

function FilterBlock({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: "All",
    location: "All",
    budget: "All",
  });

  const handleChange = (filed, value) => {
    const updatedFilters = { ...filters, [filed]: value };

    setFilters(updatedFilters);

    if (onFilterChange) {
      onFilterChange(updatedFilters);
    }
  };

  const resetFilters = () => {
    const resetFilters = { category: "All", location: "All", budget: "All" };

    setFilters(resetFilters);

    if (onFilterChange) {
      onFilterChange(resetFilters);
    }
  };

  return (
    <div className='filter-block-wrapper'>
      <div className='filter-block-header'>
        <h2 className='filter-block-title'>Filter Artists</h2>

        <Button onClick={resetFilters} className='text-sm'>
          Reset Filters
        </Button>
      </div>

      <div className='filter-block-grid'>
        {/* Category */}
        <div className='filter-block-item'>
          <Label className='mb-1 text-sm'>Category</Label>

          <Select
            value={filters.category}
            onValueChange={(val) => handleChange("category", val)}>
            <SelectTrigger className='bg-background focus:ring-1 focus:ring-ring w-full'>
              <SelectValue placeholder='Select category' />
            </SelectTrigger>

            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Location */}
        <div className='filter-block-item'>
          <Label className='mb-1 text-sm'>Location</Label>

          <Select
            value={filters.location}
            onValueChange={(val) => handleChange("location", val)}>
            <SelectTrigger className='bg-background focus:ring-1 focus:ring-ring w-full'>
              <SelectValue placeholder='Select location' />
            </SelectTrigger>

            <SelectContent>
              {locations.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Budget */}
        <div className='filter-block-item'>
          <Label className='mb-1 text-sm'>Budget</Label>

          <Select
            value={filters.budget}
            onValueChange={(val) => handleChange("budget", val)}>
            <SelectTrigger className='bg-background focus:ring-1 focus:ring-ring w-full'>
              <SelectValue placeholder='Select budget' />
            </SelectTrigger>

            <SelectContent>
              {budgets.map((cat) => (
                <SelectItem key={cat} value={cat}>
                  {cat}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

export default FilterBlock;
