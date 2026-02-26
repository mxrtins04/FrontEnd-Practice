const API_BASE_URL = 'http://localhost:8080/api/auth'; 

export const authService = {
  async login(email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  async register(username, email, password) {
    try {
      const response = await fetch(`${API_BASE_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  }
};
