import { ICategory, IDescriptionServices, IFullItem, IFullProductServices, IItem, Result } from '@/types/types';
import { API_BASE_URL, AUTHOR_SIGN } from '@/constants/globals';
import UserServices from '@/services/user';
import ProductMapper from '@/mappers/product-mapper';
import CategoryHandler from './category-handler';

const ProductHandler = {
  productResponseHandler: async (searchResponseResults: Result[]) => {
    const { items, mostRepeatedCategory } = ProductMapper.mapFromProductServicesToLocalProduct(searchResponseResults);

    const topCategory = CategoryHandler.chooseTopCategory(mostRepeatedCategory);

    const categories: ICategory[] = await CategoryHandler.breadcrumByCategory(topCategory);
    return {
      author: AUTHOR_SIGN,
      items,
      categories
    };
  },
  productDetailResponseHandler: async (productDetailServices: IFullProductServices) => {
    const { item, author } = ProductMapper.mapFromFullProductServicesToLocalFullProduct(productDetailServices);

    const categories: ICategory[] = await CategoryHandler.breadcrumByCategory(productDetailServices.category_id);
    return {
      author,
      item,
      categories
    };
  },
  productWithDescription: async (prevData: IFullItem, productId: string) => {
    const descriptionResponse = await fetch(`${API_BASE_URL}/items/${productId}/description`);
    const descriptionDataService: IDescriptionServices = await descriptionResponse.json();

    return {
      ...prevData,
      description: `${descriptionDataService.plain_text}`
    };
  },
  productsWithCity: async (products: IItem[]) => {
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
  },
};

export default ProductHandler;