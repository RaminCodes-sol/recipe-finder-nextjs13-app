'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'



const Navbar = () => {
  const pathname = usePathname().split('/')
  const currentArea = pathname[2]
  const recipeId = pathname[3]

  return (
    <div className='w-full px-7 py-4 bg-slate-500 text-center flex justify-between items-center'>

      <Link href='/' className="text-2xl  text-white">Yummy</Link>

      {
        pathname && currentArea && (
          <Link href={`${recipeId ? `/RecipeAreas/${currentArea}` : '/RecipeAreas'}`} className='bg-[tomato] p-2 text-sm rounded text-white transition-colors hover:bg-[#f04729]'>
            Back to {recipeId ? `${currentArea} recipes` : 'Recipe Areas' }
          </Link>
        )
      }
      
    </div>
  )
}

export default Navbar