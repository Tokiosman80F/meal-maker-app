export default function Button({ children, type = "button", ...props }) {
  return (
    <button
      type={type}
      className="cursor-pointer rounded-xl bg-orange-500 px-4 py-2 font-medium text-white hover:bg-orange-600"
      {...props}
    >
      {children}
    </button>
  );
}
