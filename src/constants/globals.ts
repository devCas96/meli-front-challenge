import { CloudnaryImages } from './cloudnary-media';

const MELI_API_BASE_URL = 'https://api.mercadolibre.com/';
const MELI_SITE_ID = 'MLA/';

export const IS_VALID_STRING_REGEX = /^[a-z0-9,ñ\s]{0,255}$/i;
export const EXTERNAL_API_LIMIT = 4;
export const API_BASE_URL_WITH_SITEID = `${MELI_API_BASE_URL}sites/${MELI_SITE_ID}`;
export const API_BASE_URL = `${MELI_API_BASE_URL}`;
export const ROOT_URL = process.env.NODE_ENV === 'production' ? 'https://meli-front-challenge-seven.vercel.app/' : 'http://localhost:3000/';
export const BASE_PATH = '/';

export const CLOUDINARY_RESOURCES = {
  logo: {
    alt: 'logo Mercado Libre',
    width: 44,
    height: 32,
    src: CloudnaryImages.LOGO_X2,
  },
  searchIcon: {
    alt: 'Icon search',
    width: 20,
    height: 20,
    src: CloudnaryImages.ICON_SEARCH_X2,
  },
  freeShipingIcon: {
    alt: 'item free shipping',
    width: 20,
    height: 20,
    src: CloudnaryImages.ICON_FREE_SHIPPING,
  }
};

export const EXTERNAL_RESOURCES = {
  resultsImage: {
    width: 180,
    height: 180,
  },
  detailImage: {
    width: 680,
    height: 680,
  }
};

export const AUTHOR_SIGN = {
  name: 'Sebastian',
  lastname: 'Achuri'
};

export enum ButtonTypes {
  SUBMIT = 'submit',
  RESET = 'reset',
  BUTTON = 'button',
}

export enum FormValidations {
  MAX_LENGTH = 120
}