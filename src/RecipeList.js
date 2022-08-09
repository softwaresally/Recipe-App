import React from "react";
import RecipeDelete from "./RecipeDelete";

function RecipeList({ recipes, setRecipes, deleteRecipe }) {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked
  const rows = recipes.map(({name, cuisine, photo, ingredients, preparation}, index) => (
  <tr key={index}>
      <td>{name}</td>
      <td>{cuisine}</td>
      <td><img src={photo} alt="" /></td>
      <td classname="content_td"><p>{ingredients}</p></td>
      <td classname="content_td"><p>{preparation}</p></td>
      <td>
        <RecipeDelete recipes={recipes} setRecipes={setRecipes} deleteRecipe={() => deleteRecipe(index)} />
      </td>
    </tr>
  ));

return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
