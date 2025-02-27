import { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients] = useState([])

    const ingredientListItems = ingredients.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(previngredients => [...previngredients, newIngredient])
    }
    return(
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add Ingredient"
                    name="ingredient"
                />
                <button>Add Ingredient</button>

            </form>
            <ul>
                {ingredientListItems}
            </ul>
        </main>
    )
}