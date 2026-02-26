import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await authService.register(formData.username, formData.email, formData.password);
      console.log('Registration successful:', response);
      navigate('/login'); // Redirect to login after successful registration
    } catch (error) {
      setError('Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <h2>Create Account</h2>
      {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          name="username"
          placeholder="Username" 
          value={formData.username}
          onChange={handleChange}
          disabled={loading}
        />
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={formData.email}
          onChange={handleChange}
          disabled={loading}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={formData.password}
          onChange={handleChange}
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      <span>Already have an account? <Link to="/login">Login</Link></span>
    </div>
  );
}

export default Register;
