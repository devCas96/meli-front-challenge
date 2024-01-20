import { IProductsLocal, IProductServices } from '@/types/types';

const ProductMapper = {
  mapFromProductServicesToProduct: (productResponse: IProductServices): IProductsLocal => {
    return {
      author: {
        name: 'Sebastian',
        lastname: 'Achuri'
      },
      items: productResponse.results.map(product => {
        const { id, title, price, thumbnail, condition, shipping, currency_id } = product;
        return ({
          id,
          title,
          price: {
            amount: price,
            currency: currency_id,
            decimals: 0,
          },
          picture: thumbnail,
          condition,
          free_shipping: shipping.free_shipping,
        });
      }),
      categories: []
    };
  }
};
export default ProductMapper;