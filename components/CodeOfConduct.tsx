export default function CodeOfConduct() {
    return (
      <div className="w-full p-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center mb-8">
            <svg className="w-8 h-8 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            <h1 className="text-2xl font-bold text-gray-900">Code of Conduct and Ethics</h1>
          </div>
  
          {/* Professionalism Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-600">1. Professionalism</h2>
            </div>
            <ul className="space-y-3 ml-12">
              {[
                "Maintain professional behavior",
                "Follow company guidelines"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
  
          {/* Anti-Discrimination Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-600">2. Anti-Discrimination and Harassment</h2>
            </div>
            <div className="ml-12">
              <p className="text-gray-700">
                Nexus International Academy Pvt. Ltd. maintains a zero-tolerance policy for discrimination or harassment. 
                Report any violations immediately.
              </p>
            </div>
          </div>
          {/* Conflicts of Interest Section */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-blue-600">3. Conflicts of Interest</h2>
            </div>
            <div className="ml-12">
              <p className="text-gray-700">
              Disclose any potential conflicts of interest to management immediately.
              </p>
            </div>
          </div>
  
          
         
          <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <div className="bg-blue-600 rounded-full p-2 mr-3">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-blue-600">4. Compliance with Laws</h2>
          </div>
          <div className="ml-12">
            <p className="text-gray-700">
              Strict compliance with all applicable laws and regulations is mandatory.
            </p>
          </div>
        </div>
          
  
          
        </div>
      </div>
    );
  }