"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation"; // Import useParams
import EmployeeDetails from "@/components/EmployeeDetails";
import Header from "@/components/Header";
import PersonalDetailsForm from "@/components/PersonalDetailsForm";
import EmployeeAgreement from "@/components/EmployeeAgreement";
import CompanyManagement from "@/components/CompanyManagement";
import TermsAndConditions from "@/components/TermsAndConditions";
import EmployeeConditions from "@/components/EmployeeConditions";
import PrivacyPolicy from "@/components/PrivacyPolicy";
import PolicyAndTraining from "@/components/PolicyAndTraining";
import CodeOfConduct from "@/components/CodeOfConduct";
import AgreementSection from "@/components/AggreementSection";
import OfficialSeal from "@/components/OfficialSeal";
import Footer from "@/components/Footer";

export default function EmployeePage() {
  const params = useParams(); // Unwrap params
  const [docReference, setDocReference] = useState("");
  const [id, setId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (params?.id) {
      setId(params.id as string);
    }

    // Generate document reference ID only once when component mounts
    const generateDocReference = () => {
      const prefix = "NIA_DEA";
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 10000);
      return `${prefix}-${timestamp}${random}-5690`;
    };
    setDocReference(generateDocReference());
  }, [params]);

  if (!id) return <div>Loading...</div>; // Ensure ID is available before rendering

  const policies = [
    { name: "Employment Agreement" },
    { name: "Privacy Policy" },
    { name: "Teams and Collaboration Policy" },
    { name: "Training Agreement" },
    { name: "Code of Conduct and Ethics" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header docReference={docReference} />

      <div className="flex-grow bg-gray-50 py-8">
        <EmployeeAgreement
          companyName="Nexus International Alliance Pvt. Ltd."
          establishedYear={2022}
        />
        <div className=" bg-gray-50">
          <CompanyManagement />
        </div>
        <div className=" bg-gray-50">
          <TermsAndConditions />
        </div>
        <div className=" bg-gray-50">
          <EmployeeConditions />
        </div>

        <div className=" bg-gray-50">
          <EmployeeDetails id={id} />
        </div>
        <div className=" bg-gray-50">
          <PrivacyPolicy />
        </div>
        <div className=" bg-gray-50">
          <PolicyAndTraining />
        </div>
        <div className=" bg-gray-50">
          <CodeOfConduct />
        </div>
        <div className=" bg-gray-50">
          <AgreementSection policies={policies} />
        </div>

        <PersonalDetailsForm employeeId={id} />
        <div className="bg-gray-50 p-8">
          <OfficialSeal docReference={docReference} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
