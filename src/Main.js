export default function Main(){
    const ingredients = ["chicken", "paneer", "broth"]

    const ingredientListItems = ingredients.map(ingredient=>(
        <li key={ingredient}>{ingredient}</li>
    ))

    function handleSubmit(event){
        event.preventDefault()
        console.log("submmitted")
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        console.log(newIngredient)
        ingredients.push(newIngredient)
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