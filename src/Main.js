import { useState } from "react"
import Recipe from "./Recipe"
import IngredientsList from "./IngredientsList"
export default function Main(){
    const [ingredients, setIngredients] = useState([])
    const [recipeShown, setrecipeShown] = useState(false)


    function addIngredients(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(previngredients => [...previngredients, newIngredient])
    }

    function getaRecipe(){
        setrecipeShown(prevvalue => !prevvalue)
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


            {recipeShown && <Recipe />}
        </main>
    )
}