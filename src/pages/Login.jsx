import { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import '../assets/Styles/Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação quando implementar o backend
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container dark:from-indigo-950 dark:to-purple-950">
      <div className="login-card dark:bg-gray-800 dark:shadow-2xl">
        <div className="login-header">
          <h2 className="login-title dark:text-gray-100">
            TrainMe
          </h2>
          <p className="login-subtitle dark:text-gray-400">
            Sua jornada fitness começa aqui
          </p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password" className="sr-only">
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500"
              placeholder="Senha"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="remember-forgot">
            <div className="remember-me">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                className="remember-checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
              />
              <label htmlFor="remember-me" className="remember-text dark:text-gray-300">
                Lembrar-me
              </label>
            </div>

            <div>
              <a href="#" className="forgot-link dark:text-purple-400 dark:hover:text-purple-300">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="login-button dark:bg-purple-600 dark:hover:bg-purple-700"
            >
              Entrar
            </button>
          </div>

          <div className="signup-section">
            <p className="signup-text dark:text-gray-400">
              Não tem uma conta?{' '}
              <a href="#" className="signup-link dark:text-purple-400 dark:hover:text-purple-300">
                Cadastre-se
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
