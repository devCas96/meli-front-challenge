import { IFullItem, IFullProductLocal, IFullProductServices } from '@/types/types';
import { BackErrors } from '@/constants/errors';
import { API_BASE_URL } from '@/constants/globals';
import { HttpStatus } from '@/constants/http';
import ProductHandler from '@/utilities/product-handler';

export const dynamic = 'force-dynamic';

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const productId = params.slug;

  if (!productId) {
    return new Response(JSON.stringify(BackErrors.WRONG_PARAMS), { status: HttpStatus.BAD_REQUEST });
  }

  const res = await fetch(`${API_BASE_URL}/items/${productId}`);
  if (!res.ok) {
    return new Response(JSON.stringify(BackErrors.SERVER_ERROR), { status: HttpStatus.INTERNAL_SERVER_ERROR });
  }

  //Initial fetch of Product detail
  const apiBaseData: IFullProductServices = await res.json();
  const localProduct: IFullProductLocal = await ProductHandler.productDetailResponseHandler(apiBaseData);

  //Fetch Product detail description and merge with the prev data
  const localProductWithDescription: IFullItem = await ProductHandler.productWithDescription(localProduct.item, productId);

  localProduct.item = localProductWithDescription;

  return Response.json(localProduct);
}