import { FaRegFileAlt ,FaDoorOpen } from "react-icons/fa";

interface Condition {
    id: number;
    title: string;
    content: string;
    icon: string;
  }
  
  interface EmployeeConditionsProps {
    conditions?: Condition[];
  }
  
  const defaultConditions: Condition[] = [
    {
      id: 1,
      title: "Equal Opportunity Employment",
      content: "Nexus International Alliance Pvt. Ltd. is committed to providing equal employment opportunities to all employees and applicants. We do not discriminate based on race, color, religion, gender, national origin, age, disability, or any other protected characteristic.",
      icon: "scale"
    },
    {
      id: 2,
      title: "Code of Conduct",
      content: "Employees are expected to adhere to high standards of professionalism and ethical behavior. This includes treating colleagues, clients, and partners with respect and integrity, and conducting business in an honest and transparent manner.",
      icon: "handshake"
    },
    {
      id: 3,
      title: "Health and Safety",
      content: "The Company prioritizes the health and safety of its employees. All employees must comply with safety regulations and protocols to ensure a safe working environment. Any unsafe conditions or incidents must be reported immediately.",
      icon: "heart"
    },
    {
      id: 4,
      title: "Confidentiality",
      content: "Employees must maintain strict confidentiality regarding company information, trade secrets, and client data. Any unauthorized disclosure of confidential information is strictly prohibited and may result in disciplinary action.",
      icon: "lock"
    },
    {
      id: 5,
      title: "Working Hours",
      content: "Standard working hours are 8 hours per day, with flexibility based on project requirements. Employees are expected to maintain regular attendance and punctuality, communicating any schedule changes in advance.",
      icon: "clock"
    },
    {
      id: 6,
      title: "Intellectual Property",
      content: "All work products, innovations, and developments created during employment belong to the company. Employees agree to assign all intellectual property rights to the company and assist in securing these rights when necessary.",
      icon: "bulb"
    },
    {
      id: 7,
      title: "Use of Company Resources",
      content: "Employees are expected to use Company resources, including technology and equipment, responsibly and for work-related purposes only. Misuse of Company resources may result in disciplinary action.",
      icon: "computer"
    },
    {
      id: 8,
      title: "Termination and Resignation",
      content: "Employees are required to provide 30 days' notice in case of resignation. The Company reserves the right to terminate employment immediately for cause, including but not limited to, misconduct or breach of Company policies.",
      icon: "lock"
    },
    {
      id: 9,
      title: "Amendments",
      content: "The Company reserves the right to update or modify these conditions at any time. Employees will be notified of any changes and are expected to comply with the updated conditions.",
      icon: "clock"
    },
    {
      id: 10,
      title: "Work-Life Balance",
      content: "The Company values the well-being of its employees and promotes a healthy work-life balance. Employees are encouraged to take their allotted vacation days and personal time to recharge and maintain productivity.",
      icon: "bulb"
    },
    {
      id: 11,
      title: "Professional Development",
      content: "The Company is committed to supporting employees' professional growth through training, mentoring, and development opportunities. Employees are encouraged to pursue relevant certifications and skills enhancement programs that benefit both their career advancement and the Company's objectives.",
      icon: "computer"
    }
  ];
  
  const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
    const icons = {
      scale: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      handshake: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      heart: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      lock: (
        <FaDoorOpen />
      ),
      clock: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bulb: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      computer: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    };
  
    return (
      <div className="bg-blue-600 p-2 rounded-full text-white">
        {icons[icon as keyof typeof icons]}
      </div>
    );
  };
  
  const EmployeeConditions: React.FC<EmployeeConditionsProps> = ({ conditions = defaultConditions }) => {
    return (
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="text-blue-600">
          <FaRegFileAlt  className="text-2xl"/>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Employee Conditions</h1>
        </div>
  
        <div className="space-y-4">
          {conditions.map((condition) => (
            <div 
              key={condition.id} 
              className="bg-white rounded-lg shadow-sm p-6"
            >
              <div className="flex items-start gap-4">
                <IconComponent icon={condition.icon} />
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-blue-600">
                    {condition.id}. {condition.title}
                  </h2>
                  <p className="text-gray-600">
                    {condition.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default EmployeeConditions;