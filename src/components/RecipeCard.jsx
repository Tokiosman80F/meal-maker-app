export default function RecipeCard({ name, image, category, area, onSelect }) {
  return (
    <button
      onClick={onSelect}
      className="cursor-pointer overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 text-left text-gray-800 transition hover:-translate-y-1 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
    >
      <img
        src={image}
        alt={name}
        className="aspect-square w-full object-cover"
      />
      <div className="px-4 pb-4 pt-3">
        <h3 className="mb-1 font-semibold">{name}</h3>
        <p className="text-sm opacity-70">
          {category} · {area}
        </p>
      </div>
    </button>
  );
}
