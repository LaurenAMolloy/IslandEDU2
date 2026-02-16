import { useLoaderData } from 'react-router-dom';

export default function SchoolSearch() {
  // This hook gets the data directly from the loader in App.jsx
  const schools = useLoaderData();
  console.log(schools)

  return (
    <div className="search-container">
      <h2>Available Schools in Cyprus</h2>
      <div className="school-list">
      </div>
    </div>
  );
}