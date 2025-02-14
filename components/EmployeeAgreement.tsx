interface CompanyOverviewProps {
    companyName: string;
    establishedYear: number;
  }
  
  const EmployeeAgreement: React.FC<CompanyOverviewProps> = ({
    companyName = "Nexus International Alliance Pvt. Ltd.",
    establishedYear = 2022,
  }) => {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-blue-600">Employee Agreement</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-6">
          {/* Company Overview Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="text-blue-600">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-blue-600">Company Overview</h2>
            </div>
            
            <p className="text-gray-700">
              <span className="text-blue-600">{companyName}</span>, established in {establishedYear}, 
              is a dynamic company that excels in providing exceptional services and high-quality products.
            </p>
  
            {/* Two Column Layout */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Our Expertise */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Our Expertise</h3>
                <p className="text-gray-700">
                  Our offerings span various industries, catering to the unique needs of our diverse 
                  clientele. We are committed to delivering unparalleled customer satisfaction through 
                  innovative solutions and reliable service.
                </p>
              </div>
  
              {/* Our Commitment */}
              <div className="bg-white rounded-lg p-6 shadow">
                <h3 className="text-lg font-semibold text-blue-600 mb-3">Our Commitment</h3>
                <p className="text-gray-700">
                  Our team of dedicated professionals works tirelessly to ensure that our clients 
                  receive the best possible experience. At Nexus International, we believe in fostering 
                  long-term relationships with our customers and partners.
                </p>
              </div>
            </div>
  
            {/* Mission Statement */}
            <div className="border-l-4 border-blue-600 pl-4 mt-6">
              <p className="text-gray-700">
                Our mission is to be a trusted partner in your success, offering a comprehensive range 
                of products and services that drive growth and efficiency. With a focus on integrity, 
                quality, and customer-centricity, Nexus International Pvt. Ltd. stands out as a leader 
                in the market, poised for continued growth and excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default EmployeeAgreement;