import React from "react";
import Recipe from "./Recipe";
import AddIng from "./AddIng";

export default function Main() {
  /**
   * 2. Move the list of ingredients <section> into its
   *    own IngredientsList component.
   *
   * While you're considering how to structure things, consider
   * where state is, think about if it makes sense or not to
   * move it somewhere else, how you'll communicate between
   * the parent/child components, etc.
   *
   * The app should function as it currently does when you're
   * done, so there will likely be some extra work to be done
   * beyond what I've listed above.
   */
  // const [ingredients, setIngredients] = React.useState([
  //   "all the main spices",
  //   "pasta",
  //   "ground beef",
  //   "tomato paste",
  // ]);
  // const [recipeShown, setRecipeShown] = React.useState(false);

  // const ingredientsListItems = ingredients.map((ingredient) => (
  //   <li key={ingredient}>{ingredient}</li>
  // ));

  // function addIngredient(formData) {
  //   const newIngredient = formData.get("ingredient");
  //   setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  // }

  // function getRecipeClick() {
  //   setRecipeShown((prev) => !prev);
  // }

  return (
    <main>
      {/* <AddIng /> */}
      <Recipe />
    </main>
  );
}
