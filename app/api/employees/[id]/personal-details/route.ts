import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

const personalDetailsSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, required: true }, // Ensure uniqueness
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  nationality: { type: String, required: true },
  nicPassport: { type: String, required: true },
  currentAddress: { type: String, required: true },
  mobilePhone: { type: String, required: true },
  homePhone: String,
  email: { type: String, required: true },
  startDate: { type: Date, required: true },
  emergencyContactName: { type: String, required: true },
  emergencyContactPhone: { type: String, required: true },
  bankName: { type: String, required: true },
  bankAccountNumber: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const PersonalDetails =
  mongoose.models.PersonalDetails ||
  mongoose.model("PersonalDetails", personalDetailsSchema);

  export async function POST(
    request: Request,
    context: { params: { id: string } }
  ) {
    try {
      const params = await context.params; // ✅ Await params
  
      await connectDB();
      const data = await request.json();
  
      if (!params?.id) {
        return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 });
      }
  
      if (!mongoose.Types.ObjectId.isValid(params.id)) {
        return NextResponse.json({ error: 'Invalid employee ID format' }, { status: 400 });
      }
  
      // ✅ Add employeeId safely
      data.employeeId = params.id;
  
      // ✅ Use params.id safely
      const personalDetails = await PersonalDetails.findOneAndUpdate(
        { employeeId: params.id },
        data,
        { upsert: true, new: true }
      );
  
      return NextResponse.json({ success: true, data: personalDetails });
    } catch (error) {
      console.error('🚨 Error saving personal details:', error);
      return NextResponse.json(
        { error: 'Failed to save personal details' },
        { status: 500 }
      );
    }
  }
  
  

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  try {
    const params = await context.params; // ✅ Await params

    if (!params?.id) {
      return NextResponse.json({ error: 'Employee ID is required' }, { status: 400 });
    }

    if (!mongoose.Types.ObjectId.isValid(params.id)) {
      return NextResponse.json({ error: 'Invalid employee ID format' }, { status: 400 });
    }

    await connectDB();

    const personalDetails = await PersonalDetails.findOne({ employeeId: params.id });

    if (!personalDetails) {
      return NextResponse.json({ exists: false }, { status: 404 });
    }

    return NextResponse.json(personalDetails);
  } catch (error) {
    console.error('🚨 Error fetching personal details:', error);
    return NextResponse.json({ error: 'Failed to fetch personal details' }, { status: 500 });
  }
}
