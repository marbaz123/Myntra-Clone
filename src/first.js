import React,{useState} from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Cards";
import Header from "./Component/Header";
import arr from "./utils/dummy";

function App() {
  let [A,setA] = useState(arr);

  function SortArray(){
    A.sort((a,b)=>a.price-b.price);
    setA([...A]);
  }
  function priceAbove200(){
    const B = arr.filter((value)=>value.price>199);
    setA(B);
  }
  return (
    <>
      <Header/>
      <div className="sort-btn">
        <button onClick={SortArray} className="btn-1">Sort By Price</button>
        <button onClick={priceAbove200} className="btn-2">Price above 200</button>
      </div>
      <div className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {
          //here we can't use for loop , we use map because map will return an array
          A.map((value, index) => (<Card key={index} cloth={value.cloth} offer={value.offer} price={value.price}/>))
        }
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
