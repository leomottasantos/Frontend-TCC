import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/Styles/Dashboard_treinador.css';

const DashboardTreinador = () => {
	const [treinador] = useState({
		nome: 'Carla Santos',
		totalAlunos: 24,
		planosAtivos: 21,
		treinosHoje: 8,
		mensagens: 3,
	});

	const [alunos] = useState([
		{ id: 1, nome: 'João Silva', objetivo: 'Hipertrofia', progresso: 65 },
		{ id: 2, nome: 'Ana Paula', objetivo: 'Emagrecimento', progresso: 42 },
		{ id: 3, nome: 'Carlos Lima', objetivo: 'Condicionamento', progresso: 78 },
		{ id: 4, nome: 'Mariana Alves', objetivo: 'Reabilitação', progresso: 30 },
	]);

	const [agenda] = useState([
		{ hora: '07:00', aluno: 'João Silva', tipo: 'Treino A', status: 'Confirmado' },
		{ hora: '09:00', aluno: 'Ana Paula', tipo: 'Avaliação', status: 'Pendente' },
		{ hora: '14:00', aluno: 'Carlos Lima', tipo: 'Treino B', status: 'Confirmado' },
		{ hora: '18:00', aluno: 'Mariana Alves', tipo: 'Treino C', status: 'Cancelado' },
	]);

	const [solicitacoes] = useState([
		{ id: 101, aluno: 'Pedro Rocha', tipo: 'Novo Plano', data: '17/10/2025' },
		{ id: 102, aluno: 'Beatriz Souza', tipo: 'Troca de Treino', data: '16/10/2025' },
	]);

	return (
		<div className="treinador-container">
			<aside className="treinador-sidebar">
				<div className="sidebar-header">
					<h2>TrainMe</h2>
				</div>
				<nav className="sidebar-nav">
					<ul>
						<li className="active">Dashboard</li>
						<li><Link to="/dashboard">Dashboard Aluno</Link></li>
						<li><Link to="/perfil">Perfil</Link></li>
						<li>Configurações</li>
					</ul>
				</nav>
			</aside>

			<main className="treinador-main">
				<header className="treinador-header">
					<div>
						<h1>Olá, {treinador.nome}</h1>
						<p>Visão geral do seu dia</p>
					</div>
					<div className="header-actions">
						<button className="btn primario">Novo Plano</button>
						<button className="btn secundario">Adicionar Aluno</button>
					</div>
				</header>

				<section className="kpis">
					<div className="kpi-card">
						<span className="kpi-label">Alunos</span>
						<span className="kpi-value">{treinador.totalAlunos}</span>
					</div>
					<div className="kpi-card">
						<span className="kpi-label">Planos Ativos</span>
						<span className="kpi-value">{treinador.planosAtivos}</span>
					</div>
					<div className="kpi-card">
						<span className="kpi-label">Treinos hoje</span>
						<span className="kpi-value">{treinador.treinosHoje}</span>
					</div>
					<div className="kpi-card">
						<span className="kpi-label">Mensagens</span>
						<span className="kpi-value">{treinador.mensagens}</span>
					</div>
				</section>

				<section className="conteudo-grid">
					<div className="card alunos">
						<div className="card-header">
							<h2>Meus Alunos</h2>
							<button className="link-btn">Ver todos</button>
						</div>
						<ul className="alunos-lista">
							{alunos.map(a => (
								<li key={a.id}>
									<div className="aluno-info">
										<strong>{a.nome}</strong>
										<span>{a.objetivo}</span>
									</div>
									<div className="aluno-progresso">
										<div className="barra">
											<div className="preenchimento" style={{ width: `${a.progresso}%` }} />
										</div>
										<span>{a.progresso}%</span>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="card agenda">
						<div className="card-header">
							<h2>Agenda de Hoje</h2>
							<button className="link-btn">Ver agenda</button>
						</div>
						<table className="agenda-tabela">
							<thead>
								<tr>
									<th>Hora</th>
									<th>Aluno</th>
									<th>Tipo</th>
									<th>Status</th>
								</tr>
							</thead>
							<tbody>
								{agenda.map((item, idx) => (
									<tr key={idx} className={`status-${item.status.toLowerCase()}`}>
										<td>{item.hora}</td>
										<td>{item.aluno}</td>
										<td>{item.tipo}</td>
										<td>{item.status}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="card solicitacoes">
						<div className="card-header">
							<h2>Solicitações Recentes</h2>
							<button className="link-btn">Ver todas</button>
						</div>
						<ul className="solicitacoes-lista">
							{solicitacoes.map(s => (
								<li key={s.id}>
									<div>
										<strong>{s.aluno}</strong>
										<span>{s.tipo}</span>
									</div>
									<span className="data">{s.data}</span>
								</li>
							))}
						</ul>
					</div>
				</section>
			</main>
		</div>
	);
};

export default DashboardTreinador;
