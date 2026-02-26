import { BrowserRouter, Link } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import './auth.css';

function App() {
  return (
    <BrowserRouter>
      <nav style={{ textAlign: 'center', padding: '1rem' }}>
        <Link to="/login" style={{ marginRight: '1rem' }}>Login</Link>
        <Link to="/register">Register</Link>
      </nav>    
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;