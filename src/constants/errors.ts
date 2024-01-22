export enum FrontErrors {
  EMPTY_RESULT = 'Ups! No results found with those search params.',
  INVALID_ROUTE = 'Ups! Genius captured. Let\'s try to search in the searchbar.',
  NOT_FOUND = 'The requested page is not available. Try to go back home.',
  GENERAL_ERROR = 'Something went wrong, try to go back home'
}

export enum BackErrors {
  WRONG_PARAMS = 'Invalid request parameters.',
  SERVER_ERROR = 'Failed to fetch data from the external API.',
  UNKNOW_ERROR = 'An unknown error occurred.',
}