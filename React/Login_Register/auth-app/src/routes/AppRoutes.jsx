import { Routes, Route } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Register/Register';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default AppRoutes;
