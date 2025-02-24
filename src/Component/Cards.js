function Card(props) {
  return (
    <div
      className="card"
      style={{
        padding: "2px",
        border: "2px solid black",
        borderRadius: "10px",
      }}
    >
      <img
        src="https://m.media-amazon.com/images/I/61vxWeRSyhL._AC_UY1100_.jpg"
        height="200px"
        width="200px"
      />
      <div className="text" style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
        <h2>Price: {props.price}</h2>
      </div>
    </div>
  );
}

export default Card;
