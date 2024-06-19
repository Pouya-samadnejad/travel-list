export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Add some Items to your list🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;

  return (
    <footer className="stats">
      {percentage === 100 ? (
        <em>You packed everything 😎☀️</em>
      ) : (
        <em>
          👜You have {numItems} items in your list, and you already packed{" "}
          {numPacked} ({percentage}%)
        </em>
      )}
    </footer>
  );
}
