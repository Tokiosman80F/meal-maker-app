import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";

const API_URL = "https://www.themealdb.com/api/json/v1/1";
export default function App() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      const res = await fetch(`${API_URL}/search.php?s=chicken`);
      const data = await res.json();
      setRecipes(data.meals ?? []);
    }
    fetchRecipes();
  }, []);
  return (
    <div className="mx-auto max-w-6xl p-6">
      <h1 className="mb-6 text-3xl font-bold">Meal Maker app</h1>
      <div className="  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            category={recipe.strCategory}
            area={recipe.strArea}
            onSelect={() => console.log("clicked")}
          />
        ))}
      </div>
    </div>
  );
}
