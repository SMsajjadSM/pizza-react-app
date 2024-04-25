


import './App.css'
import React from "react";
import ReactDOM from "react-dom/client";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    <header className="header">
      <h1>SMsajjadSM pizza</h1>
    </header>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          
          <Pizza pizzaObj={pizza}  key={pizza}/>
        ))}
      </ul>
    </div>
  );
}

function Pizza({pizzaObj}) {
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3> {pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span> {pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hout = new Date().getHours();
  const openHours = 12;
  const closeHours = 24;
  const isOpen = hout >= openHours && hout <= closeHours;
  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          {" "}
          <p>
            {" "}
            we are open until {closeHours}:00 come visit us or order online{" "}
          </p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App
