import { Badge } from "./ui/badge";
import { MapPin, User } from "lucide-react";
import { Button } from "./ui/button";

function ArtistCard({ artist }) {
  const initials = artist.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <div className='artist-card'>
      {/* Stylized Header with Initials */}
      <div className='artist-header'>
        <div className='artist-avatar'>
          <span>{initials}</span>
        </div>
        <div>
          <h3 className='artist-name'>{artist.name}</h3>
          <Badge className='text-sm px-2 py-0.5 text-primary bg-primary/5 capitalize mt-1'>
            {artist.category}
          </Badge>
        </div>
      </div>

      {/* Info Section */}
      <div className='artist-info'>
        <div className='artist-location'>
          <MapPin className='size-4' />
          <span>{artist.location}</span>
        </div>

        <p className='artist-price'>
          <span>Fee:</span> {artist.priceRange}
        </p>
      </div>

      <Button className='mt-4 w-full'>Ask for Quote</Button>
    </div>
  );
}

export default ArtistCard;
