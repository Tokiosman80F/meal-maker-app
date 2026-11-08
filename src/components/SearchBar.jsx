import { useState } from "react";
import Button from "./Button";

export default function SearchBar({ onSearch, onClear }) {
  const [text, setText] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const trimmedText = text.trim();
    if (trimmedText) {
      onSearch(trimmedText);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="mb-6 mt-4 flex gap-2">
      <input
        type="text"
        value={text}
        placeholder="Search recipes..."
        onChange={(e) => setText(e.target.value)}
        aria-label="Search recipes"
        className="flex-1 rounded-xl border border-gray-200 bg-gray-100 px-4 py-3 text-gray-800 placeholder-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
      />

      <Button type="submit">Search</Button>
      <button
        type="button"
        onClick={() => {
          setText("");
          onClear();
        }}
        className="cursor-pointer rounded-xl bg-gray-300 px-4 py-2 font-medium text-gray-800 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-100 dark:hover:bg-gray-500"
      >
        Clear X
      </button>
    </form>
  );
}
