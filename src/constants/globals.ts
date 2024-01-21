const MELI_API_BASE_URL = 'https://api.mercadolibre.com/';
const MELI_SITE_ID = 'MLA/';

export const IS_VALID_STRING_REGEX = /^[a-z0-9,ñ\s]{0,255}$/i;
export const EXTERNAL_API_LIMIT = 4;
export const API_BASE_URL_WITH_SITEID = `${MELI_API_BASE_URL}sites/${MELI_SITE_ID}`;
export const API_BASE_URL = `${MELI_API_BASE_URL}`;