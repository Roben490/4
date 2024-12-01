import mongoose from 'mongoose';
import { IUser } from '../interfaces/IUser';
import { generateUserPassword } from '../utils/comparePassword';
import { Users } from '../models/User.model';
import { userRole } from '../enums/userRole';

export const getUserByIdService = async (id: string): Promise<IUser | null> => {
  try {
    return await Users.findById(id);
  } catch (error) {
    throw new Error('Error fetching User');
  }
};

export const getAllUsersService = async (): Promise<IUser[] | null> => {
  try {
    return await Users.find();
  } catch (error) {
    throw new Error('Error fetching User');
  }
};

export const updateUserService = async (id: string ,user: IUser) => {
  try {
    const updatedUser = await Users.findById(id);
    if (!updatedUser) {
      throw new Error('User not found');
    }
    updatedUser.name = user.name,
    updatedUser.email = user.email,
    updatedUser.password = updatedUser.password,
    updatedUser.role = user.role,
    await updatedUser.save();
    return updatedUser;
  } catch (error) {
    throw new Error('Error updating User score');
  }
};

export const createNewUserService = async (newUser: IUser): Promise<IUser> => {
  try {
      const nUser = new Users ({
        _id: new mongoose.Types.ObjectId(),
        name: newUser.name,
        password: generateUserPassword(newUser.password),
        email: newUser.email,
        role: userRole.Driver,
        });
    await nUser.save(); 
    return nUser;
  } catch (error) {
    throw error;
  }
};


export const deleteUserService = async (userId: string) => {
  try {
      const deletedUser = await Users.findByIdAndDelete(userId);
      if (!deletedUser) {
          throw new Error("User not found");
      }
      return { message: "User deleted successfully" };
  } catch (error: any) {
      return console.error(error); 
  }
};
