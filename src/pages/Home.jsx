import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Home.css';

const Home = () => {
	const [tab, setTab] = useState('sobre');
	const [mobileOpen, setMobileOpen] = useState(false);
	const appName = 'TrainMe';

	return (
		<div className="home-container">
			{/* Navbar */}
					<nav className="home-navbar">
						<div className="nav-brand">{appName}</div>
						<button
							className="nav-toggle"
							aria-label="Abrir menu"
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
						>
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#4a5568" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="3" y1="6" x2="21" y2="6"></line>
								<line x1="3" y1="12" x2="21" y2="12"></line>
								<line x1="3" y1="18" x2="21" y2="18"></line>
							</svg>
						</button>
						<ul className="nav-links">
							<li><Link to="/dashboard">Dashboard</Link></li>
							<li><Link to="/perfil">Perfil</Link></li>
							<li><Link to="/login">Login</Link></li>
						</ul>
					</nav>

					{mobileOpen && (
						<div className="mobile-menu">
							<ul>
								<li><Link to="/dashboard" onClick={() => setMobileOpen(false)}>Dashboard</Link></li>
								<li><Link to="/perfil" onClick={() => setMobileOpen(false)}>Perfil</Link></li>
								<li><Link to="/login" onClick={() => setMobileOpen(false)}>Login</Link></li>
							</ul>
						</div>
					)}

			{/* Hero Section */}
			<header className="home-hero">
				<h1>Bem-vindo ao {appName}</h1>
				<p>Sua plataforma de treinos online para alcançar resultados reais com planos personalizados, acompanhamento e comunidade.</p>
				<div className="hero-actions">
					<Link to="/cadastro" className="btn primary">Começar Agora</Link>
					<Link to="/login" className="btn secondary">Já tenho conta</Link>
				</div>
			</header>

			{/* Tabs */}
			<div className="home-tabs">
				<button className={`tab ${tab === 'sobre' ? 'active' : ''}`} onClick={() => setTab('sobre')}>Sobre</button>
				<button className={`tab ${tab === 'planos' ? 'active' : ''}`} onClick={() => setTab('planos')}>Planos</button>
				<button className={`tab ${tab === 'recursos' ? 'active' : ''}`} onClick={() => setTab('recursos')}>Recursos</button>
				<button className={`tab ${tab === 'contato' ? 'active' : ''}`} onClick={() => setTab('contato')}>Contato</button>
			</div>

			{/* Tab Contents */}
			<section className="home-content">
				{tab === 'sobre' && (
					<div className="sobre-grid">
						<div className="card">
							<h3>Treinos Personalizados</h3>
							<p>Planos criados para o seu objetivo: emagrecimento, hipertrofia, condicionamento ou reabilitação.</p>
						</div>
						<div className="card">
							<h3>Acompanhamento</h3>
							<p>Monitore seu progresso com gráficos, metas e feedback contínuo do treinador.</p>
						</div>
						<div className="card">
							<h3>Flexibilidade</h3>
							<p>Treine onde quiser, quando quiser, com treinos adaptados à sua rotina.</p>
						</div>
					</div>
				)}

				{tab === 'planos' && (
					<div className="planos-grid">
						<div className="plano-card">
							<h4>Starter</h4>
							<p className="preco">R$ 29/mês</p>
							<ul>
								<li>Plano básico de treinos</li>
								<li>Acesso a vídeos</li>
								<li>Suporte por email</li>
							</ul>
							<Link to="/cadastro" className="btn primary">Assinar</Link>
						</div>
						<div className="plano-card destaque">
							<span className="tag">Mais Popular</span>
							<h4>Pro</h4>
							<p className="preco">R$ 59/mês</p>
							<ul>
								<li>Treinos personalizados</li>
								<li>Feedback do treinador</li>
								<li>Relatórios de progresso</li>
							</ul>
							<Link to="/cadastro" className="btn primary">Assinar</Link>
						</div>
						<div className="plano-card">
							<h4>Elite</h4>
							<p className="preco">R$ 99/mês</p>
							<ul>
								<li>Consultoria 1:1</li>
								<li>Plano nutricional</li>
								<li>Suporte prioritário</li>
							</ul>
							<Link to="/cadastro" className="btn primary">Assinar</Link>
						</div>
					</div>
				)}

				{tab === 'recursos' && (
					<div className="recursos-lista">
						<div className="recurso"><strong>Dashboard do Aluno</strong><span>visualize treinos e progresso</span></div>
						<div className="recurso"><strong>Dashboard do Treinador</strong><span>gestão de alunos e agenda</span></div>
						<div className="recurso"><strong>Perfil</strong><span>dados pessoais e objetivos</span></div>
						<div className="recurso"><strong>Agenda</strong><span>organize seus treinos</span></div>
					</div>
				)}

				{tab === 'contato' && (
					<div className="contato-card">
						<h3>Fale Conosco</h3>
						<p>Tem dúvidas? Envie uma mensagem e retornaremos em breve.</p>
						<form className="contato-form" onSubmit={(e) => e.preventDefault()}>
							<input type="text" placeholder="Seu nome" required />
							<input type="email" placeholder="Seu email" required />
							<textarea rows="4" placeholder="Mensagem" required />
							<button className="btn primary" type="submit">Enviar</button>
						</form>
					</div>
				)}
			</section>

			<footer className="home-footer">
				<p>© {new Date().getFullYear()} {appName}. Todos os direitos reservados.</p>
			</footer>
		</div>
	);
};

export default Home;
