import mongoose from 'mongoose';
import { MONGO_URI } from './dotenv';

export const connectDatabase = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGO_URI, {} as mongoose.ConnectOptions);
    console.log(`✅ Connected to MongoDB at ${MONGO_URI}`);
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error);
    process.exit(1);
  }
};
