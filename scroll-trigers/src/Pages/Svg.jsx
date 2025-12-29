export function SvgImg() {

  const initialpath = `M 10 100 Q 250 100 490 100`;
  const FinalPath = `M 10 100 Q 250 100 490 100`;

  const handleClick = ()=>{
    alert("clicked")
  }

  
  return (
    <div>
      <div id="string" className=" bg-red-500" onMouseLeave={handleClick}>
        <svg width="500" height="160" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M 10 100 Q 500 100 990 100"
            stroke="white"
            fill="transparent"
          />
        </svg>
      </div>
    </div>
  );
}
