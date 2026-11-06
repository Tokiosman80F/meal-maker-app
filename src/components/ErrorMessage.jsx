export default function ErrorMessage({ message }) {
  return (
    <p className="text-red-600" role="alert">
      Something went wrong : {message}
    </p>
  );
}
