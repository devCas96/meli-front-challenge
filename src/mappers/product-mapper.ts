import { AUTHOR_SIGN } from '@/constants/globals';
import { IFullProductServices, IFullProductLocal, IItemsReduce, IItem, Result } from '@/types/types';

const ProductMapper = {
  mapFromProductServicesToLocalProduct: (resultsResponse: Result[]): IItemsReduce => {
    const reduceItems: IItemsReduce = resultsResponse.reduce((prev: IItemsReduce, current: Result) => {

      const { id, title, price, thumbnail, condition, shipping, currency_id, seller, category_id } = current;
      const data: IItem = {
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
      };

      if (!prev) {
        return {
          items: [data],
          mostRepeatedCategory: { [category_id]: 1 },
        };
      }
      return {
        items: [...prev.items, data],
        mostRepeatedCategory: {
          ...prev.mostRepeatedCategory,
          [category_id]:
            (prev.mostRepeatedCategory[category_id] || 0) + 1,
        },
      };
    }, { items: [], mostRepeatedCategory: {} });

    return reduceItems;
  },
  mapFromFullProductServicesToLocalFullProduct: (fullProductResponse: IFullProductServices): IFullProductLocal => {
    const { id, title, price, condition, shipping, currency_id, initial_quantity, pictures } = fullProductResponse;
    return {
      author: AUTHOR_SIGN,
      item: {
        id,
        seller_id: 0,
        title,
        price: {
          amount: price,
          currency: currency_id,
          decimals: 0,
        },
        picture: pictures[0].secure_url,
        condition,
        free_shipping: shipping.free_shipping,
        sold_quantity: initial_quantity,
      },
      categories: []
    };
  }
};
export default ProductMapper;