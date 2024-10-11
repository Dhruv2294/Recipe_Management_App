import React from 'react';
import RecipeItem from './RecipeItem';
import './App.css';
import Header from './Header';
const RecipeList = ({ recipes, deleteRecipe }) => {
    return (
        <div className="recipe-list">
            {recipes.map((recipe, index) => (
                <RecipeItem
                    key={index}
                    recipe={recipe}
                    deleteRecipe={() => deleteRecipe(index)}
                />
            ))}
        </div>
    );
};

export default RecipeList;
