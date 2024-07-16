import React, { useState } from 'react';

const StudentManage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleExport = () => {
    // Export functionality here
    console.log('Exporting data...');
  };

  const handlePrint = () => {
    // Print functionality here
    window.print();
  };

  return (
    <div className="container mx-auto p-4 ">
 
        <div className="flex items-center space-x-4 justify-between">
          <h2>Manage Students</h2>
          <input
            type="text"
            placeholder="Search students..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 border border-gray-300 rounded"
          />
          <select
            value={selectedClass}
            onChange={handleClassChange}
            className="p-2 border border-gray-300 rounded"
          >
            <option value="">Select Class</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Class {i + 1}
              </option>
            ))}
          </select>
          <button
            onClick={handleExport}
            className="p-2 w-20 bg-white text-gray-600 rounded border-2 hover:shadow-lg"
          >
            Export
          </button>
          <button
            onClick={handlePrint}
             className="p-2 w-20 bg-white text-gray-600 rounded border-2 hover:shadow-lg"
          >
            Print
          </button>
          <div className="text-gray-500">
          {new Date().toLocaleDateString()}
        </div>
        </div>
      {/* Student list rendering here */}
    </div>
  );
};

export default StudentManage;
