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
    <div>
      <h1>Hello, World!</h1>
      <div>
        I want:
        <Pizza pizzaType={pizzaData[0]} />
        <Pizza pizzaType={pizzaData[1]} />
        <Pizza pizzaType={pizzaData[2]} />
      </div>
    </div>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.pizzaType.name}</h1>
      <img src={props.pizzaType.photoName} alt={props.pizzaType.name} />
      <p>{props.pizzaType.ingredients}</p>
    </div>
  );
}

//rendering app in the DOM
//React 18+
const root = ReactDOM.createRoot(document.getElementById("root"));

//Strict mode is for development causing 2 renders and checks for things
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
