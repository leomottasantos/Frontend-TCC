import { useState } from 'react';
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
    <div className="cadastro-container">
      <div className="cadastro-card">
        <div className="cadastro-header">
          <h2 className="cadastro-title">
            Criar Conta - FitConnect
          </h2>
          <p className="cadastro-subtitle">
            Comece sua transformação hoje mesmo
          </p>
        </div>
        
        <form className="cadastro-form" onSubmit={handleSubmit}>
          {/* Informações Pessoais */}
          <div className="form-section">
            <h3 className="section-title">Informações Pessoais</h3>
            
            <div className="form-group">
              <label htmlFor="nomeCompleto">Nome Completo</label>
              <input
                id="nomeCompleto"
                name="nomeCompleto"
                type="text"
                className={`form-input ${errors.nomeCompleto ? 'input-error' : ''}`}
                placeholder="Digite seu nome completo"
                value={formData.nomeCompleto}
                onChange={handleChange}
              />
              {errors.nomeCompleto && <span className="error-message">{errors.nomeCompleto}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? 'input-error' : ''}`}
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="senha">Senha</label>
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  className={`form-input ${errors.senha ? 'input-error' : ''}`}
                  placeholder="Mínimo 6 caracteres"
                  value={formData.senha}
                  onChange={handleChange}
                />
                {errors.senha && <span className="error-message">{errors.senha}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmarSenha">Confirmar Senha</label>
                <input
                  id="confirmarSenha"
                  name="confirmarSenha"
                  type="password"
                  className={`form-input ${errors.confirmarSenha ? 'input-error' : ''}`}
                  placeholder="Confirme sua senha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                />
                {errors.confirmarSenha && <span className="error-message">{errors.confirmarSenha}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="dataNascimento">Data de Nascimento</label>
                <input
                  id="dataNascimento"
                  name="dataNascimento"
                  type="date"
                  className={`form-input ${errors.dataNascimento ? 'input-error' : ''}`}
                  value={formData.dataNascimento}
                  onChange={handleChange}
                />
                {errors.dataNascimento && <span className="error-message">{errors.dataNascimento}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="genero">Gênero</label>
                <select
                  id="genero"
                  name="genero"
                  className="form-input"
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
          <div className="form-section">
            <h3 className="section-title">Informações de Treino</h3>
            
            <div className="form-group">
              <label htmlFor="objetivo">Objetivo Principal</label>
              <select
                id="objetivo"
                name="objetivo"
                className="form-input"
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
              <label htmlFor="nivelAtividade">Nível de Atividade Física</label>
              <select
                id="nivelAtividade"
                name="nivelAtividade"
                className="form-input"
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
                <label htmlFor="peso">Peso (kg)</label>
                <input
                  id="peso"
                  name="peso"
                  type="number"
                  step="0.1"
                  className="form-input"
                  placeholder="Ex: 70"
                  value={formData.peso}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="altura">Altura (cm)</label>
                <input
                  id="altura"
                  name="altura"
                  type="number"
                  className="form-input"
                  placeholder="Ex: 170"
                  value={formData.altura}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          {/* Termos e Condições */}
          <div className="form-group-checkbox">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="termos"
                checked={formData.termos}
                onChange={handleChange}
                className="checkbox-input"
              />
              <span>
                Eu aceito os <a href="#" className="link">termos e condições</a> e a <a href="#" className="link">política de privacidade</a>
              </span>
            </label>
            {errors.termos && <span className="error-message">{errors.termos}</span>}
          </div>

          <button type="submit" className="submit-button">
            Criar Conta
          </button>

          <div className="login-link">
            <p>
              Já tem uma conta? <a href="/login" className="link">Faça login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
