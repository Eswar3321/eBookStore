export async function getProductsList(searchTerm) {
  try {
    const response = await fetch(
      `http://localhost:3000/products?q=${searchTerm ? searchTerm : ''}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get products list error:', error.message);
    throw error;
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get product error:', error.message);
    throw error;
  }
}
export async function getFeaturedList() {
  try {
    const response = await fetch('http://localhost:3000/featured_products');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get featured list error:', error.message);
    throw error;
  }
}
