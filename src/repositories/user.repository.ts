import { User, IUser } from '../models/user.model';

export class UserRepository {
  /**
   * Create a new user
   * @param userData - Object containing user details
   * @returns Created user document
   */
  async createUser(userData: Partial<IUser>): Promise<IUser> {
    return await User.create(userData);
  }

  /**
   * Get all users
   * @returns List of user documents
   */
  async getAllUsers(): Promise<IUser[]> {
    return await User.find();
  }

  /**
   * Get a user by ID
   * @param userId - MongoDB ObjectId of the user
   * @returns The user document or null if not found
   */
  async getUserById(userId: string): Promise<IUser | null> {
    return await User.findById(userId);
  }

  /**
   * Update a user by ID
   * @param userId - MongoDB ObjectId of the user
   * @param userData - Object containing user updates
   * @returns Updated user document or null if not found
   */
  async updateUserById(userId: string, userData: Partial<IUser>): Promise<IUser | null> {
    return await User.findByIdAndUpdate(userId, userData, {
      new: true,
      runValidators: true,
    });
  }

  /**
   * Delete a user by ID
   * @param userId - MongoDB ObjectId of the user
   * @returns Deleted user document or null if not found
   */
  async deleteUserById(userId: string): Promise<IUser | null> {
    return await User.findByIdAndDelete(userId);
  }
}
