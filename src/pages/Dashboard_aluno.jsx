import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
		<div className="dashboard-container">
			<aside className="dashboard-sidebar">
				<div className="sidebar-header">
					<h2>TrainMe</h2>
				</div>
						<nav className="sidebar-nav">
							<ul>
								<li className="active">Dashboard</li>
								<li>Meus Treinos</li>
								<li>
									<Link to="/perfil" className="sidebar-link">Perfil</Link>
								</li>
								<li>Configurações</li>
							</ul>
						</nav>
			</aside>
			<main className="dashboard-main">
				<header className="dashboard-header">
					<h1>Bem-vindo, {aluno.nome}!</h1>
					<span className="dashboard-objetivo">Objetivo: {aluno.objetivo}</span>
				</header>
				<section className="dashboard-info">
					<div className="info-card">
						<h3>Nível</h3>
						<p>{aluno.nivel}</p>
					</div>
					<div className="info-card">
						<h3>Peso</h3>
						<p>{aluno.peso} kg</p>
					</div>
					<div className="info-card">
						<h3>Altura</h3>
						<p>{aluno.altura} cm</p>
					</div>
					<div className="info-card">
						<h3>Progresso</h3>
						<div className="progress-bar">
							<div className="progress" style={{ width: `${aluno.progresso}%` }}></div>
						</div>
						<span className="progress-label">{aluno.progresso}%</span>
					</div>
				</section>
				<section className="dashboard-treinos">
					<h2>Meus Treinos</h2>
					<table className="treinos-table">
						<thead>
							<tr>
								<th>Nome</th>
								<th>Status</th>
								<th>Data</th>
							</tr>
						</thead>
						<tbody>
							{aluno.treinos.map(treino => (
								<tr key={treino.id} className={treino.status === 'Concluído' ? 'treino-concluido' : 'treino-pendente'}>
									<td>{treino.nome}</td>
									<td>{treino.status}</td>
									<td>{treino.data}</td>
								</tr>
							))}
						</tbody>
					</table>
				</section>
				<section className="dashboard-notificacoes">
					<h2>Notificações</h2>
					<ul>
						{aluno.notificacoes.map((msg, idx) => (
							<li key={idx}>{msg}</li>
						))}
					</ul>
				</section>
			</main>
		</div>
	);
};

export default DashboardAluno;
