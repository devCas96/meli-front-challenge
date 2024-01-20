import { IUser } from '@/types/types';

const UserServices = {
  getUserById: async (_userId: number) => {
    const response = await fetch(`https://api.mercadolibre.com/users/${_userId}`);
    const user: IUser = await response.json();
    return user;
  }
};

export default UserServices;