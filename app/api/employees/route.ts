import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

// Define Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  role: String,
  responsibilities: String,
  payment: String,
  payment_date: String,
  benefits: String,
  working_hours: String,
  starting_time: String,
  ending_time: String,
  break_time: String,
  annual_leave: String,
  sick_leave: String,
  notice_period: String,
  termination_notice: String,
  geographic_location: String,
  createdAt: { type: Date, default: Date.now }
});

// Get or create the model
const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export async function POST(request: Request) {
  try {
    await connectDB();
    
    const data = await request.json();
    
    const employee = new Employee({
      ...data,
      salary: parseFloat(data.salary)
    });

    const savedEmployee = await employee.save();

    return NextResponse.json({ success: true, id: savedEmployee._id });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to save employee data' },
      { status: 500 }
    );
  }
}