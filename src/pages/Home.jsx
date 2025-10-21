import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import '../assets/Styles/Home.css';

const Home = () => {
	const [tab, setTab] = useState('sobre');
	const [mobileOpen, setMobileOpen] = useState(false);
	const appName = 'TrainMe';

	return (
		<div className="home-container dark:bg-gray-900">
				{/* Navbar */}
						<nav className="home-navbar dark:bg-gray-800/95 dark:border-gray-700">
							<div className="nav-brand">TrainMe</div>
							<button
							className="nav-toggle dark:text-gray-300"
							aria-label="Abrir menu"
							aria-expanded={mobileOpen}
							onClick={() => setMobileOpen((v) => !v)}
						>
							<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
								<line x1="3" y1="6" x2="21" y2="6"></line>
								<line x1="3" y1="12" x2="21" y2="12"></line>
								<line x1="3" y1="18" x2="21" y2="18"></line>
							</svg>
						</button>
					<ul className="nav-links">
						<li><Link to="/dashboard" className="dark:text-gray-300 dark:hover:text-purple-400">Dashboard</Link></li>
						<li><Link to="/perfil" className="dark:text-gray-300 dark:hover:text-purple-400">Perfil</Link></li>
						<li><Link to="/login" className="dark:text-gray-300 dark:hover:text-purple-400">Login</Link></li>
						<li><DarkModeToggle /></li>
					</ul>
					</nav>

				{mobileOpen && (
					<div className="mobile-menu dark:bg-gray-800 dark:border-gray-700">
						<ul>
							<li><Link to="/dashboard" onClick={() => setMobileOpen(false)} className="dark:text-gray-300 dark:hover:bg-gray-700">Dashboard</Link></li>
							<li><Link to="/perfil" onClick={() => setMobileOpen(false)} className="dark:text-gray-300 dark:hover:bg-gray-700">Perfil</Link></li>
							<li><Link to="/login" onClick={() => setMobileOpen(false)} className="dark:text-gray-300 dark:hover:bg-gray-700">Login</Link></li>
							<li className="p-2 flex justify-center">
								<DarkModeToggle />
							</li>
						</ul>
					</div>
				)}			{/* Hero Section */}
			<header className="home-hero dark:from-indigo-900 dark:to-purple-900">
				<h1>Bem-vindo ao TrainMe</h1>
				<p className="dark:text-gray-300">Sua plataforma de treinos online para alcançar resultados reais com planos personalizados, acompanhamento e comunidade.</p>
				<div className="hero-actions">
					<Link to="/cadastro" className="btn primary dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700">Começar Agora</Link>
					<Link to="/login" className="btn secondary dark:border-purple-400 dark:text-purple-300">Já tenho conta</Link>
				</div>
			</header>

			{/* Tabs */}
			<div className="home-tabs dark:bg-gray-800 dark:border-gray-700">
				<button className={`tab ${tab === 'sobre' ? 'active' : ''} dark:border-gray-600 dark:text-gray-300`} onClick={() => setTab('sobre')}>Sobre</button>
				<button className={`tab ${tab === 'planos' ? 'active' : ''} dark:border-gray-600 dark:text-gray-300`} onClick={() => setTab('planos')}>Planos</button>
				<button className={`tab ${tab === 'recursos' ? 'active' : ''} dark:border-gray-600 dark:text-gray-300`} onClick={() => setTab('recursos')}>Recursos</button>
				<button className={`tab ${tab === 'contato' ? 'active' : ''} dark:border-gray-600 dark:text-gray-300`} onClick={() => setTab('contato')}>Contato</button>
			</div>

			{/* Tab Contents */}
			<section className="home-content">
				{tab === 'sobre' && (
					<div className="sobre-grid">
						<div className="card dark:bg-gray-800 dark:shadow-lg">
							<h3 className="dark:text-gray-100">Treinos Personalizados</h3>
							<p className="dark:text-gray-400">Planos criados para o seu objetivo: emagrecimento, hipertrofia, condicionamento ou reabilitação.</p>
						</div>
						<div className="card dark:bg-gray-800 dark:shadow-lg">
							<h3 className="dark:text-gray-100">Acompanhamento</h3>
							<p className="dark:text-gray-400">Monitore seu progresso com gráficos, metas e feedback contínuo do treinador.</p>
						</div>
						<div className="card dark:bg-gray-800 dark:shadow-lg">
							<h3 className="dark:text-gray-100">Flexibilidade</h3>
							<p className="dark:text-gray-400">Treine onde quiser, quando quiser, com treinos adaptados à sua rotina.</p>
						</div>
					</div>
				)}

				{tab === 'planos' && (
					<div className="planos-grid">
						<div className="plano-card dark:bg-gray-800 dark:shadow-xl">
							<h4 className="dark:text-gray-100">Starter</h4>
							<p className="preco dark:text-gray-200">R$ 29/mês</p>
							<ul className="dark:text-gray-400">
								<li>Plano básico de treinos</li>
								<li>Acesso a vídeos</li>
								<li>Suporte por email</li>
							</ul>
							<Link to="/cadastro" className="btn primary dark:bg-purple-600 dark:hover:bg-purple-700">Assinar</Link>
						</div>
						<div className="plano-card destaque dark:bg-gray-800 dark:border-purple-500 dark:shadow-2xl">
							<span className="tag dark:bg-purple-600">Mais Popular</span>
							<h4 className="dark:text-gray-100">Pro</h4>
							<p className="preco dark:text-gray-200">R$ 59/mês</p>
							<ul className="dark:text-gray-400">
								<li>Treinos personalizados</li>
								<li>Feedback do treinador</li>
								<li>Relatórios de progresso</li>
							</ul>
							<Link to="/cadastro" className="btn primary dark:bg-purple-600 dark:hover:bg-purple-700">Assinar</Link>
						</div>
						<div className="plano-card dark:bg-gray-800 dark:shadow-xl">
							<h4 className="dark:text-gray-100">Elite</h4>
							<p className="preco dark:text-gray-200">R$ 99/mês</p>
							<ul className="dark:text-gray-400">
								<li>Consultoria 1:1</li>
								<li>Plano nutricional</li>
								<li>Suporte prioritário</li>
							</ul>
							<Link to="/cadastro" className="btn primary dark:bg-purple-600 dark:hover:bg-purple-700">Assinar</Link>
						</div>
					</div>
				)}

				{tab === 'recursos' && (
					<div className="recursos-lista">
						<div className="recurso dark:bg-gray-800 dark:shadow-lg"><strong className="dark:text-gray-100">Dashboard do Aluno</strong><span className="dark:text-gray-400">visualize treinos e progresso</span></div>
						<div className="recurso dark:bg-gray-800 dark:shadow-lg"><strong className="dark:text-gray-100">Dashboard do Treinador</strong><span className="dark:text-gray-400">gestão de alunos e agenda</span></div>
						<div className="recurso dark:bg-gray-800 dark:shadow-lg"><strong className="dark:text-gray-100">Perfil</strong><span className="dark:text-gray-400">dados pessoais e objetivos</span></div>
						<div className="recurso dark:bg-gray-800 dark:shadow-lg"><strong className="dark:text-gray-100">Agenda</strong><span className="dark:text-gray-400">organize seus treinos</span></div>
					</div>
				)}

				{tab === 'contato' && (
					<div className="contato-card dark:bg-gray-800 dark:shadow-xl">
						<h3 className="dark:text-gray-100">Fale Conosco</h3>
						<p className="dark:text-gray-400">Tem dúvidas? Envie uma mensagem e retornaremos em breve.</p>
						<form className="contato-form" onSubmit={(e) => e.preventDefault()}>
							<input type="text" placeholder="Seu nome" required className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500" />
							<input type="email" placeholder="Seu email" required className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500" />
							<textarea rows="4" placeholder="Mensagem" required className="dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:placeholder-gray-500" />
							<button className="btn primary dark:bg-purple-600 dark:hover:bg-purple-700" type="submit">Enviar</button>
						</form>
					</div>
				)}
			</section>

			<footer className="home-footer dark:text-gray-500">
				<p>© {new Date().getFullYear()} TrainMe. Todos os direitos reservados.</p>
			</footer>
		</div>
	);
};

export default Home;
