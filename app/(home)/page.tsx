import { source } from '@/lib/source';
import Link from 'next/link';

export default function HomePage() {
//   console.log(source.generateParams())
//   // { slug: [ 'Introduction' ] },
//   const site = source.generateParams()
//   let allNames : string[]= []
//   site.forEach(item=>{
//     let n = ""
//   item.slug.forEach(name =>{
//     n +=  name + "/"
//   })
//   allNames.push(n.substring(0, n.length - 1))
//   })
//   let names = [...new Set<string>(allNames)]
//   const sitee: any = names.map(item => {
//     return {
//       url: `https://gul7333.github.io/religion0fgod/docs/${item}`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.8,
//     }
//   }
// )
// console.log(sitee)
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
