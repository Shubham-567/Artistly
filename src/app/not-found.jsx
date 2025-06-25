import { Frown } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className='min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center'>
      <h1 className='text-9xl font-bold text-foreground flex items-center gap-3'>
        4<Frown className='size-24' />4
      </h1>
      <p className='mt-4 text-2xl font-semibold text-foreground'>
        Oh no... We lost this page
      </p>
      <p className='mt-2 text-muted-foreground'>
        We suggest heading back to the homepage while we fix the issue.
      </p>
      <Link
        href='/'
        className='mt-6 inline-block px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition'>
        Back to Home
      </Link>
    </main>
  );
}
