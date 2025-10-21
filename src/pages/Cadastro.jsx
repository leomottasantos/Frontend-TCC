import { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import '../assets/Styles/Cadastro.css';

const Cadastro = () => {
  const [formData, setFormData] = useState({
    nomeCompleto: '',
    email: '',
    senha: '',
    confirmarSenha: '',
    dataNascimento: '',
    genero: '',
    objetivo: '',
    nivelAtividade: '',
    peso: '',
    altura: '',
    termos: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Limpar erro do campo ao editar
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nomeCompleto.trim()) {
      newErrors.nomeCompleto = 'Nome completo é obrigatório';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.senha) {
      newErrors.senha = 'Senha é obrigatória';
    } else if (formData.senha.length < 6) {
      newErrors.senha = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (formData.senha !== formData.confirmarSenha) {
      newErrors.confirmarSenha = 'As senhas não coincidem';
    }

    if (!formData.dataNascimento) {
      newErrors.dataNascimento = 'Data de nascimento é obrigatória';
    }

    if (!formData.termos) {
      newErrors.termos = 'Você deve aceitar os termos e condições';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Aqui você pode adicionar a lógica de cadastro quando implementar o backend
    console.log('Cadastro realizado:', formData);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className="cadastro-container dark:from-indigo-950 dark:to-purple-950">
      <div className="cadastro-card dark:bg-gray-800 dark:shadow-2xl">
        <div className="cadastro-header">
          <h2 className="cadastro-title">
            Criar Conta - TrainMe
          </h2>
          <p className="cadastro-subtitle dark:text-gray-400">
            Comece sua transformação hoje mesmo
          </p>
        </div>
        
        <form className="cadastro-form" onSubmit={handleSubmit}>
          {/* Informações Pessoais */}
          <div className="form-section dark:bg-gray-700/50 dark:border-gray-600">
            <h3 className="section-title dark:text-gray-100 dark:border-purple-500">Informações Pessoais</h3>
            
            <div className="form-group">
              <label htmlFor="nomeCompleto" className="dark:text-gray-300">Nome Completo</label>
              <input
                id="nomeCompleto"
                name="nomeCompleto"
                type="text"
                className={`form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 ${errors.nomeCompleto ? 'input-error' : ''}`}
                placeholder="Digite seu nome completo"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
              {errors.nomeCompleto && <span className="error-message dark:text-red-400">{errors.nomeCompleto}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 ${errors.email ? 'input-error' : ''}`}
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message dark:text-red-400">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="senha" className="dark:text-gray-300">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  className={`form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 ${errors.senha ? 'input-error' : ''}`}
                  placeholder="Mínimo 6 caracteres"
                  value={formData.senha}
                  onChange={handleChange}
                />
                {errors.senha && <span className="error-message dark:text-red-400">{errors.senha}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmarSenha" className="dark:text-gray-300">Confirmar Senha</label>
                <input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  className={`form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500 ${errors.confirmarSenha ? 'input-error' : ''}`}
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                />
                {errors.confirmarSenha && <span className="error-message dark:text-red-400">{errors.confirmarSenha}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dataNascimento" className="dark:text-gray-300">Data de Nascimento</label>
                <input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  className={`form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 ${errors.dataNascimento ? 'input-error' : ''}`}
                  value={formData.dataNascimento}
                  onChange={handleChange}
                />
                {errors.dataNascimento && <span className="error-message dark:text-red-400">{errors.dataNascimento}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="genero" className="dark:text-gray-300">Gênero</label>
                <select
                  id="genero"
                  name="genero"
                  className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                  value={formData.genero}
                  onChange={handleChange}
                >
                  <option value="">Selecione</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                  <option value="nao-informar">Prefiro não informar</option>
                </select>
              </div>
            </div>
          </div>

          {/* Informações de Treino */}
          <div className="form-section dark:bg-gray-700/50 dark:border-gray-600">
            <h3 className="section-title dark:text-gray-100 dark:border-purple-500">Informações de Treino</h3>
            
            <div className="form-group">
              <label htmlFor="objetivo" className="dark:text-gray-300">Objetivo Principal</label>
              <select
                id="objetivo"
                name="objetivo"
                className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                value={formData.objetivo}
                onChange={handleChange}
              >
                <option value="">Selecione seu objetivo</option>
                <option value="perder-peso">Perder Peso</option>
                <option value="ganhar-massa">Ganhar Massa Muscular</option>
                <option value="melhorar-condicionamento">Melhorar Condicionamento</option>
                <option value="manter-forma">Manter a Forma</option>
                <option value="reabilitacao">Reabilitação</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nivelAtividade" className="dark:text-gray-300">Nível de Atividade Física</label>
              <select
                id="nivelAtividade"
                name="nivelAtividade"
                className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200"
                value={formData.nivelAtividade}
                onChange={handleChange}
              >
                <option value="">Selecione</option>
                <option value="sedentario">Sedentário (pouco ou nenhum exercício)</option>
                <option value="levemente-ativo">Levemente Ativo (1-3 dias/semana)</option>
                <option value="moderadamente-ativo">Moderadamente Ativo (3-5 dias/semana)</option>
                <option value="muito-ativo">Muito Ativo (6-7 dias/semana)</option>
                <option value="extremamente-ativo">Extremamente Ativo (atleta)</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="peso" className="dark:text-gray-300">Peso (kg)</label>
                <input
                  id="peso"
                  name="peso"
                  type="number"
                  step="0.1"
                  className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500"
                  placeholder="Ex: 70"
                  value={formData.peso}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="altura" className="dark:text-gray-300">Altura (cm)</label>
                <input
                  id="altura"
                  name="altura"
                  type="number"
                  className="form-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500"
                  placeholder="Ex: 170"
                  value={formData.altura}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Termos e Condições */}
          <div className="form-group-checkbox">
            <label className="checkbox-label dark:text-gray-300">
              <input
                type="checkbox"
                name="termos"
                checked={formData.termos}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span>
                Eu aceito os <a href="#" className="link dark:text-purple-400 dark:hover:text-purple-300">termos e condições</a> e a <a href="#" className="link dark:text-purple-400 dark:hover:text-purple-300">política de privacidade</a>
              </span>
            </label>
            {errors.termos && <span className="error-message dark:text-red-400">{errors.termos}</span>}
          </div>

          <button type="submit" className="submit-button dark:from-purple-600 dark:to-indigo-600 dark:hover:from-purple-700 dark:hover:to-indigo-700">
            Criar Conta
          </button>

          <div className="login-link dark:border-gray-700">
            <p className="dark:text-gray-400">
              Já tem uma conta? <a href="/login" className="link dark:text-purple-400 dark:hover:text-purple-300">Faça login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
