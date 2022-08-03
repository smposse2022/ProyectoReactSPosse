import { useState, useEffect } from "react";

const Mercadolibre = () => {
  const [products, setProducts] = useState([]);
  const [input, setInput] = useState("");
  /*useEffect(() => {
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=auto`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json.results);
      });
  }, []);*/

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${input}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setProducts(json.results);
      });
  };

  return (
    <>
      <h1>MercadoLibre</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {products.map((prod) => {
          return (
            <div key={prod.id}>
              <p>{prod.title}</p>
              <img src={prod.thumbnail} alt={prod.title} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Mercadolibre;
