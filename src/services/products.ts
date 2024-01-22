import { ROOT_URL } from '@/constants/globals';

const ProductServices = {
  getProductsByQuery: async (_query: string) => {
    const response = await fetch(`${ROOT_URL}api/items?q=${_query}`);
    const products = await response.json();

    return products;
  },
  getProductById: async (_productId: string) => {
    const response = await fetch(`${ROOT_URL}api/items/${_productId}`);
    const product = await response.json();

    return product;
  }
};

export default ProductServices;
