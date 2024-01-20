const ProductServices = {
  getProductsByQuery: async (_query: string) => {
    const response = await fetch(` http://localhost:3000/api/items?q=${_query}`, { cache: 'no-store' });
    const products = await response.json();

    return products;
  }
};

export default ProductServices;
