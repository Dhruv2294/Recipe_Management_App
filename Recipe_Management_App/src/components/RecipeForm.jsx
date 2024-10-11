import React, { useState } from 'react';
import './App.css';
import Header from './Header';
const RecipeForm = ({ addRecipe }) => {
    const [recipe, setRecipe] = useState({ name: '', ingredients: '', image: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe(recipe);
        setRecipe({ name: '', ingredients: '', image: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Recipe Name"
                value={recipe.name}
                onChange={handleChange}
                required
            />
            <textarea
                name="ingredients"
                placeholder="Ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={recipe.image}
                onChange={handleChange}
                required
            />
            <button type="submit"style={{width:"150px",padding:"15px"}}>Add More Recipes...</button>
        </form>
    );
};

export default RecipeForm;
