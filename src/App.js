import React from "react";
import "./index.css";
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
export default App;

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className="menu">
      <h2>OUR MENU</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
        voluptatibus?
      </p>
      <div className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>
    </main>
  );
}
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <p>{props.pizzaObj.price}</p>
      </div>
    </div>
  );
}
function Footer() {
  const houre = new Date().getHours();
  const openTime = 11;
  const closeTime = 22;
  const condition = houre >= openTime && houre <= closeTime;
  console.log(condition);
  // if (houre >= openTime && houre <= closeTime) alert("We are currentlty open");
  // else alert("We are currently close");
  return (
    <>
      <p>
        {new Date().toLocaleTimeString()} We're open until 22:00 . Come visit us
        or order online.
      </p>
    </>
  );
}
