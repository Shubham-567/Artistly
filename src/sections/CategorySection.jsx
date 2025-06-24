import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const { Music, Theater, Mic, Disc3 } = require("lucide-react");

const categories = [
  {
    title: "Singers",
    icon: <Music className='size-8 text-primary' />,
    description: "Indie vocalists, solo acts & pro bands for your show.",
  },
  {
    title: "Dancers",
    icon: <Theater className='size-8 text-primary' />,
    description: "Energetic, professional performers across genres.",
  },
  {
    title: "Speakers",
    icon: <Mic className='size-6 text-primary' />,
    description: "Hosts, emcees & keynote experts to inspire audiences.",
  },
  {
    title: "DJs",
    icon: <Disc3 className='size-6 text-primary' />,
    description: "From party starters to pro-level mix masters.",
  },
];

function CategorySection() {
  return (
    <section className='category-section'>
      <div className='container px-6 md:px-10 mx-auto'>
        <h2 className='category-header'>Explore Artist Categories</h2>

        <p className='category-subtext'>
          Choose from our top-performing categories and discover talented
          artists tailored for your event.
        </p>

        <div className='category-grid'>
          {categories.map((cat) => (
            <Link href='/artists' key={cat.title}>
              <Card className='group category-card hover:shadow-xl'>
                <CardContent className='category-card-content'>
                  <div className='category-icon-wrapper transition-transform duration-300 group-hover:scale-110 group-hover:shadow-md'>
                    {cat.icon}
                  </div>
                  <h3 className='category-title'>{cat.title}</h3>
                  <p className='category-description'>{cat.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
