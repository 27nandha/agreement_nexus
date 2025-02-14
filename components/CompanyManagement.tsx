interface ManagementMember {
    title: string;
    name: string;
    icon: string;
  }
  
  interface CompanyManagementProps {
    members?: ManagementMember[];
  }
  
  const defaultMembers: ManagementMember[] = [
    {
      title: "CEO and Director",
      name: "Fayaz Ahammed",
      icon: "crown",
    },
    {
      title: "Chief Technical Officer",
      name: "Mohammed Sabry",
      icon: "chip",
    },
    {
      title: "Chief Financial Officer",
      name: "Mohammed Musni",
      icon: "chart",
    },
    {
      title: "Chief Marketing Officer",
      name: "Mohammed Nashad",
      icon: "megaphone",
    },
    {
      title: "Chief Human Resource Officer",
      name: "Fathima Reeza",
      icon: "users",
    },
    {
      title: "Chief Sales Officer",
      name: "Waseem Akram",
      icon: "handshake",
    },
  ];
  
  const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
    const icons = {
      crown: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4l-8 6 4 12h8l4-12-8-6z" />
        </svg>
      ),
      chip: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      chart: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      megaphone: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      users: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      handshake: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    };
  
    return (
      <div className="bg-blue-600 p-2 rounded-full text-white">
        {icons[icon as keyof typeof icons]}
      </div>
    );
  };
  
  const CompanyManagement: React.FC<CompanyManagementProps> = ({ members = defaultMembers }) => {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-blue-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Company Management</h2>
        </div>
  
        <p className="text-gray-600">
          We, the employees of Nexus, would like to convey our gratitude for your continuous guidance and support. 
          We value the efforts of our leadership team, and would like to recognize the following members:
        </p>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {members.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex items-center gap-4">
              <IconComponent icon={member.icon} />
              <div>
                <h3 className="font-semibold text-gray-900">{member.title}</h3>
                <p className="text-blue-600">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CompanyManagement;