import mongoose, { Mongoose } from 'mongoose';

if (!process.env.MONGO_URI) {
  throw new Error('Please add your MONGO_URI to .env.local');
}

const MONGO_URI = process.env.MONGO_URI;


{/* eslint-disable-next-line */}
let cached = (global as any).mongoose;

if (!cached) {
  {/* eslint-disable-next-line */}
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB(): Promise<Mongoose> {
    if (cached.conn) {
      console.log('Using cached connection');
      return cached.conn;
    }
  
    if (!cached.promise) {
      const opts = {
        bufferCommands: false,
      };
  
      cached.promise = mongoose.connect(MONGO_URI, opts);
    }
  
    try {
      cached.conn = await cached.promise;
      console.log('New connection established');
      console.log(`MongoDB Connected: ${cached.conn.connection.host}`);
    } catch (e) {
      cached.promise = null;
      throw e;
    }
  
    return cached.conn;
  }

export default connectDB;