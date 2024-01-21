import { API_BASE_URL } from '@/constants/globals';
import { ICategory, ICategoryServices, IMostRepeatedCategory } from '@/types/types';

const CategoryHandler = {
  chooseTopCategory: (categories: IMostRepeatedCategory) => {
    return Object.keys(categories).reduce((prev, current) => {
      if (!prev) {
        return current;
      }
      return categories[prev] >= categories[current]
        ? prev
        : current;
    });
  },
  breadcrumByCategory: async (_categoryId: string) => {
    const categoriesResponse = await fetch(`${API_BASE_URL}/categories/${_categoryId}`);
    const categoryDataService: ICategoryServices = await categoriesResponse.json();
    const categories: ICategory[] = categoryDataService.path_from_root.map(path => ({
      id: path.id,
      name: path.name
    }));

    return categories;
  }
};

export default CategoryHandler;