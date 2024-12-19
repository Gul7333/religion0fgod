import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Religion Of God</h1>
      <p className="text-fd-muted-foreground">
      Start Reading the book by Clicking here {' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
         Open book
        </Link>{' '}
        
      </p>
    </main>
  );
}
