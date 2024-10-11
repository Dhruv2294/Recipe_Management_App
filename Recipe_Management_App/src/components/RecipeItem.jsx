import React from 'react';
import './App.css';
import Header from './Header';
const RecipeItem = ({ recipe, deleteRecipe }) => {
    return (
        <div className="recipe-card">
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <h3>{recipe.name}</h3>
            <p>{recipe.ingredients}</p>
            <button className="delete-button" onClick={deleteRecipe}>Delete</button>
        </div>
    );
};

export default RecipeItem;
