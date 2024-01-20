export enum FrontErrors {
  EMPTY_RESULT = 'Ups! No results found with those search params.'
}

export enum BackErrors {
  WRONG_PARAMS = 'Invalid request parameters.',
  SERVER_ERROR = 'Failed to fetch data from the external API.',
  UNKNOW_ERROR = 'An unknown error occurred.',
}