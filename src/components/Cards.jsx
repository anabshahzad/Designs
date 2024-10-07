import React from 'react';

// Sample data for pending checklist and upcoming birthdays
const pendingChecklist = [
  { name: 'John ', userID: '23' },
  { name: 'Jane', userID: '34' },
  { name: 'Johnson', userID: '45' },
  { name: 'Sara', userID: '56' },
  { name: 'Davis', userID: '67' },
];

const upcomingBirthdays = [
  { img: 'path_to_image_1', name: 'Ava', date: 'Oct 10, 2024' },
  { img: 'path_to_image_2', name: 'Ava', date: 'Oct 12, 2024' },
  { img: 'path_to_image_3', name: 'Ava', date: 'Oct 14, 2024' },

];

function TableSection() {
  return (
    <div className="flex justify-between mt-8">
      {/* Pending Checklist Table */}
      <div className="bg-white shadow-md rounded-lg p-8 w-1/2 mr-4 border  ">
        <h3 className="text-xl font-semibold mb-4">Employees Pending Checklist</h3>
        <table className="w-full p-8 border-collapse border-r-0 border-gray-300">
          <thead>
            <tr>
              <th className="text-left p-2  border-gray-100">Employee</th>
              <th className="text-left p-2  border-gray-100">UserID</th>
              <th className="text-left p-2  border-gray-100">Action</th>
            </tr>
          </thead>
          <tbody>
            {pendingChecklist.map((employee, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">{employee.name}</td>
                <td className="p-2">{employee.userID}</td>
                <td className="p-2">
                  <button className=" border-solid border-2 border-sky-500 text-blue-300 rounded px-6 py-1 hover:bg-blue-400 hover:text-white">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Upcoming Birthdays Table */}
      <div className="bg-white shadow-md rounded-lg p-8 w-1/2 mr-4 border ">
        <h3 className="text-xl font-semibold mb-4">Upcoming Birthdays</h3>
        <table className="w-full">
          <tbody>
            {upcomingBirthdays.map((employee, index) => (
              <tr key={index} className="border-t">
                <td className="p-2">
                  <img
                    src={employee.img}
                    alt={employee.name}
                    className="rounded-full w-10 h-10"
                  />
                </td>
                <td className="p-2">{employee.name}</td>
                <td className="p-2">{employee.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TableSection;
