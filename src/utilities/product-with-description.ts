import { API_BASE_URL } from '@/constants/globals';
import { IDescriptionServices, IFullItem } from '@/types/types';


export const productWithDescription = async (prevData: IFullItem, productId: string) => {
  const descriptionResponse = await fetch(`${API_BASE_URL}/items/${productId}/description`);
  const descriptionDataService: IDescriptionServices = await descriptionResponse.json();
  const description = descriptionDataService.plain_text;
  return {
    ...prevData,
    description: `${description}`
  };
};