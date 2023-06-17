import Meal from "@/components/Meal"



/*------getRecipes------*/
const getRecipes = async (type) => {
  const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${type}`)
  return response.json()
}


/*------Page------*/
const page = async ({ params }) => {
  const { meals } = await getRecipes(params.type)

  return (
    <div className="w-full max-w-[1200px] mx-auto p-2 grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
      { meals?.map((meal, indx) => <Meal key={indx} meal={meal || []} type={params.type} />) }
    </div>
  )
}

export const generateStaticParams = async () => {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
  const { meals } = await response.json()
  const areas = meals.map((area) => {
    if (area.strArea === 'Unknown') return
    return area.strArea
  })

  return areas.map(area => ({ type: area }))
}

export default page