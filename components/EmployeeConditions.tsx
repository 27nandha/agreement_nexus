import { FaRegFileAlt ,FaDoorOpen , FaBalanceScale, FaHeart, FaLock,FaLightbulb ,FaGraduationCap  } from "react-icons/fa";
import {  FaHandshake } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled , MdComputer} from "react-icons/md";

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
      icon: "door"
    },
    {
      id: 9,
      title: "Amendments",
      content: "The Company reserves the right to update or modify these conditions at any time. Employees will be notified of any changes and are expected to comply with the updated conditions.",
      icon: "file"
    },
    {
      id: 10,
      title: "Work-Life Balance",
      content: "The Company values the well-being of its employees and promotes a healthy work-life balance. Employees are encouraged to take their allotted vacation days and personal time to recharge and maintain productivity.",
      icon: "balance"
    },
    {
      id: 11,
      title: "Professional Development",
      content: "The Company is committed to supporting employees' professional growth through training, mentoring, and development opportunities. Employees are encouraged to pursue relevant certifications and skills enhancement programs that benefit both their career advancement and the Company's objectives.",
      icon: "degree"
    }
  ];
  
  const IconComponent: React.FC<{ icon: string }> = ({ icon }) => {
    const icons = {
      scale: (
        <FaBalanceScale />
      ),
      handshake: (
        <FaHandshake />
      ),
      heart: (
        <FaHeart />
      ),
      lock: (
        <FaLock />
      ),
      clock: (
        <MdOutlineAccessTimeFilled />

      ),
      bulb: (
        <FaLightbulb />
      ),
      computer: (
        <MdComputer />
      ),
      degree: (
        <FaGraduationCap />
      ),
      balance: (
        <FaBalanceScale />
      ),
      door: (
        <FaDoorOpen />
      ),
      file: (
        <FaRegFileAlt />
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
                <div className="text-2xl">

                <IconComponent icon={condition.icon} />
                </div>
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