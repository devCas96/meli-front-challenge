const MELI_API_BASE_URL = 'https://api.mercadolibre.com/sites/';
const MELI_SITE_ID = 'MLA/';

export const IS_VALID_STRING_REGEX = /^[a-z,ñ\s]{0,255}$/i;
export const EXTERNAL_API_LIMIT = 4;
export const API_BASE_URL = `${MELI_API_BASE_URL}${MELI_SITE_ID}`;