import { 
  createBrowserRouter, 
  RouterProvider,
  Link,
  useNavigate,
 } from "react-router-dom";


import Home from './pages/Home';
import SchoolSearch from './pages/SchoolSearch';
import NotFound from "./pages/NotFound";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
      path: "/schools",
      element: <SchoolSearch />,
      //loader data - extract later
      // loader: async () => {
      //   const res = await fetch('https://localhost:8000/api/schools');
      //   if(!res.ok) throw new Error('Could not fetch schools');
      //   return res.json()
      // },
      errorElement: <div className="errorbox">Could not connect to the Island Api.</div>
      },
      {
      path: "*",
      element: <NotFound />
      },
    ],
  }
])


export default function App() {
  return <RouterProvider router={router} />
}

