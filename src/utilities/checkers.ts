import { IS_VALID_STRING_REGEX } from '@/constants/globals';

const Checkers = {
  checkIsValidString: (text: string): boolean => {
    if (text.trim().length === 0) return false;
    return IS_VALID_STRING_REGEX.test(text);
  }
};

export default Checkers;