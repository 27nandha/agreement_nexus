import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

// Define schema
const personalDetailsSchema = new mongoose.Schema({
  employeeId: { type: String, unique: true, required: true },
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

// Ensure model is not redefined
const PersonalDetails =
  mongoose.models.PersonalDetails ||
  mongoose.model("PersonalDetails", personalDetailsSchema);

// ✅ Fix: Extract params correctly from `request`'s URL
export async function GET(request: Request) {
  try {
    await connectDB();

    // Extract `id` from URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });
    }

    const personalDetails = await PersonalDetails.findOne({ employeeId: id });

    if (!personalDetails) {
      return NextResponse.json({ exists: false }, { status: 404 });
    }

    return NextResponse.json(personalDetails);
  } catch (error) {
    console.error("🚨 Error fetching personal details:", error);
    return NextResponse.json(
      { error: "Failed to fetch personal details" },
      { status: 500 }
    );
  }
}

// ✅ Fix: Correct parameter handling in `POST`
export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();

    // Extract `id` from URL
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Employee ID is required" }, { status: 400 });
    }

    data.employeeId = id;

    const personalDetails = await PersonalDetails.findOneAndUpdate(
      { employeeId: id },
      data,
      { upsert: true, new: true }
    );

    return NextResponse.json({ success: true, data: personalDetails });
  } catch (error) {
    console.error("🚨 Error saving personal details:", error);
    return NextResponse.json(
      { error: "Failed to save personal details" },
      { status: 500 }
    );
  }
}
