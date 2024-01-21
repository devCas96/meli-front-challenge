import UserServices from '@/services/user';
import { IItem } from '@/types/types';


export const productsWithCity = async (products: IItem[]) => {
  // Use Promise.all to perform asynchronous operations in parallel for each post.
  const localProductsWithCity = await Promise.all(
    products.map(async (item) => {
      const user = await UserServices.getUserById(item.seller_id);
      return {
        ...item,
        city: user.address.city,
      };
    })
  );

  return localProductsWithCity;
};