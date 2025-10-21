import React, { useState } from 'react';
import DarkModeToggle from '../components/DarkModeToggle';
import '../assets/Styles/Perfil.css';

const Perfil = () => {
	const [perfil, setPerfil] = useState({
		nome: 'João Silva',
		email: 'joao.silva@email.com',
		dataNascimento: '2000-05-15',
		genero: 'Masculino',
		objetivo: 'Ganhar Massa Muscular',
		nivel: 'Intermediário',
		peso: 75,
		altura: 178
	});
	const [editando, setEditando] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setPerfil(prev => ({ ...prev, [name]: value }));
	};

	const handleEdit = () => setEditando(true);
	const handleSave = () => setEditando(false);

	return (
		<div className="perfil-container dark:from-indigo-950 dark:to-purple-950">
					<div className="perfil-card dark:bg-gray-800 dark:shadow-2xl">
								<div className="perfil-foto-wrapper">
									<div className="perfil-foto dark:border-purple-600">
										<img src={perfil.foto || "https://ui-avatars.com/api/?name=Joao+Silva&background=667eea&color=fff&size=128"} alt="Foto de perfil" />
										{editando && (
											<label className="perfil-upload-label">
												<input
													type="file"
													accept="image/*"
													style={{ display: 'none' }}
													onChange={e => {
														const file = e.target.files[0];
														if (file) {
															const reader = new FileReader();
															reader.onload = ev => {
																setPerfil(prev => ({ ...prev, foto: ev.target.result }));
															};
															reader.readAsDataURL(file);
														}
													}}
												/>
												<span className="perfil-upload-icone dark:bg-gray-700" title="Alterar foto">
													<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#667eea" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16.5 13.5L13.5 16.5L8.5 11.5"/><path d="M12 8v4"/></svg>
												</span>
											</label>
										)}
									</div>
								</div>
						<h2 className="perfil-title dark:text-purple-400">Meu Perfil</h2>
						<form className="perfil-form" onSubmit={e => { e.preventDefault(); handleSave(); }}>
					<div className="perfil-row">
						<div className="perfil-group">
							<label className="dark:text-gray-300">Nome</label>
							<input type="text" name="nome" value={perfil.nome} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500" />
						</div>
						<div className="perfil-group">
							<label className="dark:text-gray-300">Email</label>
							<input type="email" name="email" value={perfil.email} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500" />
						</div>
					</div>
					<div className="perfil-row">
						<div className="perfil-group">
							<label className="dark:text-gray-300">Data de Nascimento</label>
							<input type="date" name="dataNascimento" value={perfil.dataNascimento} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500" />
						</div>
						<div className="perfil-group">
							<label className="dark:text-gray-300">Gênero</label>
							<select name="genero" value={perfil.genero} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500">
								<option value="Masculino">Masculino</option>
								<option value="Feminino">Feminino</option>
								<option value="Outro">Outro</option>
								<option value="Prefiro não informar">Prefiro não informar</option>
							</select>
						</div>
					</div>
					<div className="perfil-row">
						<div className="perfil-group">
							<label className="dark:text-gray-300">Objetivo</label>
							<select name="objetivo" value={perfil.objetivo} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500">
								<option value="Ganhar Massa Muscular">Ganhar Massa Muscular</option>
								<option value="Perder Peso">Perder Peso</option>
								<option value="Manter a Forma">Manter a Forma</option>
								<option value="Reabilitação">Reabilitação</option>
							</select>
						</div>
						<div className="perfil-group">
							<label className="dark:text-gray-300">Nível</label>
							<select name="nivel" value={perfil.nivel} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500">
								<option value="Iniciante">Iniciante</option>
								<option value="Intermediário">Intermediário</option>
								<option value="Avançado">Avançado</option>
							</select>
						</div>
					</div>
					<div className="perfil-row">
						<div className="perfil-group">
							<label className="dark:text-gray-300">Peso (kg)</label>
							<input type="number" name="peso" value={perfil.peso} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500" />
						</div>
						<div className="perfil-group">
							<label className="dark:text-gray-300">Altura (cm)</label>
							<input type="number" name="altura" value={perfil.altura} onChange={handleChange} disabled={!editando} className="perfil-input dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200 dark:disabled:bg-gray-800 dark:disabled:text-gray-500" />
						</div>
					</div>
					<div className="perfil-actions">
						{!editando ? (
							<button type="button" className="perfil-btn editar dark:from-purple-600 dark:to-indigo-600" onClick={handleEdit}>Editar</button>
						) : (
							<button type="submit" className="perfil-btn salvar dark:bg-green-600 dark:hover:bg-green-700">Salvar</button>
						)}
					</div>
				</form>
			</div>
		</div>
	);
};

export default Perfil;
