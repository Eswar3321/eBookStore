export async function getProductsList(searchTerm) {
  const response = await fetch(
    `http://localhost:3000/products?q=${searchTerm ? searchTerm : ''}`,
  );
  const data = await response.json();
  return data;
}

export async function getProduct(id) {
  const response = await fetch(`http://localhost:3000/products/${id}`);
  const data = await response.json();
  return data;
}
export async function getFeaturedList() {
  const response = await fetch('http://localhost:3000/featured_products');
  const data = await response.json();
  return data;
}
