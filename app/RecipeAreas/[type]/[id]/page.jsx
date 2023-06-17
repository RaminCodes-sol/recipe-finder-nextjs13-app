import Image from "next/image"



/*-------getRecipeDetails-------*/
const getRecipeDetails = async (id) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    return response.json()
}


/*-------Page-------*/
const page = async ({ params }) => {
    const recipeDetails = await getRecipeDetails(params.id)
    const details = recipeDetails && recipeDetails.meals ? recipeDetails.meals[0] : {}

    const ingredients = Object.keys(details)
        .filter(key => key.indexOf("Ingredient") > 0)
        .map(ingKey => details[ingKey])
        .filter(Boolean)


  return (
    <div className="text-white px-4 py-6 mt-5 grid grid-cols-1 md:grid-cols-2 gap-5">

        <div>
            <figure>
                <Image src={details?.strMealThumb} alt='img' width={200} height={200} />
            </figure>
        </div>

        <div className="flex flex-col gap-4">
            <h1>name: <span className="font-bold text-2xl">{details?.strMeal}</span></h1>
            <h1>category: {details?.strCategory}</h1>
            <div>
                <p>ingredients: </p>
                {ingredients?.map((ingr, indx) => <span key={indx} className='bg-purple-500 p-1 m-1 rounded inline-block'>{ingr}</span>)}
            </div>
           {
            details.strYoutube &&  
               ( <div>
                    <p>Video Link: </p>
                    <a href={details?.strYoutube} target="_blank" rel="noopener noreferrer" className="text-purple-600">How to make {details.strMeal}</a>
                </div>)
           }
        </div>

    </div>
  )
}

export default page