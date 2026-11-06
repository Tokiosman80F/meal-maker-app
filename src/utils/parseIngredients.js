export function parseIngredients(meal) {
  const result = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      result.push({
        ingredient: ingredient.trim(),
        measure: (measure || "").trim(),
      });
    }
  }

  return result;
}
