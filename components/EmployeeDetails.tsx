'use client';
import { useEffect, useState } from 'react';

interface Employee {
    name: string;
    salary: number;
    role: string;
    responsibilities: string;
    payment: string;
    payment_date: string;
    benefits: string;
    working_hours: string;
    starting_time: string;
    ending_time: string;
    break_time: string;
    annual_leave: string;
    sick_leave: string;
    notice_period: string;
    termination_notice: string;
    geographic_location: string;
    createdAt: string;
  }

export default function EmployeeDetails({ id }: { id: string }) {  // Changed from employeeId to id
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchEmployee = async () => {
        try {
          const response = await fetch(`/api/employees/${id}`);  // Changed from employeeId to id
          if (!response.ok) {
            throw new Error('Employee not found');
          }
          const data = await response.json();
          setEmployee(data);
        } catch (err) {
          setError(err instanceof Error ? err.message : 'Failed to fetch employee');
        } finally {
          setLoading(false);
        }
      };
  
      fetchEmployee();
    }, [id]);
    const formattedDate = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-500">Error: {error}</div>;
  if (!employee) return <div className="p-8">Employee not found</div>;

  return (
    <main className="w-full p-6 space-y-6">
      <div className="w-full bg-white p-8 rounded-lg shadow-md">
        <div className="flex items-center mb-6">
          <svg className="w-6 h-6 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-600">Employment Contract</h1>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-gray-800 uppercase">NEXUS INTERNATIONAL ALLIANCE PVT LTD</h2>
          <h3 className="text-lg text-blue-600 mt-2">Employment Contract</h3>
        </div>

        <p className="mb-6">
          This Employment Contract ( `&quot;` Contract `&quot;` ) is made and entered into on the {formattedDate}, by and between:
        </p>

        <div className="mb-6">
          <h3 className="font-bold">Employer:</h3>
          <p>Nexus International Alliance Pvt. Ltd., a company registered under the laws of Sri Lanka, with its principal office located at Kekirawa, Sri Lanka.</p>
        </div>

        <div className="mb-6">
          <h3 className="font-bold">Employee:</h3>
          <p>{employee.name}, appointed as {employee.role} with a salary of ${employee.salary.toLocaleString()} per annum.</p>
          <div className="mt-2 text-sm flex items-center text-amber-600 bg-amber-50 border border-amber-200 rounded-md p-3">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Please verify your name, role, and salary details are correct before proceeding.</span>
          </div>
        </div>
        {[
          {
            title: '1. Employment',
            content: 'The Employee agrees to faithfully and to the best of their ability carry out the duties and responsibilities communicated to them by the Employer. The Employee shall comply with all company policies, rules, and procedures at all times.'
          },
          {
            title: '2. Position',
            content: `The Employee is hired as a ${employee.role}. The Employee's primary duties include:`,
            list: employee.responsibilities ? employee.responsibilities.split('\n') : ['[List key responsibilities]']
          },
          {
            title: '3. Compensation',
            content: [
              `Salary/Wages: The Employee shall be paid a wage of $${employee.salary.toLocaleString()} per annum.`,
              `Payment Frequency: Payments will be made ${employee.payment || '[weekly/bi-weekly/monthly]'} on ${employee.payment_date || '[Payment Date]'}.`,
              'Deductions: All payments shall be subject to mandatory employment deductions.',
              'Performance Reviews: The Employee will be subject to [quarterly/annual] performance reviews.'
            ]
          },
          {
            title: '4. Benefits',
            content: 'The Employee is eligible to participate in the following benefits plans offered by the Employer:',
            list: employee.benefits ? employee.benefits.split('\n') : ['[List benefits, e.g., health insurance, retirement plans, etc.]']
          },
          {
            title: '5. Work Hours',
            content: `The Employee's standard work hours shall be ${employee.working_hours || '[specify hours]'} hours from ${employee.starting_time || '[start time]'} to ${employee.ending_time || '[end time]'}, with ${employee.break_time || '[duration]'} hour/'s for lunch break. Any overtime work must be pre-approved by the Employer.`
          },
          {
            title: '6. Leave Policy',
            content: [
              `Annual Leave: ${employee.annual_leave || '[Number]'} days of paid vacation per year`,
              `Sick Leave: ${employee.sick_leave || '[Number]'} days of paid sick leave per year`,
              'Public Holidays: As per local government calendar'
            ]
          },
          {
            title: '7. Confidentiality',
            content: 'The Employee agrees to maintain the confidentiality of all proprietary information and trade secrets of the Employer during and after employment. This includes but is not limited to client information, business strategies, and technical data.'
          },
          {
            title: '8. Termination',
            content: `Either party may terminate this agreement by providing ${employee.notice_period || '[notice period]'} written notice.`
          },
          {
            title: '9. Non-Competition',
            content: `During employment and for  ${employee.termination_notice || 0} day/'s after termination, the Employee agrees not to engage in any business activities that directly compete with the Employer within ${employee.geographic_location || '[geographic area]'}.`
          },
          {
            title: '10. Intellectual Property',
            content: 'Any inventions, discoveries, or intellectual property created during employment and related to the Employer\'s business shall remain the exclusive property of the Employer.'
          },
          {
            title: '11. Code of Conduct',
            content: 'The Employee agrees to comply with all company policies, procedures, and the code of conduct as outlined in the employee handbook. This includes maintaining professional behavior and adhering to ethical business practices.'
          },
          {
            title: '12. Amendments',
            content: 'Any modifications to this agreement must be made in writing and signed by both parties. The Employer reserves the right to modify company policies and procedures with reasonable notice to the Employee.'
          },
          {
            title: '13. Governing Law',
            content: 'This agreement shall be governed by and construed in accordance with the laws of Sri Lanka. Any disputes arising from this agreement shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.'
          },
          {
            title: '14. Severability',
            content: 'If any provision of this agreement is found to be invalid or unenforceable, the remaining provisions shall continue to be valid and enforceable to the fullest extent permitted by law.'
          },
          {
            title: '15. Entire Agreement',
            content: 'This agreement constitutes the entire understanding between the parties and supersedes all prior agreements, representations, and understandings between the Employee and Employer.'
          },
        ].map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-lg font-bold text-blue-600 mb-3">{section.title}</h2>
            {Array.isArray(section.content) ? (
              section.content.map((item, i) => (
                <p key={i} className="mb-2">{item}</p>
              ))
            ) : (
              <p className="mb-2">{section.content}</p>
            )}
            {section.list && (
              <ul className="list-disc pl-6 mt-2">
                {section.list.map((item, i) => (
                  <li key={i} className="mb-1">{item}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
        
      </div>
    </main>
  );
}