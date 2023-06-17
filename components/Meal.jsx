import Image from "next/image"
import Link from "next/link"



const Meal = ({ meal, type }) => {
  return (
    <div className="border border-[#444] px-3 py-4" title={meal.strMeal}>

      <figure>
        <Image src={meal.strMealThumb} alt='img' width={200} height={200} />
      </figure>

      <h3 className="text-white mt-2">{meal.strMeal.length > 20 ? `${meal.strMeal.substring(0, 25)}...`: meal.strMeal}</h3>

      <Link href={`/RecipeAreas/${type}/${meal.idMeal}`} className='p-2 bg-purple-600 mt-4 text-sm inline-block text-white rounded transition-colors hover:bg-purple-700'>Get Recipe Details</Link>
      
    </div>
  )
}

export default Meal