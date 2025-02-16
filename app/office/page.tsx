'use client';
import { useState , useEffect} from 'react';
import { useRouter } from 'next/navigation';
import DbStatus from '@/components/DbStatus';
import Link from 'next/link';

export default function Office() {
  const router = useRouter();
  
  useEffect(() => {
    // Check if user is authenticated
    const isAuthenticated = localStorage.getItem('isAuthenticated');
    if (!isAuthenticated) {
      router.push('/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    role: '',
    responsibilities: '',
    payment:'',
    payment_date:'',
    benefits:'',
    working_hours:'',
    starting_time:'',
    ending_time:'',
    break_time:'',
    annual_leave:'',
    sick_leave:'',
    notice_period:'',
    termination_notice:'',
    geographic_location:'',
  });

  const [employeeLink, setEmployeeLink] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        alert('Employee data saved successfully!');
        setEmployeeLink(`/staff/${data.id}`);
        setFormData({
          name: '',
          salary: '',
          role: '',
          responsibilities: '',
          payment: '',
          payment_date: '',
          benefits: '',
          working_hours: '',
          starting_time: '',
          ending_time: '',
          break_time: '',
          annual_leave: '',
          sick_leave: '',
          notice_period: '',
          termination_notice: '',
          geographic_location: '',
        });
      } else {
        alert('Error saving employee data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error saving employee data');
    }
  };

  // ... existing handleChange function ...

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Office Management</h1>
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="max-w-md">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="salary" className="block mb-2">Salary:</label>
            <input
              type="number"
              id="salary"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="role" className="block mb-2">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
          <div>
            <label htmlFor="responsibilities" className="block mb-2">Responsibilities:</label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              value={formData.responsibilities}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="payment" className="block mb-2">Payment Type:</label>
            <input
              type="text"
              id="payment"
              name="payment"
              value={formData.payment}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="payment_date" className="block mb-2">Payment Date:</label>
            <input
              type="text"
              id="payment_date"
              name="payment_date"
              value={formData.payment_date}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="benefits" className="block mb-2">Benefits:</label>
            <input
              type="text"
              id="benefits"
              name="benefits"
              value={formData.benefits}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="working_hours" className="block mb-2">Working Hours:</label>
            <input
              type="text"
              id="working_hours"
              name="working_hours"
              value={formData.working_hours}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label htmlFor="starting_time" className="block mb-2">Starting Time:</label>
            <input type="time" id="starting_time" name="starting_time" value={formData.starting_time} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="ending_time" className="block mb-2">Ending Time:</label>
            <input type="time" id="ending_time" name="ending_time" value={formData.ending_time} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="break_time" className="block mb-2">Break Time:</label>
            <input type="text" id="break_time" name="break_time" value={formData.break_time} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="annual_leave" className="block mb-2">Annual Leave (days):</label>
            <input type="number" id="annual_leave" name="annual_leave" value={formData.annual_leave} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="sick_leave" className="block mb-2">Sick Leave (days):</label>
            <input type="number" id="sick_leave" name="sick_leave" value={formData.sick_leave} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="notice_period" className="block mb-2">Notice Period:</label>
            <input type="text" id="notice_period" name="notice_period" value={formData.notice_period} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="termination_notice" className="block mb-2">Restriction Period:</label>
            <input type="text" id="termination_notice" name="termination_notice" value={formData.termination_notice} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <div>
            <label htmlFor="geographic_location" className="block mb-2">Restricted Geographic Location:</label>
            <input type="text" id="geographic_location" name="geographic_location" value={formData.geographic_location} onChange={handleChange} className="w-full p-2 border rounded" />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Save Employee
          </button>
        </form>
        
        {employeeLink && (
          <div className="mt-4 p-4 bg-green-100 rounded-lg">
            <p className="text-green-800 mb-2">Employee created successfully!</p>
            <Link 
              href={employeeLink}
              className="text-blue-500 hover:text-blue-700 underline"
            >
              View Employee Details ({employeeLink})
            </Link>
          </div>
        )}
      </div>
      <div className="mt-8">
        <DbStatus />
      </div>
    </main>
  );
}