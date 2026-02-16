import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>404 - Class Disrupted!</h1>
      <p>We couldn't find the school or page you were looking for.</p>
      <Link to="/" style={{ color: '#ebca12', fontWeight: 'bold' }}>
        Return to Home Room
      </Link>
    </div>
  );
}