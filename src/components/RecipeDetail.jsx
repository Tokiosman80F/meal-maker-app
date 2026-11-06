import { parseIngredients } from "../utils/parseIngredients";

export default function RecipeDetail({ meal, onBack }) {
  const ingredients = parseIngredients(meal);

  const steps = meal.strInstructions
    .split(/\r?\n/)
    .filter((line) => line.trim() !== "");

  return (
    <section>
      <button
        onClick={onBack}
        className="cursor-pointer rounded-xl bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
      >
        ← Back to results
      </button>
      <h2 className="mt-6 text-3xl font-bold">{meal.strMeal}</h2>
      <p className="mb-4 opacity-70">
        {meal.strCategory} · {meal.strArea}
      </p>
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="w-full max-w-md rounded-2xl"
      />

      <h3 className="mb-2 mt-6 text-xl font-semibold">Ingredients</h3>
      <ul className="list-disc space-y-1 pl-6">
        {ingredients.map(({ ingredient, measure }) => (
          <li key={ingredient}>
            {measure} {ingredient}
          </li>
        ))}
      </ul>

      <h3 className="mb-2 mt-6 text-xl font-semibold">Instructions</h3>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <p key={index}>{step}</p>
        ))}
      </div>
    </section>
  );
}
