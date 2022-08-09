import React from "react";

function RecipeDelete({ recipe, deleteRecipe, index }) {
    return (
        <div className="recipe" key={index}>
            <p>{recipe.content}</p>
            <button name="delete" onClick={deleteRecipe}>Delete</button>
        </div>
    )
};

export default RecipeDelete;