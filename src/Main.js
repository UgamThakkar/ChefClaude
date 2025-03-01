import { useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
import { getRecipeFromMistral } from "./Ai"

export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipe, setrecipe] = useState("")

    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(previngredients => [...previngredients, newIngredient])
    }

    async function getaRecipe(){
        const recipeFromAi = await getRecipeFromMistral(ingredients)
        setrecipe(recipeFromAi)
    }
    return(
        <main>
            <form className="add-ingredient-form" action={addIngredients}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>

            </form>
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} recipe={getaRecipe}/>}


            {recipe && <Recipe recipe={recipe}/>}
        </main>
    )
}