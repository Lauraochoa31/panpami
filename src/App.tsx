import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import { LoadingView } from "./LoadingView/LoadingView";

const products = [
  {
    name: "pan huevito",
    price: "1000",
    type: "dulce",
  },
  {
    name: "croissant",
    price: "2000",
  },
];

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  const productsSweet = products.filter(product => product.type === "dulce")

  return (
    <div className="App">
      <h1>Pan pa' mi</h1>
      <p>Estamos horneando algo muy especial</p>
      {loading && <LoadingView />}
      <Header />
      {productsSweet.map((product: {price:string, name: string}) => (
        <ul>
          <li>{product.name}</li>
          <li>{product.price}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
