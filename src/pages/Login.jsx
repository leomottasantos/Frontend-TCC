import { useState } from 'react';
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
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2 className="login-title">
            TrainMe
          </h2>
          <p className="login-subtitle">
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
              className="form-input"
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
              className="form-input"
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
              <label htmlFor="remember-me" className="remember-text">
                Lembrar-me
              </label>
            </div>

            <div>
              <a href="#" className="forgot-link">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="login-button"
            >
              Entrar
            </button>
          </div>

          <div className="signup-section">
            <p className="signup-text">
              Não tem uma conta?{' '}
              <a href="#" className="signup-link">
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
