import { BackErrors } from '@/constants/errors';
import { API_BASE_URL_WITH_SITEID, EXTERNAL_API_LIMIT } from '@/constants/globals';
import { HttpStatus } from '@/constants/http';
import { IItem, IProductServices, IProductsLocal } from '@/types/types';
import ProductHandler from '@/utilities/product-handler';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return new Response(JSON.stringify(BackErrors.WRONG_PARAMS), { status: HttpStatus.BAD_REQUEST });
  }

  const res = await fetch(`${API_BASE_URL_WITH_SITEID}/search?q=${query}&limit=${EXTERNAL_API_LIMIT}`);

  if (!res.ok) {
    return new Response(JSON.stringify(BackErrors.SERVER_ERROR), { status: HttpStatus.INTERNAL_SERVER_ERROR });
  }

  //Initial fetch of Products
  const apiBaseData: IProductServices = await res.json();

  //Fetch Products categories, city and merge with the prev data
  const localProducts: IProductsLocal = await ProductHandler.productResponseHandler(apiBaseData.results);
  const localProductsWithCity: IItem[] = await ProductHandler.productsWithCity(localProducts.items);

  localProducts.items = localProductsWithCity;

  return Response.json(localProducts);
}