import Link from "next/link"



/*---------GetRecipeAreas---------*/
const getRecipeAreas = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  const { meals } = await response.json()
  
  return meals.map((area) => {
    if (area.strArea === 'Unknown') return
    return area.strArea
  })
}


/*---------Page---------*/
const page = async () => {
  const recipeAreas = await getRecipeAreas()

  return (
    <div>
      <div className='w-full max-w-[1200px] mt-10 p-1 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4'>
        {
          recipeAreas?.map((area, indx) => {
            if (!area) return
            return (
              <Link href={`/RecipeAreas/${area}`} key={indx} className='px-2 py-3 text-center bg-purple-600 text-white rounded transition-colors hover:bg-purple-700'>
                {area}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default page