import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
import '../assets/Styles/Dashboard_aluno.css';

const DashboardAluno = () => {
	// Exemplo de dados fictícios do aluno
	const [aluno] = useState({
		nome: 'João Silva',
		objetivo: 'Ganhar Massa Muscular',
		nivel: 'Intermediário',
		peso: 75,
		altura: 178,
		progresso: 65, // porcentagem
		treinos: [
			{ id: 1, nome: 'Treino Peito', status: 'Concluído', data: '15/10/2025' },
			{ id: 2, nome: 'Treino Pernas', status: 'Pendente', data: '16/10/2025' },
			{ id: 3, nome: 'Treino Costas', status: 'Pendente', data: '17/10/2025' },
		],
		notificacoes: [
			'Novo treino disponível!',
			'Parabéns pelo progresso!',
			'Lembre-se de se hidratar durante os treinos.'
		]
	});

	return (
		<div className="dashboard-container dark:from-indigo-950 dark:to-purple-950">
			<aside className="dashboard-sidebar dark:bg-gray-900 dark:shadow-xl">
				<div className="sidebar-header">
					<h2 className="dark:text-gray-100">TrainMe</h2>
				</div>
						<nav className="sidebar-nav">
							<ul>
								<li className="active dark:bg-purple-600">Dashboard</li>
								<li className="dark:hover:bg-gray-700 dark:text-gray-300">Meus Treinos</li>
								<li className="dark:hover:bg-gray-700">
									<Link to="/perfil" className="sidebar-link dark:text-gray-300">Perfil</Link>
								</li>
								<li className="dark:hover:bg-gray-700 dark:text-gray-300">Configurações</li>
							</ul>
						</nav>
			</aside>
			<main className="dashboard-main dark:bg-gray-900">
				<header className="dashboard-header">
					<h1 className="dark:text-gray-100">Bem-vindo, {aluno.nome}!</h1>
					<span className="dashboard-objetivo dark:text-purple-400">Objetivo: {aluno.objetivo}</span>
				</header>
				<section className="dashboard-info">
					<div className="info-card dark:bg-gray-800 dark:shadow-lg">
						<h3 className="dark:text-purple-400">Nível</h3>
						<p className="dark:text-gray-200">{aluno.nivel}</p>
					</div>
					<div className="info-card dark:bg-gray-800 dark:shadow-lg">
						<h3 className="dark:text-purple-400">Peso</h3>
						<p className="dark:text-gray-200">{aluno.peso} kg</p>
					</div>
					<div className="info-card dark:bg-gray-800 dark:shadow-lg">
						<h3 className="dark:text-purple-400">Altura</h3>
						<p className="dark:text-gray-200">{aluno.altura} cm</p>
					</div>
					<div className="info-card dark:bg-gray-800 dark:shadow-lg">
						<h3 className="dark:text-purple-400">Progresso</h3>
						<div className="progress-bar dark:bg-gray-700">
							<div className="progress dark:from-purple-600 dark:to-indigo-600" style={{ width: `${aluno.progresso}%` }}></div>
						</div>
						<span className="progress-label dark:text-purple-400">{aluno.progresso}%</span>
					</div>
				</section>
				<section className="dashboard-treinos dark:bg-gray-800 dark:shadow-lg">
					<h2 className="dark:text-gray-100">Meus Treinos</h2>
					<table className="treinos-table">
						<thead>
							<tr>
								<th className="dark:text-purple-400">Nome</th>
								<th className="dark:text-purple-400">Status</th>
								<th className="dark:text-purple-400">Data</th>
							</tr>
						</thead>
						<tbody>
							{aluno.treinos.map(treino => (
								<tr key={treino.id} className={`${treino.status === 'Concluído' ? 'treino-concluido' : 'treino-pendente'} dark:border-gray-700`}>
									<td className="dark:text-gray-300">{treino.nome}</td>
									<td>{treino.status}</td>
									<td className="dark:text-gray-400">{treino.data}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
				<section className="dashboard-notificacoes dark:bg-gray-800 dark:shadow-lg">
					<h2 className="dark:text-gray-100">Notificações</h2>
					<ul className="dark:text-purple-400">
						{aluno.notificacoes.map((msg, idx) => (
							<li key={idx} className="dark:text-gray-300">{msg}</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
};

export default DashboardAluno;
