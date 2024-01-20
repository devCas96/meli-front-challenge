import { IProductsLocal, IProductServices, IFullProductServices, IFullProductLocal } from '@/types/types';
import authorSign from '@/utilities/author-sign';

const ProductMapper = {
  mapFromProductServicesToLocalProduct: (productResponse: IProductServices): IProductsLocal => {
    return {
      author: authorSign(),
      items: productResponse.results.map(product => {
        const { id, title, price, thumbnail, condition, shipping, currency_id, seller } = product;
        return ({
          id,
          seller_id: seller.id,
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
    };
  },
  mapFromFullProductServicesToLocalFullProduct: (fullProductResponse: IFullProductServices): IFullProductLocal => {
    const { id, title, price, thumbnail, condition, shipping, currency_id, initial_quantity } = fullProductResponse;
    return {
      author: authorSign(),
      item: {
        id,
        seller_id: 0,
        title,
        price: {
          amount: price,
          currency: currency_id,
          decimals: 0,
        },
        picture: thumbnail,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity: initial_quantity,
      }
    };
  }
};
export default ProductMapper;