// export default function Main() {
//   return (
//     <main>
//       <form className="add-ingredient-form">
//         <input
//           type="text"
//           placeholder="e.g. oregano"
//           aria-label="Add ingredient"
//         />
//         <button>Add ingredient</button>
//       </form>
//     </main>
//   );
// }
export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"]

  const ingElement = ingredients.map((x) => <li key={x} className="ingredientLi">{x}</li>)
  
    /**
     * Challenge:
     * Add the new ingredient to the array of ingredients. Also, add a 
     * console.log(ingredients) after adding the ingredient, because 
     * **warning**: you aren't going to see the page update!
     * 
     * Hint: this is a one-liner solution, so don't overthink it 😅
     */

    function handleSubmit(event) {
      event.preventDefault()
      const formData = new FormData(event.currentTarget)
      const newIngredient = formData.get("ingredient")
      ingredients.push(newIngredient)
      console.log(ingredients)
      
  }
  
  return (
      <main>
          <form onSubmit={handleSubmit} className="add-ingredient-form">
              <input 
                  type="text"
                  placeholder="e.g. oregano"
                  aria-label="Add ingredient"
                  name="ingredient"
              />
              <button>Add ingredient</button>
          </form>
          <ul>
              {ingElement}
          </ul>
      </main>
  )
}