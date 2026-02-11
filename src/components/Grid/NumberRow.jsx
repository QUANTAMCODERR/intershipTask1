import NumberCell from "./NumberCell";

export default function NumberRow({start}) {
  const nums = Array.from({length:10},(_,i)=>start+i);

  return(
    <div className="row">
      {nums.map(n=>(
        <NumberCell key={n} value={n}/>
      ))}
    </div>
  );
}
