export async function getProductsList(searchTerm) {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/products?q=${searchTerm ? searchTerm : ''}`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get products list error:', error.message);
    throw error; //eslint-disable-line
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${import.meta.env.VITE_HOST}/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get product error:', error.message);
    throw error; //eslint-disable-line
  }
}
export async function getFeaturedList() {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_HOST}/featured_products`,
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Get featured list error:', error.message);
    throw error; //eslint-disable-line
  }
}
