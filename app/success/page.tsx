export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full text-center">
        <div className="mb-6">
          <svg 
            className="w-16 h-16 text-green-500 mx-auto"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        
        <h1 className="text-3xl font-bold text-[#1E3A8A] mb-4">
          Agreement Successfully Submitted!
        </h1>
        
        <p className="text-gray-600 text-lg mb-6">
          Thank you for completing the agreement. The document has been downloaded to your device.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-gray-700">
            Please forward the downloaded agreement to:
            <br />
            <a 
              href="mailto:hr@company.com" 
              className="text-blue-600 font-medium hover:underline"
            >
              info@icgnia.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
