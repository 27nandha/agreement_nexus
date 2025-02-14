export default function PrivacyPolicy() {
    return (
      <div className="w-full p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Data Collection Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4 7v14h14v2H4c-1.1 0-2-.9-2-2V7h2zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H8V5h12v12z"/>
                </svg>
                <h2 className="text-xl font-semibold text-blue-600">Data Collection</h2>
              </div>
              <p className="mb-4">Nexus International Alliance Pvt. Ltd. collects the following employee data:</p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                  Personal information (name, address, contact details)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"/>
                  </svg>
                  Financial information (bank account details)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  </svg>
                  Health information (insurance purposes)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
                  </svg>
                  Employment history and qualifications
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"/>
                  </svg>
                  Performance records and evaluations
                </li>
              </ul>
            </div>
  
            {/* Data Protection Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
                </svg>
                <h2 className="text-xl font-semibold text-blue-600">Data Protection</h2>
              </div>
              <p className="mb-4">We implement security measures including:</p>
              <ul className="space-y-3">
                {[
                  { icon: "🔒", text: "Advanced encryption systems" },
                  { icon: "🔑", text: "Strict access controls" },
                  { icon: "🔍", text: "Regular security audits" },
                  { icon: "👥", text: "Employee training" },
                  { icon: "💾", text: "Secure backup systems" }
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-2">{item.icon}</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Data Usage Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
                </svg>
                <h2 className="text-xl font-semibold text-blue-600">Data Usage</h2>
              </div>
              <p className="mb-4">Employee data will be used for:</p>
              <ul className="space-y-3">
                {[
                  "Payroll processing and financial management",
                  "Benefits administration and insurance",
                  "Performance evaluations",
                  "Legal compliance and reporting",
                  "Internal communications"
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Employee Rights Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              <h2 className="text-xl font-semibold text-blue-600">Employee Rights</h2>
            </div>
            <p className="mb-4">Employees have these data rights:</p>
            <ul className="space-y-3">
              {[
                { icon: "👤", text: "Access personal data" },
                { icon: "✏️", text: "Request corrections" },
                { icon: "📝", text: "File privacy complaints" },
                { icon: "🔄", text: "Request data portability" },
                { icon: "⚠️", text: "Be informed of breaches" }
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{item.icon}</span>
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
          <p className="text-sm text-gray-600">
            This privacy policy is effective as of {new Date().toLocaleDateString()} and may be updated periodically. 
            Employees will be notified of any significant changes to this policy.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            For questions or concerns about our privacy practices, please contact the HR department.
          </p>
        </div>
      </div>
    </div>
  );
}