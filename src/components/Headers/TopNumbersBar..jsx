export default function TopNumbersBar() {
  const numbers = [1028,1195,1200,1312,1475,1572,1641,1723,1850,1935];

  return (
    <div className="top-bar bg-gray-200">
      {numbers.map((n,i)=>(
        <span key={i} className="top-number">{n}</span>
      ))}
    </div>
  );
}
