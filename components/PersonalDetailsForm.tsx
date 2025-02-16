'use client';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import SignaturePad from 'react-signature-canvas';
import PDFDownloadButton from './PDFDownloadButton';

interface PersonalDetails {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  nicPassport: string;
  currentAddress: string;
  mobilePhone: string;
  homePhone: string;
  email: string;
  startDate: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  bankName: string;
  accountNumber: string;
  idCard?: File;
  idCardPreview?: string;
  digitalSignature?: string;
  agreedToTerms: boolean;
}

interface PersonalDetailsFormProps {
  employeeId: string;
}

export default function PersonalDetailsForm({ employeeId }: PersonalDetailsFormProps) {
  const router = useRouter();
  const signaturePadRef = useRef<SignaturePad>(null);
  const [formData, setFormData] = useState<PersonalDetails>({
    firstName: '',
    middleName: '',
    lastName: '',
    dateOfBirth: '',
    nationality: '',
    nicPassport: '',
    currentAddress: '',
    mobilePhone: '',
    homePhone: '',
    email: '',
    startDate: '',
    emergencyContactName: '',
    emergencyContactPhone: '',
    bankName: '',
    accountNumber: '',
    agreedToTerms: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const clearSignature = () => {
    if (signaturePadRef.current) {
      signaturePadRef.current.clear();
    }
  };

  const compressImage = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Max dimensions
          const MAX_WIDTH = 800;
          const MAX_HEIGHT = 600;

          // Calculate new dimensions
          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          // Compress and convert to base64
          const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // 0.7 quality
          resolve(compressedBase64);
        };
        img.src = e.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  };

  const handleIdCardUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
        alert('File size should be less than 5MB');
        return;
      }

      try {
        const compressedBase64 = await compressImage(file);
        setFormData(prev => ({
          ...prev,
          idCard: file,
          idCardPreview: compressedBase64
        }));
    } catch (error) {
        console.error('Error compressing image:', error);
        alert('Error processing image');
      }
    }
};

