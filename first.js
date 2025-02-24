import React from "react";
import ReactDOM from "react-dom/client";

function Card(props){
    return (
        <div style={{padding:"2px",border:"2px solid black",borderRadius:"10px"}}>
            <img src="https://m.media-amazon.com/images/I/61vxWeRSyhL._AC_UY1100_.jpg" height="200px" width="200px" />
            <div style={{textAlign:"center"}}> 
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>
    )
}

function Header(){
    return (
        <div className="heading">
            <img/>
            <div>
                <button>Men</button>
                <button>Women</button>
                <button>Kids</button>
                <button>Home and Living</button>
                <button>Beauty</button>
                <button>Studio</button>
            </div>
        </div>
    )
}

const arr = [{cloth:"T-shirts",offer:"20-80%off"},{cloth:"Pants",offer:"30-70%off"},{cloth:"Kurta",offer:"50-80%off"},{cloth:"Pajama",offer:"20-50%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},{cloth:"T-shirts",offer:"20-80%off"},]

function App(){
    return(
        <>
        //Header
        //Body
        <div style={{display:"flex", gap:"20px",flexWrap:"wrap"}}>
            {
                //here we can't use for loop , we use map because map will return an array
                arr.map((value , index)=><Card key = {index} cloth = {value.cloth} offer = {value.offer}/>)
            }
        </div>
        //Footer
        </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(<App/>);