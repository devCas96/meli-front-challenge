import { BackErrors } from '@/constants/errors';
import { API_BASE_URL, EXTERNAL_API_LIMIT } from '@/constants/globals';
import { HttpStatus } from '@/constants/http';
import ProductMapper from '@/mappers/product-mapper';
import { IProductServices, IProductsLocal } from '@/types/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');

  if (!query) {
    return new Response(BackErrors.WRONG_PARAMS, { status: HttpStatus.BAD_REQUEST });
  }

  const res = await fetch(`${API_BASE_URL}/search?q=${query}&limit=${EXTERNAL_API_LIMIT}`);

  if (!res.ok) {
    return new Response(BackErrors.SERVER_ERROR, { status: HttpStatus.INTERNAL_SERVER_ERROR });
  }

  const apiData: IProductServices = await res.json();

  const sanitizedData: IProductsLocal = ProductMapper.mapFromProductServicesToLocalProduct(apiData);
  return Response.json(sanitizedData);
}