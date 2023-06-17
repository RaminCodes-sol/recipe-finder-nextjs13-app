import Link from "next/link"



export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-4 h-screen">
      <h1 className="text-2xl text-white">Explore foods from all around the world</h1>
      <Link href='/RecipeAreas' className="bg-purple-600 rounded text-white p-2 transition-colors hover:bg-purple-700">Explore Foods</Link>
    </main>
  )
}
