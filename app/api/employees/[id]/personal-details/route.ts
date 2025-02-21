import { NextResponse, NextRequest } from "next/server";
import connectDB from "@/lib/mongodb";
import mongoose from "mongoose";

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

// Ensure the model is not redefined
const PersonalDetails =
  mongoose.models.PersonalDetails ||
  mongoose.model("PersonalDetails", personalDetailsSchema);

// ✅ **GET request to fetch employee details**
export async function GET(request: NextRequest) {
  try {
    await connectDB();

    // Extract the `id` from the URL
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extract the last segment of the URL

    if (!id) {
      return NextResponse.json(
        { error: "Employee ID is required" },
        { status: 400 }
      );
    }

    const personalDetails = await PersonalDetails.findOne({
      employeeId: id,
    });

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

// ✅ **POST request to create or update employee details**
export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const data = await request.json();

    // Extract the `id` from the URL
    const url = new URL(request.url);
    const id = url.pathname.split("/").pop(); // Extract the last segment of the URL

    if (!id) {
      return NextResponse.json(
        { error: "Employee ID is required" },
        { status: 400 }
      );
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