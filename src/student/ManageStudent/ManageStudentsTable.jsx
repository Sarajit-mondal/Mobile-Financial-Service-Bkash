import React from 'react';
import StudentManage from './StudentManage';
import { LuEye } from "react-icons/lu";
import { RiEdit2Line } from "react-icons/ri";
import { IoTrash } from "react-icons/io5";
const ManageStudentsTable = ({ student, onView, onEdit, onDelete }) => {
  return (
   <>
 <StudentManage />
<div className="overflow-x-auto w-full">
      <table className="w-full bg-white border border-gray-300">
        <thead >
          <tr className="bg-red-500 text-white text-left [&>th]:w-1/4">
            <th className="py-2 px-4 border-b ">Name</th>
            <th className="py-2 px-4 border-b">Class</th>
            <th className="py-2 px-4 border-b ">Roll No.</th>
            <th className="py-2 px-4 border-b">View / Edit / Delete</th>
           
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-100 text-left">
              <td className="py-2 px-4 border-b">{student.name}</td>
              <td className="py-2 px-4 border-b">{student.class}</td>
              <td className="py-2 px-4 border-b">{student.rollNo}</td>
              <td className="py-2 px-4 border-b flex text-xl gap-7 ml-2 cursor-pointer">
                 <LuEye /> <RiEdit2Line /> <IoTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   </>
  );
};

export default ManageStudentsTable;



const students = [
{
    name : "jit",
    class:4,
    rollNo : 2,



}

]