import ProductMapper from '@/mappers/product-mapper';
import { IItem, IProductServices, IProductsLocal } from '@/types/types';
import { BackErrors } from '@/constants/errors';
import { API_BASE_URL_WITH_SITEID, EXTERNAL_API_LIMIT } from '@/constants/globals';
import { HttpStatus } from '@/constants/http';
import { productsWithCity } from '@/utilities/products-with-city';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return new Response(BackErrors.WRONG_PARAMS, { status: HttpStatus.BAD_REQUEST });
  }

  const res = await fetch(`${API_BASE_URL_WITH_SITEID}/search?q=${query}&limit=${EXTERNAL_API_LIMIT}`);

  if (!res.ok) {
    return new Response(BackErrors.SERVER_ERROR, { status: HttpStatus.INTERNAL_SERVER_ERROR });
  }

  const apiData: IProductServices = await res.json();

  const localProducts: IProductsLocal = ProductMapper.mapFromProductServicesToLocalProduct(apiData);
  const localProductsWithCity: IItem[] = await productsWithCity(localProducts.items);

  localProducts.items = localProductsWithCity;


  return Response.json(localProducts);
}