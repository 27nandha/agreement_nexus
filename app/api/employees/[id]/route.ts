import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import mongoose from 'mongoose';

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
  createdAt: { type: Date, default: Date.now },
});

const Employee = mongoose.models.Employee || mongoose.model('Employee', employeeSchema);

export async function GET(
  request: Request,
  context: { params: { id: string } } // ✅ params is inside context
) {
  try {
    const { id } = context.params; // ✅ No need to await params

    if (!id) {
      return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 });
    }

    // Optional: Validate if the ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json({ error: 'Invalid employee ID format' }, { status: 400 });
    }

    await connectDB(); // Ensure the database connection is established

    const employee = await Employee.findById(id).select('-__v').lean();

    if (!employee) {
      return NextResponse.json({ error: 'Employee not found' }, { status: 404 });
    }

    return NextResponse.json(employee);
  } catch (error) {
    console.error('🚨 Error fetching employee:', error);
    return NextResponse.json({ error: 'Failed to fetch employee' }, { status: 500 });
  }
}