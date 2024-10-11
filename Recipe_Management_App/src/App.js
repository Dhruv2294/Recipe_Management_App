import React, { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import './components/App.css';
import Header from './components/Header';

const App = () => {
    const [recipes, setRecipes] = useState([
        {
            name: "Mexican Fiesta Pizza",
            ingredients: "Flavourful mix of red capsicum, green capsicum, jalapeno, onion, black olives, sweet corn and 100% mozzarella",
            image: "https://kauveryhospital.com/blog/wp-content/uploads/2021/04/pizza-5179939_960_720.jpg"
        },
        {
            name: " Kaju Curry",
            ingredients: "roasted cashew nuts (kaju) cooked in a tomato, onion, and spices based rich and creamy sauce",
            image: "https://www.chefajaychopra.com/assets/img/recipe/1-1680272770Kajumasalacurrywebp.webp"
        },
        {
            name: "Veg Jaipuri",
            ingredients: " Carrots, beans, peas, capsicum, cabbage, onion, green chili ,Cashew paste, ghee, roasted papad",
            image: "https://as2.ftcdn.net/v2/jpg/05/95/86/45/1000_F_595864561_X3jQ1rlKh3LzD1q9FtoHEfYWcvTp4gan.jpg"
        },
        {
            name: "Veg Tacos",
            ingredients: "Beans, Cheese, Salsa, Wheat Flour,Oil, Papad, Vegetables, Mayoniese, Corn Flour, Bread Crumbs",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG75Zyru1tPWe569KeOXuqMBPEGcN639MmTg&s"
        },
        {
            name: "Veg Manchurian",
            ingredients: "Vegetables, French beans, all-purpose flour, corn flour, bread crumbs, crushed pepper",
            image: "https://www.cookshideout.com/wp-content/uploads/2014/11/Veg-Manchurian-Low-Fat-FI.jpg"
        },
        {
            name: "Butter Masala Naan",
            ingredients: "All-Purpose Flour, Butter, Corriander, Peeper Powder",
            image: "https://thebusybaker.ca/wp-content/uploads/2022/02/homemade-naan-bread-fb-ig-4-scaled.jpg"
        },
        {
            name: "Corn Cheese Grilled Sandwich",
            ingredients: "Bread, cheese, butter, vegetables, Mayoniese, Corn",
            image: "https://static.toiimg.com/thumb/57853896.cms?width=800&height=800&imgsize=1542881"
        },
        {
            name: "Pastries",
            ingredients: "Flour, milk, Cream, sugar, baking powder, Chocolate, Cherry, ",
            image: "https://ocakes.in/hyderabad/storage/app/public/images/item/item-642f5b5885a38.jpg"
        },
        {
            name: "Gulab Jamun",
            ingredients: "Sugar, Water, Milk, Cardamom Seeds, Saffron, Cardamom Powder, Grated Cashew, Baking Soda, Maida",
            image: "https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/web/recipes/gulab-jamun.png"
        },
        {
            name: "Jalebi",
            ingredients: "Maida, Curd, Ghee, Sugar, Saffron, Corn Flour, Baking Soda, Water, Food Colour, Rose Essence",
            image: "https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/shubhi-mishra20171004002157988.jpeg"
        }
    ]);

    const [searchTerm, setSearchTerm] = useState('');

    const addRecipe = (recipe) => {
        setRecipes([...recipes, recipe]);
    };

    const deleteRecipe = (index) => {
        const newRecipes = recipes.filter((_, i) => i !== index);
        setRecipes(newRecipes);
    };

    const filteredRecipes = recipes.filter((recipe) =>
        recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
     
        <div className="container">
           <Header/>
            <h1>Order Here...</h1>
            <RecipeForm addRecipe={addRecipe} />
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <RecipeList recipes={filteredRecipes} deleteRecipe={deleteRecipe} />
        </div>
    );
};

export default App;
