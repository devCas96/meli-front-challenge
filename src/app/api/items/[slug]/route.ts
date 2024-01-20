import { BackErrors } from '@/constants/errors';
import { API_BASE_URL } from '@/constants/globals';
import { HttpStatus } from '@/constants/http';
import ProductMapper from '@/mappers/product-mapper';
import { IFullProductLocal, IFullProductServices } from '@/types/types';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const productId = params.slug;

  if (!productId) {
    return new Response(BackErrors.WRONG_PARAMS, { status: HttpStatus.BAD_REQUEST });
  }

  const res = await fetch(`${API_BASE_URL}/items/${productId}`);
  if (!res.ok) {
    return new Response(BackErrors.SERVER_ERROR, { status: HttpStatus.INTERNAL_SERVER_ERROR });
  }

  const apiData: IFullProductServices = await res.json();
  const localProduct: IFullProductLocal = ProductMapper.mapFromFullProductServicesToLocalFullProduct(apiData);

  return Response.json(localProduct);
}