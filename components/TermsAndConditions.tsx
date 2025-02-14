interface TermSection {
    title: string;
    content: string;
  }
  
  interface TermsAndConditionsProps {
    sections?: TermSection[];
  }
  
  const defaultSections: TermSection[] = [
    {
      title: "Introduction",
      content: "Welcome to Nexus International Alliance Pvt. Ltd. By accessing or using our services and products, you agree to comply with and be bound by the following terms and conditions. Please read them carefully."
    },
    {
      title: "Services and Products",
      content: "Nexus International Alliance Pvt. Ltd. offers a range of services and products. Detailed information about our offerings can be found on our website. All services and products are provided \"as is\" without any guarantees or warranties unless specifically stated otherwise."
    },
    {
      title: "User Responsibilities",
      content: "Users are expected to use our services and products responsibly and in compliance with all applicable laws and regulations. Any misuse or unauthorized use of our offerings is strictly prohibited."
    },
    {
      title: "Payment Terms",
      content: "All payments for services and products must be made in accordance with the payment terms specified at the time of purchase. We accept various payment methods, including credit cards, bank transfers, and digital wallets. In case of payment disputes, please contact our customer support team."
    },
    {
      title: "Confidentiality",
      content: "Any confidential information shared between Nexus International Alliance Pvt. Ltd. and its clients must be kept confidential and not disclosed to any third parties without prior written consent."
    },
    {
      title: "Intellectual Property",
      content: "All intellectual property rights related to our services and products, including trademarks, logos, and content, are owned by Nexus International Alliance Pvt. Ltd. Users are not permitted to use, reproduce, or distribute our intellectual property without explicit permission."
    },
    {
      title: "Limitation of Liability",
      content: "Nexus International Alliance Pvt. Ltd. shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use our services and products. Our liability is limited to the maximum extent permitted by law."
    },
    {
      title: "Termination",
      content: "We reserve the right to terminate or suspend access to our services and products at any time without prior notice if users violate these terms and conditions."
    },
    {
      title: "Amendments",
      content: "Nexus International Alliance Pvt. Ltd. may update or modify these terms and conditions at any time. It is the user's responsibility to review the terms regularly. Continued use of our services and products constitutes acceptance of the updated terms."
    },
    {
      title: "Governing Law",
      content: "These terms and conditions shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Sri Lanka."
    }
  ];
  
  const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ sections = defaultSections }) => {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-2 mb-8">
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
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Terms and Conditions</h1>
        </div>
  
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="space-y-6">
            {sections.map((section, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-blue-600 font-semibold">{index + 1}.</span>
                  <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                </div>
                <p className="text-gray-600 ml-6">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default TermsAndConditions;