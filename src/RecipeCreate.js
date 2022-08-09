import React, { useState } from "react";
import App from "./App";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({ ...initialFormState });

  const handleChange = ({ target }) => {
    const value = target.value;
    setFormData({
      ...formData,
      [target.name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
     <table>
       <tbody>
         <tr>
           <td>
             <input name="name" type="text" required={true} rows={1} onChange={handleChange} value={formData.type} placeholder="Name" />
           </td>
           <td>
             <input name="cuisine" type="text" required={true} rows={1} onChange={handleChange} value={formData.type} placeholder="Cuisine" />
           </td>
           <td>
             <input name="photo" type="url" required={true} rows={1} onChange={handleChange} value={formData.type} placeholder="URL" />
           </td>
           <td>
             <textarea id="ingredients" type="text" name="ingredients" required={true} rows={2} onChange={handleChange} value={formData.type} placeholder="Ingredients" />
           </td>
           <td>
             <textarea id="preparation" type="text" name="preparation" required={true} rows={2} onChange={handleChange} value={formData.type} placeholder="Preparation" autofocus="on" />
           </td>
           <td>
             <button type="submit">Create</button>
           </td>
         </tr>  
       </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;