import {
    createBrowserRouter,
  } from "react-router-dom";
import Dashboard from "../layout/dashbord/Dashbord";
import ManageStudentsTable from "../student/ManageStudent/ManageStudentsTable";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />,
      children:[
        {
          path: "/adduser",
          element: <div>Add new user</div>
        },
        {
          path: "/manageStudents",
          element: <ManageStudentsTable />
        }
      ]
    },
  ]);

  export default router;