const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation checks...
    if (!signaturePadRef.current?.toData().length || !formData.idCard) {
      alert('Please complete all required fields');
      return;
    }

    try {
      setIsGeneratingPDF(true);

      // First generate and download PDF
      const signaturePad = document.querySelector('canvas');
      const currentSignature = signaturePad?.toDataURL('image/png');

      const pdfResponse = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          url: window.location.href,
          formData: {
            ...formData,
            digitalSignature: currentSignature || '',
            idCardPreview: formData.idCardPreview || ''
          }
        })
      });

      if (!pdfResponse.ok) {
        throw new Error('PDF generation failed');
      }

      // Download PDF
      const blob = await pdfResponse.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'employee-agreement.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      // After successful PDF download, save personal details
      const formDataToSend = {
        firstName: formData.firstName,
        middleName: formData.middleName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth,
        nationality: formData.nationality,
        nicPassport: formData.nicPassport,
        currentAddress: formData.currentAddress,
        mobilePhone: formData.mobilePhone,
        homePhone: formData.homePhone,
        email: formData.email,
        startDate: formData.startDate,
        emergencyContactName: formData.emergencyContactName,
        emergencyContactPhone: formData.emergencyContactPhone,
        bankName: formData.bankName,
        accountNumber: formData.accountNumber
      };

      const response = await fetch(`/api/employees/${employeeId}/personal-details`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSend),
      });

      if (!response.ok) {
        throw new Error('Failed to save personal details');
      }

      setIsSubmitted(true);
      alert('Agreement signed and personal details saved successfully!');
      router.push('/contact-admin');
    } catch (error) {
      console.error('Error:', error);
      alert('Error processing your request');
    } finally {
      setIsGeneratingPDF(false);
    }
};

  return (
    <div className="bg-[#F8FAFC] p-8 rounded-lg max-w-5xl mx-auto">
      <h1 className="text-[#1E3A8A] text-2xl font-bold mb-8">Employee Information & Signature</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Middle Name
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Date of Birth<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Nationality<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              NIC/Passport Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="nicPassport"
              value={formData.nicPassport}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Current Address<span className="text-red-500">*</span>
            </label>
            <textarea
              name="currentAddress"
              value={formData.currentAddress}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Mobile Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="mobilePhone"
              value={formData.mobilePhone}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Home Phone
            </label>
            <input
              type="tel"
              name="homePhone"
              value={formData.homePhone}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-[#1E3A8A] font-medium mb-2">
              Start Date<span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          </div>

        {/* Emergency Contact Information */}
        <div>
          <h2 className="text-[#1E3A8A] text-xl font-bold mb-4">Emergency Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
              <label className="block text-[#1E3A8A] font-medium mb-2">
                Contact Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="emergencyContactName"
              value={formData.emergencyContactName}
              onChange={handleChange}
                className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
              <label className="block text-[#1E3A8A] font-medium mb-2">
                Contact Phone<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="emergencyContactPhone"
              value={formData.emergencyContactPhone}
              onChange={handleChange}
                className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            </div>
          </div>
          </div>

        {/* Bank Account Details */}
        <div>
          <h2 className="text-[#1E3A8A] text-xl font-bold mb-4">Bank Account Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
              <label className="block text-[#1E3A8A] font-medium mb-2">
              Bank Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="bankName"
              value={formData.bankName}
              onChange={handleChange}
                className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
              <label className="block text-[#1E3A8A] font-medium mb-2">
                Account Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
                name="accountNumber"
                value={formData.accountNumber}
              onChange={handleChange}
                className="w-full p-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              />
            </div>
          </div>
        </div>

        {/* ID Card Upload */}
        <div className="mt-8">
          <h2 className="text-[#1E3A8A] text-xl font-bold mb-4">ID Card Upload*</h2>
          <div className="border-2 border-dashed border-[#E2E8F0] rounded-lg p-8 text-center">
            {formData.idCardPreview ? (
              <div className="space-y-4">
                <div className="relative max-w-md mx-auto">
                  <img 
                    src={formData.idCardPreview} 
                    alt="ID Card Preview" 
                    className="max-w-full h-auto rounded-lg shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, idCard: undefined, idCardPreview: undefined }))}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <p className="text-sm text-gray-500">Click the X to remove and upload a different file</p>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <p className="text-[#1E3A8A] mb-2">Drag and drop your ID card or click to browse</p>
                <p className="text-sm text-gray-500">Supported formats: PDF, JPG, PNG (Max 5MB)</p>
                <label className="mt-4 px-4 py-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 cursor-pointer">
                  <span>Upload File</span>
                  <input
                    type="file"
                    accept=".pdf,.jpg,.jpeg,.png"
                    onChange={handleIdCardUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        {/* Digital Signature */}
        <div className="mt-8">
          <h2 className="text-[#1E3A8A] text-xl font-bold mb-4">Digital Signature*</h2>
          <div className="border border-[#E2E8F0] rounded-lg p-4 bg-white">
            <SignaturePad
              ref={signaturePadRef}
              canvasProps={{
                className: "w-full h-40 border border-gray-200 rounded"
              }}
            />
            <button
              type="button"
              onClick={clearSignature}
              className="mt-2 px-4 py-2 text-sm text-blue-600 hover:text-blue-700"
            >
              Clear Signature
            </button>
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="mt-8 space-y-6">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              name="agreedToTerms"
              checked={formData.agreedToTerms}
              onChange={(e) => setFormData(prev => ({ ...prev, agreedToTerms: e.target.checked }))}
              className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
              I have read and agree to the terms and conditions*
            </label>
          </div>

          <div className="mt-8 space-y-4">
          <button
            type="submit"
              disabled={!formData.agreedToTerms || isGeneratingPDF}
              className="w-full py-3 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
              {isGeneratingPDF ? 'Please wait for few minutes to generate agreement...' : 'Submit & Sign Agreement'}
          </button>
          </div>
        </div>
      </form>
    </div>
  );
}

  
