import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage";
import Loader from "./components/Loader";
import RecipeCard from "./components/RecipeCard";
import RecipeDetail from "./components/RecipeDetail";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";

const API_URL = "https://www.themealdb.com/api/json/v1/1";

export default function App() {
  const [query, setQuery] = useState("chicken");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selected, setSelected] = useState(null);

  console.log("recipes", recipes);
  useEffect(() => {
    async function fetchRecipes() {
      setLoading(false);
      setError(null);

      try {
        const res = await fetch(
          `${API_URL}/search.php?s=${encodeURIComponent(query)}`,
        );

        if (!res.ok) throw new Error(`Request faild : ${res.status}`);
        const data = await res.json();
        setRecipes(data.meals ?? []);
      } catch (err) {
        setRecipes([]);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchRecipes();
  }, [query]);
  if (selected) {
    return (
      <div className="mx-auto max-w-6xl p-6">
        <RecipeDetail meal={selected} onBack={() => setSelected(null)} />
      </div>
    );
  }
  return (
    <div className="mx-auto max-w-6xl p-6">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Recipe Finder</h1>
        <ThemeToggle />
      </header>

      <SearchBar onSearch={setQuery} />
      {loading && <Loader />}
      {error && <ErrorMessage message={error} />}

      {!loading && !error && recipes.length === 0 && (
        <p className="opacity-70"> No recipe found for : {query} </p>
      )}

      <div className="  grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            name={recipe.strMeal}
            image={recipe.strMealThumb}
            category={recipe.strCategory}
            area={recipe.strArea}
            onSelect={() => setSelected(recipe)}
          />
        ))}
      </div>
    </div>
  );
}
