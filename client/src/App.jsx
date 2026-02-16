import { 
  createBrowserRouter, 
  RouterProvider,
  Link,
  useNavigate,
 } from "react-router-dom";


import Home from './pages/Home';
import SchoolSearch from './pages/SchoolSearch';
import NotFound from "./pages/NotFound";
import MainLayout from "./components/templates/MainLayout";


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
      loader: async () => {
        const res = await fetch('http://localhost:8000/api/schools');

        if(!res.ok) {
          throw new Error('Could not fetch schools');
        }

        const data = await res.json();

        console.log("React Loader Received Data", data)
        return data;
      },
      HydrateFallback: <div>Loading...</div>
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

