async function ProductsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const products = await response.json();

  console.log(products);

  return (
    <div>
      <h2>ProductsPage</h2>
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default ProductsPage;
