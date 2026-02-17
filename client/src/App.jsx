import { 
  createBrowserRouter, 
  RouterProvider,
 } from "react-router-dom";


import Home from './pages/home/Home';
import NotFound from "./pages/NotFound";
import SchoolSearchPage from './pages/search/SchoolSearchPage'
import MainLayout from "./components/templates/MainLayout";
import { searchLoader } from "./pages/search/searchloader";


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
      element: <SchoolSearchPage />,
      //loader data - extract later
      loader: searchLoader,
      hydrateFallbackElement: <div>Loading...</div>
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

