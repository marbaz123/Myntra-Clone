import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./Component/Cards";
import Header from "./Component/Header";
import arr from "./utils/dummy";

function App() {
  return (
    <>
      <Header/>
      <div className="middle" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {
          //here we can't use for loop , we use map because map will return an array
          arr.map((value, index) => (<Card key={index} cloth={value.cloth} offer={value.offer} />))
        }
      </div>
    </>
  );
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App/>);
