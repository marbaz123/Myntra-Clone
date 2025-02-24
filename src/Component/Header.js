function Header() {
  return (
    <div className="heading">
      <img
        className="logo"
        src="https://images.indianexpress.com/2021/01/myntra.png"
        height="60px"
        width="100px"
      />
      <div className="options">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>
      <input
        className="inp"
        placeholder=" Search for products, brands and more"
      ></input>
      <div className="opt">
        <button className="but">Profile</button>
        <button className="but">Wishlist</button>
        <button className="but">Bag</button>
      </div>
    </div>
  );
}

export default Header;
