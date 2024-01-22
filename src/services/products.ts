const ProductServices = {
  getProductsByQuery: async (_query: string) => {
    const response = await fetch(`http://localhost:3000/api/items?q=${_query}`);
    const products = await response.json();

    return products;
  },
  getProductById: async (_productId: string) => {
    const response = await fetch(`http://localhost:3000/api/items/${_productId}`);
    const product = await response.json();

    return product;
  }
};

export default ProductServices;
