'use client';
import { useState, useEffect } from 'react';
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

interface Employee {
  name: string;
}

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

async function getParams(params: PageProps['params']) {
  if (params instanceof Promise) {
    return (await params).id;
  }
  return params.id;
}

export default function EmployeePage({ params }: PageProps) {
  const [docReference, setDocReference] = useState('');
  const [id, setId] = useState('');
  const [employee] = useState<Employee | null>(null);

  useEffect(() => {
    const init = async () => {
      const employeeId = await getParams(params);
      setId(employeeId);
    };
    init();

    const generateDocReference = () => {
      const prefix = 'NIA_DEA';
      const timestamp = Date.now();
      const random = Math.floor(Math.random() * 10000);
      return `${prefix}-${timestamp}${random}-5690`;
    };

    setDocReference(generateDocReference());
  }, [params]); // Generate once when component mounts

  if (!id) return null;

  const policies = [
    { name: "Employment Agreement" },
    { name: "Privacy Policy" },
    { name: "Teams and Collaboration Policy" },
    { name: "Training Agreement" },
    { name: "Code of Conduct and Ethics" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header staffId={id} docReference={docReference} />
      
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
          <AgreementSection 
            policies={policies}
            employeeName={employee?.name || ''}
          />
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