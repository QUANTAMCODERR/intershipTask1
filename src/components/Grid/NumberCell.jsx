export default function NumberCell({value}) {
  return (
    <div className="number-cell">
      <input type="checkbox"/>
      <span>{value}</span>
    </div>
  );
}
