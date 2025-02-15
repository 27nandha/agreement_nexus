import { NextResponse } from 'next/server';
import bcrypt from "bcryptjs";
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';

// Define User Schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String,
  role: { type: String, default: 'admin' }
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    await connectDB();

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      return NextResponse.json({ message: "Admin already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new admin
    const admin = new User({
      email,
      password: hashedPassword,
      role: 'admin'
    });

    await admin.save();

    return NextResponse.json({ message: "Admin created successfully" }, { status: 201 });

  } catch (error) {
    console.error('Create admin error:', error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
} 