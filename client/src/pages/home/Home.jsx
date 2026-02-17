import { Link } from 'react-router'

export default function Home() {
  return (
    <div className="hero-section">
        {/* <nav></nav> */}
        <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center flex-col gap-5 px-5">
        <h1>Island Edu</h1>
        <p>
          As an ex-educator, I saw parents struggling to find clear school data. 
          I built this tool to make the Cyprus education system more accessible.
        </p>
        <Link to="/schools" className="btn-primary">
            Start Searching
        </Link>
      </div>
    </div>
  )
}
