import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeToggle from '../components/DarkModeToggle';
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
		<div className="treinador-container dark:from-indigo-950 dark:to-purple-950">
			<aside className="treinador-sidebar dark:bg-gray-900 dark:shadow-xl">
				<div className="sidebar-header">
					<h2 className="dark:text-gray-100">TrainMe</h2>
				</div>
				<nav className="sidebar-nav">
					<ul>
						<li className="active dark:bg-purple-600">Dashboard</li>
						<li className="dark:hover:bg-gray-700 dark:text-gray-300"><Link to="/dashboard">Dashboard Aluno</Link></li>
						<li className="dark:hover:bg-gray-700 dark:text-gray-300"><Link to="/perfil">Perfil</Link></li>
						<li className="dark:hover:bg-gray-700 dark:text-gray-300">Configurações</li>
					</ul>
				</nav>
			</aside>

			<main className="treinador-main dark:bg-gray-900">
				<header className="treinador-header">
					<div>
						<h1 className="dark:text-gray-100">Olá, {treinador.nome}</h1>
						<p className="dark:text-gray-400">Visão geral do seu dia</p>
					</div>
					<div className="header-actions">
						<button className="btn primario dark:from-purple-600 dark:to-indigo-600">Novo Plano</button>
						<button className="btn secundario dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">Adicionar Aluno</button>
					</div>
				</header>

				<section className="kpis">
					<div className="kpi-card dark:bg-gray-800 dark:shadow-lg">
						<span className="kpi-label dark:text-gray-400">Alunos</span>
						<span className="kpi-value dark:text-gray-100">{treinador.totalAlunos}</span>
					</div>
					<div className="kpi-card dark:bg-gray-800 dark:shadow-lg">
						<span className="kpi-label dark:text-gray-400">Planos Ativos</span>
						<span className="kpi-value dark:text-gray-100">{treinador.planosAtivos}</span>
					</div>
					<div className="kpi-card dark:bg-gray-800 dark:shadow-lg">
						<span className="kpi-label dark:text-gray-400">Treinos hoje</span>
						<span className="kpi-value dark:text-gray-100">{treinador.treinosHoje}</span>
					</div>
					<div className="kpi-card dark:bg-gray-800 dark:shadow-lg">
						<span className="kpi-label dark:text-gray-400">Mensagens</span>
						<span className="kpi-value dark:text-gray-100">{treinador.mensagens}</span>
					</div>
				</section>

				<section className="conteudo-grid">
					<div className="card alunos dark:bg-gray-800 dark:shadow-lg">
						<div className="card-header">
							<h2 className="dark:text-gray-100">Meus Alunos</h2>
							<button className="link-btn dark:text-purple-400 dark:hover:text-purple-300">Ver todos</button>
						</div>
						<ul className="alunos-lista">
							{alunos.map(a => (
								<li key={a.id} className="dark:border-gray-700">
									<div className="aluno-info">
										<strong className="dark:text-gray-100">{a.nome}</strong>
										<span className="dark:text-gray-400">{a.objetivo}</span>
									</div>
									<div className="aluno-progresso">
										<div className="barra dark:bg-gray-700">
											<div className="preenchimento dark:from-purple-600 dark:to-indigo-600" style={{ width: `${a.progresso}%` }} />
										</div>
										<span className="dark:text-gray-300">{a.progresso}%</span>
									</div>
								</li>
							))}
						</ul>
					</div>

					<div className="card agenda dark:bg-gray-800 dark:shadow-lg">
						<div className="card-header">
							<h2 className="dark:text-gray-100">Agenda de Hoje</h2>
							<button className="link-btn dark:text-purple-400 dark:hover:text-purple-300">Ver agenda</button>
						</div>
						<table className="agenda-tabela">
							<thead>
								<tr>
									<th className="dark:text-purple-400">Hora</th>
									<th className="dark:text-purple-400">Aluno</th>
									<th className="dark:text-purple-400">Tipo</th>
									<th className="dark:text-purple-400">Status</th>
								</tr>
							</thead>
							<tbody>
								{agenda.map((item, idx) => (
									<tr key={idx} className={`status-${item.status.toLowerCase()} dark:border-gray-700`}>
										<td className="dark:text-gray-300">{item.hora}</td>
										<td className="dark:text-gray-300">{item.aluno}</td>
										<td className="dark:text-gray-300">{item.tipo}</td>
										<td>{item.status}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>

					<div className="card solicitacoes dark:bg-gray-800 dark:shadow-lg">
						<div className="card-header">
							<h2 className="dark:text-gray-100">Solicitações Recentes</h2>
							<button className="link-btn dark:text-purple-400 dark:hover:text-purple-300">Ver todas</button>
						</div>
						<ul className="solicitacoes-lista">
							{solicitacoes.map(s => (
								<li key={s.id} className="dark:border-gray-700">
									<div>
										<strong className="dark:text-gray-100">{s.aluno}</strong>
										<span className="dark:text-gray-400">{s.tipo}</span>
									</div>
									<span className="data dark:text-gray-500">{s.data}</span>
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
